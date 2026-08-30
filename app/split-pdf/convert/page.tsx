"use client";
import React, { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "motion/react";
import {
    IconScissors,
    IconPlus,
    IconX,
    IconLoader2,
    IconCheck,
    IconArrowLeft,
    IconFileTypePdf,
    IconSettings,
} from "@tabler/icons-react";
import { downloadBlob, downloadZip, pdfToImages, splitPdf, PdfRange } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function uid() {
    return Math.random().toString(36).slice(2, 10);
}

function stringifyPages(nums: number[]) {
    return nums.sort((a, b) => a - b).join(", ");
}

function parseToRanges(input: string, maxPages: number): PdfRange[] {
    const ranges: PdfRange[] = [];
    const parts = input.split(",");
    for (let raw of parts) {
        const part = raw.trim();
        if (!part) continue;
        if (part.includes("-")) {
            const segments = part.split("-");
            if (segments.length !== 2) continue;
            let [s, e] = segments.map(x => parseInt(x.trim(), 10));
            if (!isNaN(s) && !isNaN(e)) {
                if (s > e) { const t = s; s = e; e = t; }
                const finalS = Math.max(1, Math.min(maxPages, s));
                const finalE = Math.max(1, Math.min(maxPages, e));
                ranges.push({ start: finalS, end: finalE });
            }
        } else {
            const p = parseInt(part, 10);
            if (!isNaN(p)) {
                const finalP = Math.max(1, Math.min(maxPages, p));
                ranges.push({ start: finalP, end: finalP });
            }
        }
    }
    return ranges;
}

function parsePages(input: string, maxPages: number) {
    const set = new Set<number>();
    const parts = input.split(",");
    for (let part of parts) {
        part = part.trim();
        if (!part) continue;
        if (part.includes("-")) {
            const [s, e] = part.split("-");
            let start = parseInt(s, 10);
            let end = parseInt(e, 10);
            if (!isNaN(start) && !isNaN(end)) {
                if (start > end) { const t = start; start = end; end = t; }
                for (let i = start; i <= end; i++) {
                    if (i > 0 && i <= maxPages) set.add(i);
                }
            }
        } else {
            const p = parseInt(part, 10);
            if (!isNaN(p) && p > 0 && p <= maxPages) set.add(p);
        }
    }
    return set;
}

// ─── Main Page ────────────────────────────────────────────────────────────────

function SplitPdfConvertContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const modeParam = searchParams.get("mode");
    const hasInitialized = useRef(false);

    // File setup state
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<{ dataUrl: string; pageNum: number }[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Options UI Top Level
    const [topMode, setTopMode] = useState<"split" | "extract">(modeParam === "extract" ? "extract" : "split");

    // "Split" Options
    const [splitMode, setSplitMode] = useState<"custom" | "fixed">("custom");
    const [customRanges, setCustomRanges] = useState<{ id: string; startRaw: string; endRaw: string }[]>([
        { id: uid(), startRaw: "", endRaw: "" }
    ]);
    const [fixedSizeRaw, setFixedSizeRaw] = useState<string>("");
    const [mergeRanges, setMergeRanges] = useState(false);

    // "Extract" Options
    const [extractInput, setExtractInput] = useState<string>("");
    const [mergeExtracted, setMergeExtracted] = useState(false);

    // Mobile Responsive
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    // Load File & Render pages
    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        const f = FileStore.getFile("split_pdf_main");
        if (!f) {
            router.replace("/split-pdf");
            return;
        }

        FileStore.clearFile("split_pdf_main");
        setFile(f);

        // Load preview images
        pdfToImages(f, "image/jpeg", 1)
            .then((renderedPages) => {
                setPages(renderedPages);
                if (renderedPages.length > 0) {
                    setCustomRanges([{ id: uid(), startRaw: "", endRaw: "" }]);
                }
            })
            .catch((err) => {
                console.error("Failed to render PDF preview:", err);
                setError("Failed to load PDF preview. Some pages could be corrupted.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [router]);

    const totalPages = pages.length;

    // Derived Extract Select State
    const selectedPagesSet = useMemo(() => {
        return parsePages(extractInput, totalPages);
    }, [extractInput, totalPages]);

    const extractRanges = useMemo(() => {
        return parseToRanges(extractInput, totalPages);
    }, [extractInput, totalPages]);

    const extractError = useMemo(() => {
        if (!extractInput.trim()) return null;
        if (/[^0-9,\- ]/.test(extractInput)) return "Only numbers, commas and hyphens are allowed (e.g. 1, 3, 5-8)";
        const parts = extractInput.split(",");
        for (let raw of parts) {
            const part = raw.trim();
            if (!part) continue;
            if (part.includes("-")) {
                const segments = part.split("-");
                if (segments.length !== 2) return `Invalid range: "${part}"`;
                const [s, e] = segments.map(x => parseInt(x.trim(), 10));
                if (isNaN(s) || isNaN(e)) return `Invalid range: "${part}"`;
                if (s < 1 || s > totalPages) return `Page ${s} is out of range (1–${totalPages})`;
                if (e < 1 || e > totalPages) return `Page ${e} is out of range (1–${totalPages})`;
                if (s > e) return `Range "${part}" is reversed — use ${e}-${s}`;
            } else {
                const p = parseInt(part, 10);
                if (isNaN(p)) return `"${part}" is not a valid page number`;
                if (p < 1 || p > totalPages) return `Page ${p} is out of range (1–${totalPages})`;
            }
        }
        return null;
    }, [extractInput, totalPages]);

    const handleGridPageClick = (pageNum: number) => {
        if (topMode === "split") return;

        if (topMode === "extract") {
            const newSet = new Set(selectedPagesSet);
            if (newSet.has(pageNum)) {
                newSet.delete(pageNum);
            } else {
                newSet.add(pageNum);
            }
            const sorted = Array.from(newSet).sort((a, b) => a - b);
            setExtractInput(stringifyPages(sorted));
        }
    };

    const addRange = () => {
        setCustomRanges([...customRanges, { id: uid(), startRaw: "", endRaw: "" }]);
    };

    const deleteRange = (id: string) => {
        setCustomRanges(customRanges.filter((r) => r.id !== id));
    };

    const updateRange = (id: string, field: "startRaw" | "endRaw", val: string) => {
        const cleaned = val.replace(/[^0-9]/g, "");
        setCustomRanges(
            customRanges.map((r) =>
                r.id !== id ? r : { ...r, [field]: cleaned }
            )
        );
    };

    const rangeValidity = customRanges.map((r) => {
        const s = parseInt(r.startRaw, 10);
        const e = parseInt(r.endRaw, 10);
        const startOk = !isNaN(s) && s >= 1 && s <= totalPages;
        const endOk = !isNaN(e) && e >= 1 && e <= totalPages;
        const orderOk = startOk && endOk && s <= e;
        return { startOk, endOk, orderOk, valid: startOk && endOk && orderOk, s, e };
    });

    const allRangesValid = rangeValidity.every((rv) => rv.valid);

    const fixedSizeParsed = parseInt(fixedSizeRaw, 10);
    const fixedSizeValid = !isNaN(fixedSizeParsed) && fixedSizeParsed >= 1 && fixedSizeParsed <= totalPages;
    const fixedGroups: { start: number; end: number }[] = fixedSizeValid
        ? (() => {
            const groups = [];
            let s = 1;
            while (s <= totalPages) {
                groups.push({ start: s, end: Math.min(totalPages, s + fixedSizeParsed - 1) });
                s += fixedSizeParsed;
            }
            return groups;
        })()
        : [];

    const handleTransform = async () => {
        if (!file) return;

        let rangesToProcess: PdfRange[] = [];
        let shouldMergeAll = false;

        if (topMode === "split") {
            if (splitMode === "custom") {
                if (!allRangesValid) {
                    setError("One or more ranges are invalid. Please fix them before splitting.");
                    return;
                }
                rangesToProcess = rangeValidity.map(rv => ({ start: rv.s, end: rv.e }));
                shouldMergeAll = mergeRanges;
            } else {
                if (!fixedSizeValid) {
                    setError("Please enter a valid page size for fixed split.");
                    return;
                }
                rangesToProcess = fixedGroups;
                shouldMergeAll = false;
            }
        } else {
            rangesToProcess = extractRanges;
            if (rangesToProcess.length === 0) {
                setError("Please select at least 1 page to extract.");
                return;
            }
            shouldMergeAll = mergeExtracted;
        }

        if (rangesToProcess.length === 0) {
            setError("No valid ranges defined.");
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            const output = await splitPdf(file, rangesToProcess, shouldMergeAll);
            const baseName = file.name.replace(/\.[^/.]+$/, "");

            if (shouldMergeAll || rangesToProcess.length === 1) {
                const pdfBytes = Array.isArray(output) ? output[0] : output;
                const blob = new Blob([new Uint8Array(pdfBytes).buffer], { type: "application/pdf" });
                downloadBlob(blob, topMode === "extract" ? `${baseName}-extracted.pdf` : `${baseName}-split.pdf`);
            } else {
                const itemsToZip = (output as Uint8Array[]).map((bytes, i) => {
                    const r = rangesToProcess[i];
                    return {
                        name: `${baseName}-${r.start === r.end ? r.start : `${r.start}-${r.end}`}.pdf`,
                        data: new Blob([new Uint8Array(bytes).buffer], { type: "application/pdf" })
                    };
                });
                await downloadZip(itemsToZip, `${baseName}-split.zip`);
            }
            setSuccess(true);
        } catch (err: any) {
            console.error("Split/Extract error:", err);
            setError(err?.message || "Failed to split PDF. Check sizes and try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const isPageHighlighted = (pageNum: number) => {
        if (topMode === "extract") return selectedPagesSet.has(pageNum);
        if (topMode === "split") {
            if (splitMode === "custom") {
                return rangeValidity.some(rv => rv.valid && pageNum >= rv.s && pageNum <= rv.e);
            } else {
                return true;
            }
        }
        return false;
    };

    // ── Loading screen ──
    if (isLoading || !file || pages.length === 0) {
        return (
            <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <IconLoader2 size={36} className="animate-spin text-brand-teal" />
                        <p className="text-neutral-500 text-sm font-medium">Reading PDF pages…</p>
                    </div>
                </main>
            </div>
        );
    }

    // ── Success screen ──
    if (success) {
        return (
            <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center py-24 px-4">
                    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#E0DED9] w-full max-w-lg flex flex-col items-center text-center gap-5 animate-in fade-in zoom-in duration-300">
                        <span className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
                            <IconCheck size={40} stroke={2.5} />
                        </span>
                        <div>
                            <h1 className="text-2xl font-bold text-brand-dark">PDF Processed!</h1>
                            <p className="text-neutral-600 mt-2 text-sm max-w-sm leading-relaxed">
                                Your document has been successfully split and downloaded.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                            <button
                                onClick={() => { setSuccess(false); router.push("/split-pdf"); }}
                                className="flex-1 py-3.5 px-5 rounded-xl bg-white text-brand-dark font-semibold border border-[#E0DED9] hover:bg-[#FAF9F7] transition-all cursor-pointer shadow-2xs text-sm"
                            >
                                Start Over
                            </button>
                            <button
                                onClick={() => setSuccess(false)}
                                className="flex-1 py-3.5 px-5 rounded-xl bg-brand-teal text-white font-bold hover:bg-[#036649] transition-all cursor-pointer shadow-sm text-sm"
                            >
                                Back to Editing
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col relative overflow-hidden bg-[#FAFAF9]">
            <Navbar />

            {/* Dot background */}
            <div aria-hidden className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(circle, #047C58 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.04,
                }}
            />

            <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 w-full pt-24 pb-6 relative z-10 flex flex-col lg:flex-row gap-6 min-h-0">

                {/* ── Header details (Mobile) ── */}
                <div className="w-full lg:hidden flex items-center gap-2 mb-2 shrink-0">
                    <button
                        onClick={() => router.push("/split-pdf")}
                        aria-label="Back"
                        className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg text-neutral-500 hover:text-brand-dark hover:bg-neutral-100 transition-colors cursor-pointer active:scale-[0.97]"
                    >
                        <IconArrowLeft size={18} />
                    </button>
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg text-brand-teal shrink-0 bg-[#e6f4ef] border border-[#bce0d5]">
                            <IconScissors size={16} stroke={1.5} />
                        </span>
                        <div className="min-w-0">
                            <h1 className="text-sm font-bold text-brand-dark leading-tight truncate">Split PDF</h1>
                            <p className="text-[10px] text-neutral-500 leading-tight truncate">{file.name} ({totalPages} pages)</p>
                        </div>
                    </div>
                </div>

                {/* ── Left Grid / Range Preview Area ── */}
                {topMode === "split" && splitMode === "fixed" ? (
                    <div className="flex-1 min-w-0 bg-white border border-[#E0DED9] rounded-2xl flex flex-col shadow-sm overflow-hidden">
                        <div className="hidden lg:flex items-center gap-4 px-5 py-4 border-b border-[#E0DED9] bg-white z-10 shrink-0">
                            <button onClick={() => router.push("/split-pdf")} className="flex items-center justify-center w-10 h-10 rounded-xl text-neutral-500 hover:text-brand-dark hover:bg-[#FAF9F7] transition-colors cursor-pointer">
                                <IconArrowLeft size={20} />
                            </button>
                            <div>
                                <h1 className="text-xl font-bold text-brand-dark">Split PDF</h1>
                                <p className="text-xs text-neutral-500">{file.name} • {totalPages} pages</p>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
                            {!fixedSizeValid ? (
                                <div className="flex flex-col items-center justify-center h-64 gap-3 text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9] flex items-center justify-center">
                                        <IconScissors size={28} className="text-neutral-400" />
                                    </div>
                                    <p className="text-neutral-500 text-sm font-medium">Enter a page size on the right<br />to preview how the PDF will be split</p>
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-6">
                                    {fixedGroups.map((grp, gi) => {
                                        const firstPage = pages.find(p => p.pageNum === grp.start);
                                        const lastPage = grp.end !== grp.start ? pages.find(p => p.pageNum === grp.end) : null;
                                        const hasMiddle = grp.end - grp.start > 1;
                                        return (
                                            <motion.div
                                                key={gi}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.25, delay: gi * 0.05 }}
                                                className="flex flex-col gap-2"
                                            >
                                                <span className="text-xs font-bold text-neutral-500 text-center">Range {gi + 1}</span>
                                                <div className="flex items-center gap-2 border-2 border-dashed border-brand-teal/40 rounded-2xl p-3 bg-[#e6f4ef]/20">
                                                    {firstPage && (
                                                        <div className="flex flex-col items-center gap-1.5">
                                                            <div className="w-20 h-28 rounded-xl overflow-hidden border-2 border-brand-teal/30 bg-white shadow-sm flex items-center justify-center p-1">
                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img src={firstPage.dataUrl} alt={`Page ${grp.start}`} className="max-w-full max-h-full object-contain" />
                                                            </div>
                                                            <span className="text-[11px] font-bold text-brand-teal">{grp.start}</span>
                                                        </div>
                                                    )}
                                                    {hasMiddle && (
                                                        <span className="text-neutral-400 font-bold text-lg tracking-widest px-1 select-none">•••</span>
                                                    )}
                                                    {lastPage && (
                                                        <div className="flex flex-col items-center gap-1.5">
                                                            <div className="w-20 h-28 rounded-xl overflow-hidden border-2 border-brand-teal/30 bg-white shadow-sm flex items-center justify-center p-1">
                                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img src={lastPage.dataUrl} alt={`Page ${grp.end}`} className="max-w-full max-h-full object-contain" />
                                                            </div>
                                                            <span className="text-[11px] font-bold text-brand-teal">{grp.end}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 min-w-0 bg-white border border-[#E0DED9] rounded-2xl flex flex-col shadow-sm overflow-hidden">
                        <div className="hidden lg:flex items-center gap-4 px-5 py-4 border-b border-[#E0DED9] bg-white z-10 shrink-0">
                            <button onClick={() => router.push("/split-pdf")} className="flex items-center justify-center w-10 h-10 rounded-xl text-neutral-500 hover:text-brand-dark hover:bg-[#FAF9F7] transition-colors cursor-pointer">
                                <IconArrowLeft size={20} />
                            </button>
                            <div>
                                <h1 className="text-xl font-bold text-brand-dark">Split PDF</h1>
                                <p className="text-xs text-neutral-500">{file.name} • {totalPages} pages</p>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
                            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 ${topMode === "split" ? "pointer-events-none" : ""}`}>
                                {pages.map((p) => {
                                    const selected = isPageHighlighted(p.pageNum);
                                    return (
                                        <motion.div
                                            key={p.pageNum}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => handleGridPageClick(p.pageNum)}
                                            className={`relative flex flex-col items-center gap-2 group ${topMode === "extract" ? "cursor-pointer" : "cursor-default"}`}
                                            title={topMode === "extract" ? "Click to select" : undefined}
                                        >
                                            <div className={`relative w-full aspect-3/4 rounded-xl overflow-hidden border-2 transition-all p-2 bg-[#FAFAF9] shadow-2xs flex items-center justify-center
                                                ${selected ? "border-brand-teal shadow-sm ring-2 ring-brand-teal/20 bg-[#e6f4ef]/20" : "border-[#E0DED9] hover:border-neutral-400"}`}
                                            >
                                                {topMode === "extract" && (
                                                    <div className={`absolute top-2 right-2 w-5 h-5 rounded-md border-2 flex items-center justify-center z-10 transition-colors
                                                        ${selected ? "bg-brand-teal border-brand-teal text-white" : "border-[#E0DED9] bg-white/90 opacity-0 group-hover:opacity-100"}`}>
                                                        {selected && <IconCheck size={14} stroke={3} />}
                                                    </div>
                                                )}
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={p.dataUrl} alt={`Page ${p.pageNum}`} className="max-w-full max-h-full object-contain pointer-events-none drop-shadow-2xs" />
                                            </div>
                                            <span className={`text-xs font-semibold px-2 py-1 rounded-md transition-colors ${selected ? "bg-brand-teal text-white" : "text-neutral-500 bg-[#FAFAF9] border border-[#E0DED9] group-hover:bg-[#FAF9F7]"}`}>
                                                Page {p.pageNum}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Mobile FAB ── */}
                <button
                    onClick={() => setIsMobileDrawerOpen(true)}
                    className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-brand-teal text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:bg-[#036649] transition-all border-2 border-white active:scale-95 cursor-pointer"
                    aria-label="Settings"
                >
                    <IconSettings size={28} stroke={1.5} />
                </button>

                {/* ── Mobile Backdrop ── */}
                <AnimatePresence>
                    {isMobileDrawerOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileDrawerOpen(false)}
                            className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
                        />
                    )}
                </AnimatePresence>

                {/* ── Right Options Sidebar (Desktop) & Bottom Drawer (Mobile) ── */}
                <div className={`
                    fixed inset-x-0 bottom-0 z-50 flex flex-col bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                    lg:static lg:bg-transparent lg:shadow-none lg:rounded-none lg:translate-y-0 lg:z-auto lg:w-80 lg:shrink-0 lg:flex lg:overflow-y-auto lg:pr-2 lg:pb-0 custom-scrollbar
                    ${isMobileDrawerOpen ? "translate-y-0 max-h-[85vh]" : "translate-y-full lg:max-h-full"}
                `}>
                    {/* Drawer drag handle */}
                    <div className="lg:hidden flex items-center justify-center pt-4 pb-2 shrink-0 cursor-pointer" onClick={() => setIsMobileDrawerOpen(false)}>
                        <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
                    </div>

                    <div className="bg-white lg:rounded-2xl lg:border lg:border-[#E0DED9] lg:shadow-sm flex flex-col gap-0 overflow-y-auto custom-scrollbar flex-1 pb-8 lg:pb-0">

                        {/* Top Mode Tabs */}
                        <div className="flex border-b border-[#E0DED9]">
                            <button
                                onClick={() => setTopMode("split")}
                                className={`flex-1 py-4 text-sm font-bold border-b-2 transition-colors cursor-pointer ${topMode === "split" ? "border-brand-teal text-brand-teal bg-[#e6f4ef]/30" : "border-transparent text-neutral-500 hover:text-brand-dark hover:bg-[#FAFAF9]"}`}
                            >
                                Split by range
                            </button>
                            <button
                                onClick={() => setTopMode("extract")}
                                className={`flex-1 py-4 text-sm font-bold border-b-2 transition-colors cursor-pointer ${topMode === "extract" ? "border-brand-teal text-brand-teal bg-[#e6f4ef]/30" : "border-transparent text-neutral-500 hover:text-brand-dark hover:bg-[#FAFAF9]"}`}
                            >
                                Extract pages
                            </button>
                        </div>

                        <div className="p-5 flex flex-col gap-5">
                            {/* ── Split Logic ── */}
                            {topMode === "split" && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-sm font-bold text-brand-dark flex items-center gap-2">
                                            <IconFileTypePdf size={18} className="text-brand-teal" />
                                            Range mode:
                                        </h2>
                                    </div>

                                    <div className="flex bg-[#FAFAF9] border border-[#E0DED9] rounded-xl p-1">
                                        <button onClick={() => setSplitMode("custom")} className={`flex-1 py-1.5 text-sm font-bold rounded-lg transition-all cursor-pointer ${splitMode === "custom" ? "bg-white shadow-2xs border border-[#E0DED9] text-brand-teal" : "text-neutral-500 border border-transparent"}`}>Custom</button>
                                        <button onClick={() => setSplitMode("fixed")} className={`flex-1 py-1.5 text-sm font-bold rounded-lg transition-all cursor-pointer ${splitMode === "fixed" ? "bg-white shadow-2xs border border-[#E0DED9] text-brand-teal" : "text-neutral-500 border border-transparent"}`}>Fixed</button>
                                    </div>

                                    {splitMode === "custom" ? (
                                        <div className="flex flex-col gap-3">
                                            <AnimatePresence initial={false}>
                                                {customRanges.map((range, i) => {
                                                    const validity = rangeValidity[i];
                                                    return (
                                                        <motion.div
                                                            key={range.id}
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                                                            className="bg-[#FAFAF9] p-3 rounded-xl border border-[#E0DED9]"
                                                        >
                                                            <div className="flex items-center justify-between mb-3">
                                                                <span className="text-xs font-bold text-brand-dark">Range {i + 1}</span>
                                                                {customRanges.length > 1 && (
                                                                    <button onClick={() => deleteRange(range.id)} className="text-neutral-400 hover:text-red-500 transition-colors w-5 h-5 flex items-center justify-center rounded-md hover:bg-red-50 cursor-pointer">
                                                                        <IconX size={14} stroke={2.5} />
                                                                    </button>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {/* from page */}
                                                                <div className={`flex-1 bg-white border rounded-lg flex items-center overflow-hidden transition-colors ${!validity.startOk && range.startRaw !== "" ? "border-red-400 ring-1 ring-red-400" : "border-[#E0DED9] focus-within:border-brand-teal focus-within:ring-1 focus-within:ring-brand-teal"}`}>
                                                                    <span className="text-[10px] text-neutral-500 pl-2 pr-1 py-2.5 select-none shrink-0 whitespace-nowrap">from</span>
                                                                    <input
                                                                        inputMode="numeric"
                                                                        pattern="[0-9]*"
                                                                        placeholder="—"
                                                                        value={range.startRaw}
                                                                        onChange={(e) => updateRange(range.id, 'startRaw', e.target.value)}
                                                                        className={`flex-1 text-sm font-semibold outline-none py-2.5 pr-2 text-right bg-transparent min-w-0 ${!validity.startOk && range.startRaw !== "" ? "text-red-500" : "text-brand-dark"}`}
                                                                    />
                                                                    <div className="flex flex-col border-l border-[#E0DED9] shrink-0">
                                                                        <button type="button" onMouseDown={(e) => { e.preventDefault(); const cur = parseInt(range.startRaw || "0", 10); const next = cur + 1; if (next <= totalPages) updateRange(range.id, 'startRaw', String(next)); }} className="flex items-center justify-center w-7 h-5 hover:bg-[#e6f4ef] hover:text-brand-teal text-neutral-400 border-b border-[#E0DED9] transition-colors cursor-pointer">
                                                                            <svg width="7" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                                        </button>
                                                                        <button type="button" onMouseDown={(e) => { e.preventDefault(); const cur = parseInt(range.startRaw || "2", 10); const next = cur - 1; if (next >= 1) updateRange(range.id, 'startRaw', String(next)); }} className="flex items-center justify-center w-7 h-5 hover:bg-[#e6f4ef] hover:text-brand-teal text-neutral-400 transition-colors cursor-pointer">
                                                                            <svg width="7" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                {/* to page */}
                                                                <div className={`flex-1 bg-white border rounded-lg flex items-center overflow-hidden transition-colors ${(!validity.endOk && range.endRaw !== "") || (!validity.orderOk && range.startRaw !== "" && range.endRaw !== "") ? "border-red-400 ring-1 ring-red-400" : "border-[#E0DED9] focus-within:border-brand-teal focus-within:ring-1 focus-within:ring-brand-teal"}`}>
                                                                    <span className="text-[10px] text-neutral-500 pl-2 pr-1 py-2.5 select-none shrink-0">to</span>
                                                                    <input
                                                                        inputMode="numeric"
                                                                        pattern="[0-9]*"
                                                                        placeholder="—"
                                                                        value={range.endRaw}
                                                                        onChange={(e) => updateRange(range.id, 'endRaw', e.target.value)}
                                                                        className={`flex-1 text-sm font-semibold outline-none py-2.5 pr-2 text-right bg-transparent min-w-0 ${(!validity.endOk && range.endRaw !== "") || (!validity.orderOk && range.startRaw !== "" && range.endRaw !== "") ? "text-red-500" : "text-brand-dark"}`}
                                                                    />
                                                                    <div className="flex flex-col border-l border-[#E0DED9] shrink-0">
                                                                        <button type="button" onMouseDown={(e) => { e.preventDefault(); const cur = parseInt(range.endRaw || "0", 10); const next = cur + 1; if (next <= totalPages) updateRange(range.id, 'endRaw', String(next)); }} className="flex items-center justify-center w-7 h-5 hover:bg-[#e6f4ef] hover:text-brand-teal text-neutral-400 border-b border-[#E0DED9] transition-colors cursor-pointer">
                                                                            <svg width="7" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                                        </button>
                                                                        <button type="button" onMouseDown={(e) => { e.preventDefault(); const cur = parseInt(range.endRaw || "2", 10); const next = cur - 1; if (next >= 1) updateRange(range.id, 'endRaw', String(next)); }} className="flex items-center justify-center w-7 h-5 hover:bg-[#e6f4ef] hover:text-brand-teal text-neutral-400 transition-colors cursor-pointer">
                                                                            <svg width="7" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {!validity.orderOk && validity.startOk && validity.endOk && (
                                                                <p className="text-[10px] text-red-500 mt-1.5 font-medium">"From" must be ≤ "To"</p>
                                                            )}
                                                        </motion.div>
                                                    );
                                                })}
                                            </AnimatePresence>
                                            <button
                                                onClick={addRange}
                                                className="mt-1 flex items-center justify-center w-full py-2.5 rounded-xl border border-dashed border-brand-teal text-brand-teal hover:bg-[#e6f4ef] transition-colors text-sm font-bold gap-1.5 cursor-pointer"
                                            >
                                                <IconPlus size={16} stroke={2} /> Add Range
                                            </button>

                                            <div className="mt-4 px-1 flex flex-col gap-1">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-neutral-500 font-medium">Files to be generated:</span>
                                                    <span className="text-brand-teal font-bold bg-[#e6f4ef] px-2 py-0.5 rounded border border-[#bce0d5]">
                                                        {allRangesValid ? (mergeRanges ? 1 : customRanges.length) : 0} PDF file{(allRangesValid ? (mergeRanges ? 1 : customRanges.length) : 0) !== 1 ? 's' : ''}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        /* ── Fixed mode input ── */
                                        <div className="bg-[#FAFAF9] p-4 rounded-xl border border-[#E0DED9]">
                                            <p className="text-xs text-neutral-500 mb-3 font-medium leading-relaxed">
                                                Split the PDF into chunks of <strong>N pages</strong> each. A preview will appear on the left.
                                            </p>
                                            <div className={`bg-white border rounded-xl flex items-center overflow-hidden transition-colors ${fixedSizeRaw !== "" && !fixedSizeValid
                                                ? "border-red-400 ring-1 ring-red-400"
                                                : "border-[#E0DED9] focus-within:border-brand-teal focus-within:ring-1 focus-within:ring-brand-teal"
                                                }`}>
                                                <span className="text-[11px] text-neutral-500 pl-3 pr-2 py-3 select-none shrink-0 whitespace-nowrap">pages per chunk</span>
                                                <input
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    placeholder="—"
                                                    value={fixedSizeRaw}
                                                    onChange={(e) => setFixedSizeRaw(e.target.value.replace(/[^0-9]/g, ""))}
                                                    className={`flex-1 text-base font-semibold outline-none py-3 pr-2 text-right bg-transparent min-w-0 ${fixedSizeRaw !== "" && !fixedSizeValid ? "text-red-500" : "text-brand-dark"}`}
                                                />
                                                <div className="flex flex-col border-l border-[#E0DED9] shrink-0">
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => { e.preventDefault(); const cur = parseInt(fixedSizeRaw || "0", 10); const next = cur + 1; if (next <= totalPages) setFixedSizeRaw(String(next)); }}
                                                        className="flex items-center justify-center w-8 h-5 hover:bg-[#e6f4ef] hover:text-brand-teal text-neutral-400 transition-colors border-b border-[#E0DED9] cursor-pointer"
                                                        aria-label="Increase"
                                                    >
                                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => { e.preventDefault(); const cur = parseInt(fixedSizeRaw || "2", 10); const next = cur - 1; if (next >= 1) setFixedSizeRaw(String(next)); }}
                                                        className="flex items-center justify-center w-8 h-5 hover:bg-[#e6f4ef] hover:text-brand-teal text-neutral-400 transition-colors cursor-pointer"
                                                        aria-label="Decrease"
                                                    >
                                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            {fixedSizeRaw !== "" && !fixedSizeValid && (
                                                <p className="text-[10px] text-red-500 mt-1.5 font-medium">Must be between 1 and {totalPages}</p>
                                            )}
                                            <div className="mt-4 flex flex-col gap-1">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-neutral-500 font-medium">Files to be generated:</span>
                                                    <span className="text-brand-teal font-bold bg-[#e6f4ef] px-2 py-0.5 rounded border border-[#bce0d5]">
                                                        {fixedSizeValid ? fixedGroups.length : 0} PDF file{(fixedSizeValid ? fixedGroups.length : 0) !== 1 ? 's' : ''}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {splitMode === "custom" && (
                                        <label className="flex items-center gap-3 mt-2 cursor-pointer p-2 rounded-lg hover:bg-[#FAFAF9] transition-colors">
                                            <div
                                                className={`relative rounded-full transition-colors duration-200 border-2 ${mergeRanges ? "bg-brand-teal border-brand-teal" : "bg-slate-200 border-slate-200"}`}
                                                onClick={() => setMergeRanges((v) => !v)}
                                                style={{ height: "22px", width: "40px", flexShrink: 0 }}
                                            >
                                                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${mergeRanges ? "translate-x-5" : "translate-x-0.5"}`} />
                                            </div>
                                            <span className="text-sm font-semibold text-brand-dark">Merge all ranges in one PDF</span>
                                        </label>
                                    )}
                                </>
                            )}

                            {/* ── Extract Logic ── */}
                            {topMode === "extract" && (
                                <>
                                    <div className="flex flex-col gap-3">
                                        <h2 className="text-sm font-bold text-brand-dark flex items-center gap-2">
                                            <IconFileTypePdf size={18} className="text-brand-teal" />
                                            Pages to Extract:
                                        </h2>
                                        <p className="text-[13px] text-neutral-500 leading-relaxed">
                                            Select pages you want to extract by clicking them on the left, or type their page numbers below:
                                        </p>
                                        <div className={`bg-white border rounded-xl px-3 py-1 text-sm flex items-center shadow-2xs transition-colors ${extractError
                                            ? "border-red-400 ring-1 ring-red-400 focus-within:border-red-400 focus-within:ring-red-400"
                                            : "border-[#E0DED9] focus-within:border-brand-teal focus-within:ring-1 focus-within:ring-brand-teal"
                                            }`}>
                                            <input
                                                type="text"
                                                placeholder="e.g. 1, 3, 5-8"
                                                value={extractInput}
                                                onChange={(e) => {
                                                    const filtered = e.target.value.replace(/[^0-9,\- ]/g, "");
                                                    setExtractInput(filtered);
                                                }}
                                                className="w-full py-2.5 outline-none font-medium text-brand-dark placeholder:text-neutral-400"
                                            />
                                        </div>
                                        {extractError ? (
                                            <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                                                <span className="inline-block w-1 h-1 rounded-full bg-red-500 shrink-0" />
                                                {extractError}
                                            </p>
                                        ) : (
                                            <div className="mt-1 flex flex-col gap-1 px-1">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-neutral-500 font-medium">Selected:</span>
                                                    <span className="text-brand-dark font-semibold">{selectedPagesSet.size} page{selectedPagesSet.size !== 1 ? 's' : ''}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-neutral-500 font-medium">Files to be generated:</span>
                                                    <span className="text-brand-teal font-bold bg-[#e6f4ef] px-2 py-0.5 rounded border border-[#bce0d5]">
                                                        {(extractRanges.length > 0 && !extractError) ? (mergeExtracted ? 1 : extractRanges.length) : 0} PDF file{((extractRanges.length > 0 && !extractError) ? (mergeExtracted ? 1 : extractRanges.length) : 0) !== 1 ? 's' : ''}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <label className="flex items-center gap-3 mt-4 cursor-pointer p-2 rounded-lg hover:bg-[#FAFAF9] transition-colors">
                                        <div
                                            className={`relative rounded-full transition-colors duration-200 border-2 ${mergeExtracted ? "bg-brand-teal border-brand-teal" : "bg-slate-200 border-slate-200"}`}
                                            onClick={() => setMergeExtracted((v) => !v)}
                                            style={{ height: "22px", width: "40px", flexShrink: 0 }}
                                        >
                                            <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${mergeExtracted ? "translate-x-5" : "translate-x-0.5"}`} />
                                        </div>
                                        <span className="text-sm font-semibold text-brand-dark">Merge extracted pages in one PDF</span>
                                    </label>
                                </>
                            )}

                            {error && (
                                <div className="p-3.5 bg-red-50 text-red-700 text-xs rounded-xl flex items-start gap-2 border border-red-200 font-medium">
                                    <span className="w-1.5 h-1.5 mt-1 rounded-full bg-red-500 shrink-0" />
                                    {error}
                                </div>
                            )}

                            {/* Action button */}
                            <button
                                onClick={handleTransform}
                                disabled={isProcessing
                                    || (topMode === "split" && splitMode === "custom" && !allRangesValid)
                                    || (topMode === "split" && splitMode === "fixed" && !fixedSizeValid)
                                    || (topMode === "extract" && (!!extractError || selectedPagesSet.size === 0))
                                }
                                className={`w-full mt-2 py-4 rounded-xl font-bold text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] text-[15px] ${(topMode === "split" && splitMode === "custom" && !allRangesValid)
                                    || (topMode === "split" && splitMode === "fixed" && !fixedSizeValid)
                                    || (topMode === "extract" && (!!extractError || (extractInput.trim() !== "" && selectedPagesSet.size === 0)))
                                    ? "bg-brand-teal/40 cursor-not-allowed shadow-none"
                                    : isProcessing
                                        ? "bg-brand-teal opacity-60 cursor-wait"
                                        : "bg-brand-teal hover:bg-[#036649] cursor-pointer"
                                    }`}
                            >
                                {isProcessing && <IconLoader2 className="animate-spin" size={18} />}
                                {isProcessing
                                    ? "Processing…"
                                    : (topMode === "split" && splitMode === "custom" && !allRangesValid) || (topMode === "split" && splitMode === "fixed" && !fixedSizeValid)
                                        ? "Invalid range"
                                        : topMode === "extract" && !!extractError
                                            ? "Invalid pages"
                                            : topMode === "extract" && extractInput.trim() !== "" && selectedPagesSet.size === 0
                                                ? "Invalid selection"
                                                : topMode === "extract" && selectedPagesSet.size === 0
                                                    ? "Select pages first"
                                                    : topMode === "split" ? "Split PDF" : "Extract Pages"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default function SplitPdfConvertPage() {
    return (
        <Suspense fallback={<div className="h-screen bg-[#FAFAF9]"></div>}>
            <SplitPdfConvertContent />
        </Suspense>
    );
}
