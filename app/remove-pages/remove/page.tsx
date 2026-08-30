"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "motion/react";
import {
    IconLoader2,
    IconArrowLeft,
    IconDownload,
    IconFileMinus,
    IconCheck,
    IconX,
    IconSettings,
    IconTrash,
} from "@tabler/icons-react";
import { downloadBlob } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";

// ── Helpers ──────────────────────────────────────────────────────────────────
function parsePageRanges(input: string, maxPage: number): Set<number> {
    const pages = new Set<number>();
    const trimmed = input.trim();
    if (!trimmed) return pages;

    if (!/^[\d\s,-]*$/.test(input)) {
        throw new Error("Only numbers, commas, and hyphens are allowed.");
    }

    const parts = trimmed.split(",");
    for (const part of parts) {
        const p = part.trim();
        if (!p) continue;

        if (p.includes("-")) {
            const rangeParts = p.split("-");
            if (rangeParts.length !== 2 || !rangeParts[0].trim() || !rangeParts[1].trim()) {
                throw new Error("Invalid range format. Use e.g., '3-5'.");
            }
            const s = parseInt(rangeParts[0], 10);
            const e = parseInt(rangeParts[1], 10);
            if (isNaN(s) || isNaN(e)) {
                throw new Error(`Invalid range numbers: ${p}`);
            }
            if (s < 1 || e > maxPage || s > e) {
                throw new Error(`Range out of bounds: ${p} (max ${maxPage}).`);
            }
            for (let i = s; i <= e; i++) {
                pages.add(i);
            }
        } else {
            const num = parseInt(p, 10);
            if (isNaN(num)) {
                throw new Error(`Invalid page number: ${p}`);
            }
            if (num < 1 || num > maxPage) {
                throw new Error(`Page out of bounds: ${p} (max ${maxPage}).`);
            }
            pages.add(num);
        }
    }
    return pages;
}

function formatPageRanges(pagesSet: Set<number>): string {
    if (pagesSet.size === 0) return "";
    const sorted = Array.from(pagesSet).sort((a, b) => a - b);
    const ranges: string[] = [];
    let start = sorted[0];
    let end = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === end + 1) {
            end = sorted[i];
        } else {
            if (start === end) ranges.push(`${start}`);
            else ranges.push(`${start}-${end}`);
            start = sorted[i];
            end = sorted[i];
        }
    }
    if (start === end) ranges.push(`${start}`);
    else ranges.push(`${start}-${end}`);
    return ranges.join(", ");
}

interface PageItem {
    pageIndex: number;
    thumbnail: string;
}

