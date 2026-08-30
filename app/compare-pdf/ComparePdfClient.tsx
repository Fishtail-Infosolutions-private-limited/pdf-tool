"use client";
import React, {
    useState,
    useRef,
    useCallback,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    IconUpload,
    IconLoader2,
    IconX,
    IconChevronLeft,
    IconChevronRight,
    IconArrowLeft,
    IconArrowRight,
    IconEye,
    IconEyeOff,
    IconAlertCircle,
    IconCheck,
    IconFiles,
    IconFileText,
    IconMinus,
    IconPlus,
    IconArrowsLeftRight,
    IconListDetails,
} from "@tabler/icons-react";

interface BBox {
    x: number;
    y: number;
    w: number;
    h: number;
    text: string;
}

interface PageDiff {
    page_num: number;
    page_a_exists: boolean;
    page_b_exists: boolean;
    has_changes: boolean;
    deletions: BBox[];
    additions: BBox[];
}

interface DiffSummary {
    total_added_words: number;
    total_deleted_words: number;
    changed_pages: number[];
    total_pages: number;
}

interface DiffResult {
    total_pages_a: number;
    total_pages_b: number;
    pages: PageDiff[];
    summary: DiffSummary;
}

interface PageImage {
    pageNum: number;
    dataUrl: string;
}

const ACCENT = "#7C3AED";