export default function RemovePagesToolPage() {
    const router = useRouter();
    const hasInitialized = useRef(false);

    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PageItem[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [globalError, setGlobalError] = useState<string | null>(null);

    // State for removing pages
    const [removedPages, setRemovedPages] = useState<Set<number>>(new Set());
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState<string | null>(null);

    // Mobile Responsive
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const loadThumbnails = useCallback(async (f: File) => {
        setIsLoading(true);
        setLoadingProgress(0);
        try {
            const pdfjsLib = await import("pdfjs-dist");
            pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
                "pdfjs-dist/build/pdf.worker.min.mjs",
                import.meta.url
            ).toString();
            const ab = await f.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: ab }).promise;
            const n = pdf.numPages;

            const loadedPages: PageItem[] = [];
            for (let i = 1; i <= n; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 1.0 });
                const canvas = document.createElement("canvas");
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext("2d")!;
                await page.render({ canvasContext: ctx, viewport } as any).promise;

                loadedPages.push({
                    pageIndex: i,
                    thumbnail: canvas.toDataURL("image/jpeg", 0.8),
                });
                setLoadingProgress(Math.round((i / n) * 100));
            }
            setPages(loadedPages);
        } catch {
            setGlobalError("Could not read PDF file.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    // ── Load file from FileStore ─────────────────────────────────────────────
    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        const f = FileStore.getFile("remove-pages_0");
        if (!f) {
            router.replace("/remove-pages");
            return;
        }

        setFile(f);
        loadThumbnails(f);
    }, [router, loadThumbnails]);

    // ── Input changes ────────────────────────────────────────────────────────
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);

        if (pages.length === 0) return;

        try {
            const parsed = parsePageRanges(val, pages.length);
            setRemovedPages(parsed);
            setInputError(null);
        } catch (err: any) {
            setInputError(err.message || "Invalid input.");
        }
    };

    const togglePage = (pageIndex: number) => {
        const newRemoved = new Set(removedPages);
        if (newRemoved.has(pageIndex)) {
            newRemoved.delete(pageIndex);
        } else {
            newRemoved.add(pageIndex);
        }
        setRemovedPages(newRemoved);
        setInputValue(formatPageRanges(newRemoved));
        setInputError(null);
    };

    // ── Export ───────────────────────────────────────────────────────────────
    const handleExport = async () => {
        if (!file || pages.length === 0) return;

        if (removedPages.size === pages.length) {
            setGlobalError("You cannot remove all pages from the PDF.");
            return;
        }

        setIsProcessing(true);
        setGlobalError(null);

        try {
            const { PDFDocument } = await import("pdf-lib");

            const ab = await file.arrayBuffer();
            const sourceDoc = await PDFDocument.load(ab, { ignoreEncryption: true });
            const pdfDoc = await PDFDocument.create();

            for (let i = 1; i <= pages.length; i++) {
                if (!removedPages.has(i)) {
                    const [copiedPage] = await pdfDoc.copyPages(sourceDoc, [i - 1]);
                    pdfDoc.addPage(copiedPage);
                }
            }

            const bytes = await pdfDoc.save();
            const blob = new Blob([new Uint8Array(bytes).buffer], { type: "application/pdf" });

            const originalName = file.name.replace(/\.[^/.]+$/, "");
            downloadBlob(blob, `${originalName}_removed.pdf`);

            setSuccess(true);
        } catch (err: any) {
            setGlobalError(err?.message || "Export failed. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    // ── Render States ────────────────────────────────────────────────────────
    if (isLoading && pages.length === 0) {
        return (
            <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <IconLoader2 size={36} className="animate-spin text-brand-teal" />
                        <p className="text-neutral-500 text-sm font-medium">Reading PDF pages ({loadingProgress}%)…</p>
                    </div>
                </main>
            </div>
        );
    }

    if (success) {
        return (
            <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#E0DED9] max-w-lg w-full text-center flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200"
                    >
                        <div className="w-20 h-20 bg-[#e6f4ef] rounded-2xl border border-[#bce0d5] flex items-center justify-center mx-auto mb-2 text-brand-teal">
                            <IconCheck size={40} stroke={2.5} />
                        </div>
                        <h2 className="text-2xl font-bold text-brand-dark">
                            Pages Removed Successfully!
                        </h2>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Your modified PDF has been downloaded with the selected pages deleted.
                        </p>
                        <button
                            onClick={() => router.push("/remove-pages")}
                            className="bg-brand-teal text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#036649] transition-all shadow-sm w-full cursor-pointer mt-2 text-sm active:scale-[0.98]"
                        >
                            Remove Pages from Another PDF
                        </button>
                    </motion.div>
                </main>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col bg-[#FAFAF9] pt-[64px] overflow-hidden">
            <Navbar />

            {/* Header Toolbar */}
            <div className="bg-white border-b border-[#E0DED9] sticky top-0 z-40 px-4 md:px-6 py-3 shadow-2xs flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <button
                        onClick={() => router.push("/remove-pages")}
                        className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-600 hover:text-brand-dark px-3 py-1.5 rounded-xl border border-[#E0DED9] bg-white hover:bg-[#FAF9F7] transition-all cursor-pointer shadow-2xs shrink-0"
                        title="Back"
                    >
                        <IconArrowLeft size={16} /> Back
                    </button>
                    <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-xl bg-[#fee2e2] text-[#dc2626] border border-[#fecaca] shrink-0">
                        <IconFileMinus size={18} stroke={2} />
                    </span>
                    <div className="min-w-0">
                        <h1 className="text-sm md:text-base font-bold text-brand-dark leading-tight truncate">
                            Remove PDF Pages
                        </h1>
                        <p className="text-[10px] md:text-xs text-neutral-500 truncate mt-0.5">
                            {file?.name} • {pages.length} pages
                        </p>
                    </div>
                </div>
            </div>

            {globalError && (
                <div className="bg-red-50 text-red-700 p-3 flex items-center justify-center text-xs sm:text-sm font-medium border-b border-red-200 shrink-0">
                    {globalError}
                </div>
            )}

            {/* Split View */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden relative">
                {/* Pages Grid */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5 sm:gap-6 pb-24">
                        <AnimatePresence>
                            {pages.map((p) => {
                                const isRemoved = removedPages.has(p.pageIndex);
                                return (
                                    <PageCard
                                        key={p.pageIndex}
                                        page={p}
                                        isRemoved={isRemoved}
                                        onToggle={() => togglePage(p.pageIndex)}
                                    />
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </main>

                {/* Mobile FAB */}
                <button
                    onClick={() => setIsMobileDrawerOpen(true)}
                    className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-brand-teal text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:bg-[#036649] transition-all border-2 border-white active:scale-95 cursor-pointer"
                    aria-label="Settings"
                >
                    <IconSettings size={28} stroke={1.5} />
                </button>

                {/* Mobile Backdrop */}
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

                {/* Right Options Sidebar (Desktop) & Bottom Drawer (Mobile) */}
                <aside className={`
                    fixed inset-x-0 bottom-0 z-50 flex flex-col bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                    lg:static lg:bg-transparent lg:shadow-none lg:rounded-none lg:translate-y-0 lg:z-auto lg:w-[320px] lg:shrink-0 lg:border-l lg:border-[#E0DED9] lg:h-full
                    ${isMobileDrawerOpen ? "translate-y-0 max-h-[85vh]" : "translate-y-full lg:max-h-full"}
                `}>
                    {/* Drawer drag handle */}
                    <div className="lg:hidden flex items-center justify-center pt-4 pb-2 shrink-0 cursor-pointer" onClick={() => setIsMobileDrawerOpen(false)}>
                        <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
                    </div>

                    <div className="flex-1 overflow-y-auto px-5 py-3 lg:py-6 flex flex-col gap-5 custom-scrollbar pb-8 lg:pb-6">
                        <div className="flex flex-col gap-1.5">
                            <h3 className="text-sm font-bold text-brand-dark">Pages to Remove</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                Click on pages in the preview, or type the page numbers below separated by commas or hyphens (e.g. <code className="bg-[#FAFAF9] border border-[#E0DED9] px-1.5 py-0.5 rounded text-brand-dark font-semibold">1, 3, 5-7</code>).
                            </p>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="E.g. 1, 3, 5-7"
                                className={`w-full border rounded-xl py-3 px-4 text-sm font-medium bg-[#FAFAF9] text-brand-dark focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:bg-white transition-all shadow-2xs border-[#E0DED9] ${
                                    inputError ? "border-red-400 ring-1 ring-red-400 focus:border-red-400 focus:ring-red-400" : ""
                                }`}
                            />
                            {inputError && (
                                <p className="text-xs text-red-500 font-medium px-1">
                                    {inputError}
                                </p>
                            )}
                        </div>

                        <div className="mt-auto bg-[#FAFAF9] border border-[#E0DED9] rounded-2xl p-4 flex flex-col gap-2.5">
                            <div className="flex justify-between items-center text-xs sm:text-sm">
                                <span className="text-neutral-500 font-medium">Total Pages</span>
                                <span className="text-brand-dark font-bold">{pages.length}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs sm:text-sm">
                                <span className="text-neutral-500 font-medium">Pages to Remove</span>
                                <span className="text-red-500 font-bold">{removedPages.size}</span>
                            </div>
                            <div className="border-t border-[#E0DED9] my-0.5" />
                            <div className="flex justify-between items-center text-xs sm:text-sm">
                                <span className="text-neutral-500 font-medium">Pages Remaining</span>
                                <span className="text-brand-teal font-bold">{pages.length - removedPages.size}</span>
                            </div>
                        </div>
                    </div>

                    {/* Apply Changes Button */}
                    <div className="p-4 border-t border-[#E0DED9] bg-white lg:shadow-[0_-4px_12px_rgba(0,0,0,0.03)] shrink-0">
                        <button
                            onClick={handleExport}
                            disabled={isProcessing || !!inputError}
                            className="w-full bg-brand-teal text-white py-3.5 rounded-xl font-bold hover:bg-[#036649] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base active:scale-[0.98] cursor-pointer"
                        >
                            {isProcessing ? (
                                <><IconLoader2 size={18} className="animate-spin" /> Processing…</>
                            ) : (
                                <><IconDownload size={18} /> Apply Changes</>
                            )}
                        </button>
                        <div className="lg:hidden h-safe-area-bottom w-full bg-white" />
                    </div>
                </aside>
            </div>
        </div>
    );
}

// ── Components ───────────────────────────────────────────────────────────────
function PageCard({
    page,
    isRemoved,
    onToggle,
}: {
    page: PageItem;
    isRemoved: boolean;
    onToggle: () => void;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onToggle}
            className="relative flex flex-col items-center gap-2.5 group select-none cursor-pointer"
            style={{ width: 140 }}
        >
            <div
                className={`relative w-full rounded-2xl overflow-hidden border-2 transition-all duration-200 p-2 shadow-2xs ${
                    isRemoved
                        ? "border-red-500 opacity-60 bg-red-50/20"
                        : hovered
                            ? "border-red-400 shadow-md bg-[#FAF9F7]"
                            : "border-[#E0DED9] bg-[#FAFAF9]"
                }`}
                style={{ aspectRatio: "0.707" }}
            >
                <img
                    src={page.thumbnail}
                    alt={`Page ${page.pageIndex}`}
                    draggable={false}
                    className="w-full h-full object-contain pointer-events-none drop-shadow-2xs"
                />

                {/* Red cross overlay when removed (Desktop only) */}
                {isRemoved && (
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-red-500/15 backdrop-blur-[1px]">
                        <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white shadow-lg">
                            <IconTrash size={28} stroke={2} />
                        </div>
                    </div>
                )}

                {/* Mobile removed tint state */}
                {isRemoved && (
                    <div className="lg:hidden absolute inset-0 bg-red-500/10 pointer-events-none" />
                )}

                {/* Hover overlay hint (Desktop only) */}
                {!isRemoved && hovered && (
                    <div className="hidden lg:flex absolute inset-0 bg-red-500/10 items-center justify-center">
                        <div className="w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center text-red-500 shadow-md transition-transform hover:scale-110 border border-red-200">
                            <IconTrash size={20} stroke={2} />
                        </div>
                    </div>
                )}

                {/* Mobile-only checkbox indicator */}
                <div className="lg:hidden absolute top-2 right-2 z-10">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors shadow-2xs ${
                        isRemoved ? "bg-red-500 border-red-500 text-white shadow-sm" : "bg-white/90 border-[#E0DED9]"
                    }`}>
                        {isRemoved && <IconX size={14} stroke={3} />}
                    </div>
                </div>
            </div>

            <div className={`text-xs font-bold px-3 py-1 rounded-full shadow-2xs transition-colors ${
                isRemoved
                    ? "bg-[#fee2e2] text-[#dc2626] border border-[#fecaca]"
                    : "bg-white text-brand-dark border border-[#E0DED9] group-hover:border-neutral-400"
            }`}>
                Page {page.pageIndex}
            </div>
        </motion.div>
    );
}