function DropZone({
    id,
    label,
    sublabel,
    file,
    onFile,
    color,
}: {
    id: string;
    label: string;
    sublabel: string;
    file: File | null;
    onFile: (f: File) => void;
    color: string;
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        const f = e.dataTransfer.files[0];
        if (f && f.type === "application/pdf") onFile(f);
    };

    return (
        <div
            id={id}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => !file && inputRef.current?.click()}
            className="relative rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer select-none overflow-hidden"
            style={{
                borderColor: dragging ? color : file ? color : "#E0DED9",
                background: dragging ? `${color}08` : file ? `${color}06` : "#FAFAF9",
            }}
        >
            <input
                ref={inputRef}
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onFile(f);
                }}
            />

            <div className="flex flex-col items-center justify-center gap-3 p-8 min-h-[180px]">
                {file ? (
                    <>
                        <span
                            className="flex items-center justify-center w-12 h-12 rounded-2xl"
                            style={{ background: `${color}15`, color }}
                        >
                            <IconFileText size={24} stroke={1.8} />
                        </span>
                        <div className="text-center">
                            <p
                                className="font-semibold text-sm truncate max-w-[200px]"
                                style={{ color }}
                            >
                                {file.name}
                            </p>
                            <p className="text-xs text-neutral-500 mt-0.5">
                                {(file.size / 1024).toFixed(1)} KB · PDF
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                inputRef.current?.click();
                            }}
                            className="text-xs font-medium px-3 py-1 rounded-full border transition-colors cursor-pointer"
                            style={{ borderColor: color, color }}
                        >
                            Change file
                        </button>
                    </>
                ) : (
                    <>
                        <span
                            className="flex items-center justify-center w-12 h-12 rounded-2xl"
                            style={{ background: `${color}10`, color }}
                        >
                            <IconUpload size={22} stroke={1.8} />
                        </span>
                        <div className="text-center">
                            <p className="font-bold text-sm text-brand-dark">{label}</p>
                            <p className="text-xs text-neutral-500 mt-0.5">{sublabel}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function PageViewer({
    pages,
    currentPage,
    diffPages,
    highlightType,
    showHighlights,
    scrollRef,
    onScroll,
    label,
    labelColor,
}: {
    pages: PageImage[];
    currentPage: number;
    diffPages: PageDiff[];
    highlightType: "deletions" | "additions";
    showHighlights: boolean;
    scrollRef: React.RefObject<HTMLDivElement | null>;
    onScroll: () => void;
    label: string;
    labelColor: string;
}) {
    const pageData = pages.find((p) => p.pageNum === currentPage);
    const diffData = diffPages.find((p) => p.page_num === currentPage);
    const boxes: BBox[] = showHighlights && diffData ? diffData[highlightType] : [];

    const highlightColor =
        highlightType === "deletions"
            ? "rgba(239, 68, 68, 0.35)"
            : "rgba(34, 197, 94, 0.35)";
    const highlightBorder =
        highlightType === "deletions"
            ? "rgba(239, 68, 68, 0.7)"
            : "rgba(34, 197, 94, 0.7)";

    return (
        <div className="flex flex-col flex-1 min-w-0 min-h-0 bg-white rounded-2xl border border-[#E0DED9] shadow-sm overflow-hidden">
            {/* Header */}
            <div
                className="flex items-center gap-2 px-4 py-3 border-b border-[#E0DED9] shrink-0"
                style={{ background: `${labelColor}08` }}
            >
                <span
                    className="flex items-center justify-center w-6 h-6 rounded-md text-white text-xs font-bold shrink-0"
                    style={{ background: labelColor }}
                >
                    {label === "Original" ? "A" : "B"}
                </span>
                <span className="text-sm font-semibold" style={{ color: labelColor }}>
                    {label}
                </span>
                <span className="ml-auto text-xs text-neutral-500 font-medium">
                    Page {currentPage}
                </span>
                {diffData?.has_changes && (
                    <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ background: labelColor }}
                    >
                        Changed
                    </span>
                )}
            </div>

            {/* Scrollable content */}
            <div
                ref={scrollRef}
                onScroll={onScroll}
                className="flex-1 overflow-auto custom-scrollbar"
            >
                <div className="flex justify-center p-4">
                    {pageData ? (
                        <div className="relative inline-block shadow-lg rounded overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={pageData.dataUrl}
                                alt={`Page ${currentPage}`}
                                className="block max-w-full"
                                style={{ display: "block" }}
                                draggable={false}
                            />
                            {boxes.map((box, i) => (
                                <div
                                    key={i}
                                    className="absolute pointer-events-none"
                                    style={{
                                        left: `${box.x * 100}%`,
                                        top: `${box.y * 100}%`,
                                        width: `${box.w * 100}%`,
                                        height: `${box.h * 100}%`,
                                        background: highlightColor,
                                        border: `1px solid ${highlightBorder}`,
                                        borderRadius: 2,
                                    }}
                                    title={box.text}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-3 py-20 text-neutral-400">
                            <IconFiles size={32} stroke={1.5} />
                            <p className="text-sm font-medium">No page available</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ComparePdfClient() {
    const [fileA, setFileA] = useState<File | null>(null);
    const [fileB, setFileB] = useState<File | null>(null);

    const [step, setStep] = useState<"upload" | "processing" | "results">("upload");
    const [processingMsg, setProcessingMsg] = useState("Analysing documents…");
    const [error, setError] = useState<string | null>(null);

    const [diffResult, setDiffResult] = useState<DiffResult | null>(null);
    const [pagesA, setPagesA] = useState<PageImage[]>([]);
    const [pagesB, setPagesB] = useState<PageImage[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [showHighlights, setShowHighlights] = useState(true);

    const scrollARef = useRef<HTMLDivElement>(null);
    const scrollBRef = useRef<HTMLDivElement>(null);
    const isSyncing = useRef(false);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerTab, setDrawerTab] = useState<"navigation" | "details">("navigation");
    const [mobileView, setMobileView] = useState<"original" | "modified">("original");

    const [delLimit, setDelLimit] = useState(20);
    const [addLimit, setAddLimit] = useState(20);

    const syncScroll = useCallback((source: "a" | "b") => {
        if (isSyncing.current) return;
        isSyncing.current = true;
        const src = source === "a" ? scrollARef.current : scrollBRef.current;
        const dst = source === "a" ? scrollBRef.current : scrollARef.current;
        if (src && dst) {
            dst.scrollTop = src.scrollTop;
            dst.scrollLeft = src.scrollLeft;
        }
        requestAnimationFrame(() => { isSyncing.current = false; });
    }, []);

    const renderPages = useCallback(async (file: File): Promise<PageImage[]> => {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
            "pdfjs-dist/build/pdf.worker.min.mjs",
            import.meta.url
        ).toString();

        const buf = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
        const results: PageImage[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.8 });
            const canvas = document.createElement("canvas");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext("2d")!;
            await page.render({ canvasContext: ctx, viewport } as any).promise;
            results.push({
                pageNum: i,
                dataUrl: canvas.toDataURL("image/jpeg", 0.9),
            });
        }
        return results;
    }, []);

    const runCompare = useCallback(async () => {
        if (!fileA || !fileB) return;

        (async () => {
            setStep("processing");
            setError(null);

            try {
                setProcessingMsg("Extracting & comparing text…");
                const form = new FormData();
                form.append("file_a", fileA, fileA.name);
                form.append("file_b", fileB, fileB.name);

                const diffRes = await fetch("/api/compare-pdf", {
                    method: "POST",
                    body: form,
                });

                if (!diffRes.ok) {
                    const body = await diffRes.json().catch(() => ({}));
                    throw new Error(body.error || `Server error ${diffRes.status}`);
                }

                const diff: DiffResult = await diffRes.json();
                setDiffResult(diff);

                setProcessingMsg("Rendering " + fileA.name + "…");
                const imgA = await renderPages(fileA);
                setPagesA(imgA);

                setProcessingMsg("Rendering " + fileB.name + "…");
                const imgB = await renderPages(fileB);
                setPagesB(imgB);

                setCurrentPage(1);
                setStep("results");
            } catch (err: any) {
                setError(err?.message || "An unexpected error occurred.");
                setStep("upload");
            }
        })();
    }, [fileA, fileB, renderPages]);

    const pageList = diffResult ? diffResult.pages : [];
    const totalPages = pageList.length;
    const pageIndex = pageList.findIndex((p) => p.page_num === currentPage);

    const goToPage = (num: number) => {
        setCurrentPage(num);
        setDelLimit(20);
        setAddLimit(20);
        scrollARef.current && (scrollARef.current.scrollTop = 0);
        scrollBRef.current && (scrollBRef.current.scrollTop = 0);
    };

    const prevPage = () => {
        if (pageIndex > 0) goToPage(pageList[pageIndex - 1].page_num);
    };
    const nextPage = () => {
        if (pageIndex < totalPages - 1) goToPage(pageList[pageIndex + 1].page_num);
    };

    const changedPageList = diffResult?.summary.changed_pages ?? [];

    const reset = () => {
        setFileA(null);
        setFileB(null);
        setDiffResult(null);
        setPagesA([]);
        setPagesB([]);
        setStep("upload");
        setError(null);
        setShowHighlights(true);
    };

    if (step === "upload") {
        return (
            <div className="w-full bg-white rounded-3xl border border-[#E0DED9] p-5 sm:p-8 md:p-9 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DropZone
                        id="drop-zone-a"
                        label="Original PDF (Version A)"
                        sublabel="Drag & drop or browse"
                        file={fileA}
                        onFile={setFileA}
                        color="#ef4444"
                    />
                    <DropZone
                        id="drop-zone-b"
                        label="Modified PDF (Version B)"
                        sublabel="Drag & drop or browse"
                        file={fileB}
                        onFile={setFileB}
                        color="#22c55e"
                    />
                </div>

                <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 mt-4">
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm" style={{ background: "rgba(239,68,68,0.4)" }} />
                        Removed text (A only)
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm" style={{ background: "rgba(34,197,94,0.4)" }} />
                        Added text (B only)
                    </span>
                </div>

                {error && (
                    <div className="flex items-start gap-2 p-3 mt-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-medium">
                        <IconAlertCircle size={16} className="shrink-0 mt-0.5" />
                        {error}
                    </div>
                )}

                <button
                    id="compare-pdf-btn"
                    type="button"
                    onClick={runCompare}
                    disabled={!fileA || !fileB}
                    className="w-full mt-5 py-4 rounded-xl font-bold text-white text-[15px] flex items-center justify-center gap-2.5 transition-all duration-200 shadow-sm active:scale-[0.99] cursor-pointer"
                    style={{
                        background: fileA && fileB
                            ? `linear-gradient(135deg, ${ACCENT}, #6d28d9)`
                            : "#D1D5DB",
                        cursor: fileA && fileB ? "pointer" : "not-allowed",
                    }}
                >
                    <IconArrowsLeftRight size={20} />
                    <span>Compare Documents</span>
                    <IconArrowRight size={16} />
                </button>
            </div>
        );
    }

    if (step === "processing") {
        return (
            <div className="w-full bg-white rounded-3xl border border-[#E0DED9] p-10 flex flex-col items-center justify-center text-center gap-6 shadow-sm">
                <div className="relative flex items-center justify-center w-20 h-20">
                    <span
                        className="flex items-center justify-center w-16 h-16 rounded-2xl text-white shadow-sm"
                        style={{ background: ACCENT }}
                    >
                        <IconLoader2 size={32} className="animate-spin" />
                    </span>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-brand-dark">Comparing Documents…</h2>
                    <p className="text-neutral-500 text-sm mt-1">{processingMsg}</p>
                </div>
            </div>
        );
    }

    const summary = diffResult!.summary;
    const currentDiffPage = diffResult!.pages.find((p) => p.page_num === currentPage);
    const hasNoChanges = summary.changed_pages.length === 0;

    return (
        <div className="w-full bg-white rounded-3xl border border-[#E0DED9] shadow-sm flex flex-col overflow-hidden text-left">
            {/* Toolbar */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-[#E0DED9] bg-[#FAFAF9] flex-wrap">
                <button
                    type="button"
                    onClick={reset}
                    className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-brand-dark transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg hover:bg-neutral-200/60"
                >
                    <IconArrowLeft size={15} />
                    New Comparison
                </button>

                <div className="w-px h-5 bg-[#E0DED9]" />

                <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444" }}>
                        <IconMinus size={12} />
                        {summary.total_deleted_words} removed
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>
                        <IconPlus size={12} />
                        {summary.total_added_words} added
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-neutral-600">
                        <IconArrowsLeftRight size={12} />
                        {summary.changed_pages.length} pages changed
                    </span>
                </div>

                <div className="flex-1" />

                <button
                    type="button"
                    onClick={() => setShowHighlights((v) => !v)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer"
                    style={showHighlights
                        ? { background: ACCENT, borderColor: ACCENT, color: "white" }
                        : { background: "white", borderColor: "#E0DED9", color: "#8C886B" }
                    }
                >
                    {showHighlights ? <IconEye size={13} /> : <IconEyeOff size={13} />}
                    <span>Highlights</span>
                </button>

                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={prevPage}
                        disabled={pageIndex <= 0}
                        className="flex items-center justify-center w-7 h-7 rounded-lg border border-[#E0DED9] text-neutral-500 hover:text-brand-dark hover:bg-neutral-100 transition-colors cursor-pointer disabled:opacity-40"
                    >
                        <IconChevronLeft size={14} />
                    </button>
                    <span className="text-xs font-semibold text-brand-dark min-w-[70px] text-center">
                        {currentPage} / {diffResult!.summary.total_pages}
                    </span>
                    <button
                        type="button"
                        onClick={nextPage}
                        disabled={pageIndex >= totalPages - 1}
                        className="flex items-center justify-center w-7 h-7 rounded-lg border border-[#E0DED9] text-neutral-500 hover:text-brand-dark hover:bg-neutral-100 transition-colors cursor-pointer disabled:opacity-40"
                    >
                        <IconChevronRight size={14} />
                    </button>
                </div>
            </div>

            {/* Viewers */}
            <div className="flex flex-col lg:flex-row gap-4 p-4 h-[650px] overflow-hidden">
                <PageViewer
                    pages={pagesA}
                    currentPage={currentPage}
                    diffPages={pageList}
                    highlightType="deletions"
                    showHighlights={showHighlights}
                    scrollRef={scrollARef}
                    onScroll={() => syncScroll("a")}
                    label="Original"
                    labelColor="#ef4444"
                />
                <PageViewer
                    pages={pagesB}
                    currentPage={currentPage}
                    diffPages={pageList}
                    highlightType="additions"
                    showHighlights={showHighlights}
                    scrollRef={scrollBRef}
                    onScroll={() => syncScroll("b")}
                    label="Modified"
                    labelColor="#22c55e"
                />
            </div>
        </div>
    );
}
