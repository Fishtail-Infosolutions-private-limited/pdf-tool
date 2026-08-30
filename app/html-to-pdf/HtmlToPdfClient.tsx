"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
    IconWorld,
    IconLoader2,
    IconCheck,
    IconCode,
    IconFileCode,
    IconLink,
    IconUpload,
    IconEye,
    IconDownload,
    IconX,
    IconRefresh,
    IconAlertCircle,
    IconChevronRight,
    IconChevronDown,
    IconFileTypePdf,
    IconArrowLeft,
    IconArrowRight,
} from "@tabler/icons-react";
import { urlToPdf, downloadBlob } from "@/lib/pdf-utils";
import { motion, AnimatePresence } from "motion/react";

type Tab = "url" | "file" | "code";
type Stage = "input" | "preview" | "success";

const SCREEN_SIZES = [
    { label: "Your screen", value: "your-screen" },
    { label: "Desktop HD (1920px)", value: "1920" },
    { label: "Desktop (1440px)", value: "1440" },
    { label: "Laptop (1280px)", value: "1280" },
    { label: "Tablet (768px)", value: "768" },
    { label: "iPhone/Mobile (430px)", value: "430" },
];

const PAGE_SIZES = [
    { label: "Fit to content", value: "fit" },
    { label: "A4 (8.27 × 11.69 in)", value: "a4" },
    { label: "A5 (5.83 × 8.27 in)", value: "a5" },
    { label: "A3 (11.69 × 16.54 in)", value: "a3" },
    { label: "Letter (8.5 × 11 in)", value: "letter" },
    { label: "Legal (8.5 × 14 in)", value: "legal" },
    { label: "Ledger (11 × 17 in)", value: "ledger" },
];

function CustomSelect<T extends string>({
    options,
    value,
    onChange,
    label,
}: {
    options: { label: string; value: T }[];
    value: T;
    onChange: (v: T) => void;
    label: string;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const current = options.find((o) => o.value === value);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className={`relative w-full ${open ? "z-50" : "z-10"}`}>
            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">{label}</label>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border border-[#E0DED9] bg-white text-sm font-medium text-brand-dark hover:border-brand-teal transition-colors shadow-2xs cursor-pointer"
            >
                <span className="truncate">{current?.label}</span>
                <IconChevronDown size={14} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -4, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.97 }}
                        transition={{ duration: 0.14 }}
                        className="absolute z-50 top-full mt-1 left-0 right-0 bg-white border border-[#E0DED9] rounded-xl shadow-xl overflow-hidden"
                    >
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => { onChange(opt.value); setOpen(false); }}
                                className={`w-full text-left px-3.5 py-2.5 text-sm transition-colors cursor-pointer ${value === opt.value ? "bg-[#e6f4ef] text-brand-teal font-semibold" : "text-brand-dark hover:bg-gray-50"}`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function TabBtn({
    active,
    onClick,
    icon,
    label,
}: {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${active
                ? "bg-brand-teal text-white shadow-sm"
                : "text-neutral-600 hover:text-brand-dark hover:bg-[#FAF9F7]"
                }`}
        >
            {icon}
            {label}
        </button>
    );
}

function PdfPreview({ pdfUrl }: { pdfUrl: string }) {
    return (
        <div className="flex flex-col gap-3 flex-1 min-h-[500px]">
            <iframe
                src={pdfUrl}
                title="PDF Preview"
                className="w-full flex-1 border-none rounded-xl bg-gray-100 min-h-[500px]"
            />
            <p className="text-xs text-neutral-500 text-center bg-[#FAFAF9] py-1.5 rounded-lg border border-[#E0DED9]">
                This is the exact PDF that will be downloaded.
            </p>
        </div>
    );
}

function GeneratingPlaceholder() {
    return (
        <div className="flex flex-col items-center justify-center flex-1 min-h-[500px] bg-[#FAFAF9] rounded-2xl border border-dashed border-[#E0DED9] gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
                <IconLoader2 size={32} className="animate-spin" />
            </div>
            <div className="text-center">
                <p className="text-sm font-bold text-brand-dark">Generating preview PDF…</p>
                <p className="text-xs text-neutral-500 mt-1">This may take a few moments</p>
            </div>
        </div>
    );
}

export default function HtmlToPdfClient() {
    const [activeTab, setActiveTab] = useState<Tab>("url");
    const [stage, setStage] = useState<Stage>("input");

    const [urlInput, setUrlInput] = useState("");
    const [isFetchingUrl, setIsFetchingUrl] = useState(false);

    const [htmlFile, setHtmlFile] = useState<File | null>(null);
    const [codeInput, setCodeInput] = useState("");

    const [previewHtml, setPreviewHtml] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [previewPdfUrl, setPreviewPdfUrl] = useState<string | null>(null);
    const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
    const [isConverting, setIsConverting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [screenSize, setScreenSize] = useState<string>("your-screen");
    const [actualScreenWidth, setActualScreenWidth] = useState<number>(1280);
    const [pageSize, setPageSize] = useState<string>("a4");
    const [oneLongPage, setOneLongPage] = useState(false);
    const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
    const [margin, setMargin] = useState<string>("none");
    const [hideCookie, setHideCookie] = useState(true);
    const [settingsChanged, setSettingsChanged] = useState(false);

    useEffect(() => {
        setActualScreenWidth(window.innerWidth);
    }, []);

    const resolvedViewportWidth = screenSize === "your-screen"
        ? actualScreenWidth
        : parseInt(screenSize) || 1280;

    const dynamicScreenSizes = SCREEN_SIZES.map((s) =>
        s.value === "your-screen"
            ? { ...s, label: `Your screen (${actualScreenWidth}px)` }
            : s
    );

    const onFileDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setHtmlFile(acceptedFiles[0]);
            setError(null);
        }
    };

    const { getRootProps, getInputProps, isDragActive, open: openDropzone } = useDropzone({
        onDrop: onFileDrop,
        accept: {
            "text/html": [".html", ".htm"],
        },
        multiple: false,
        noClick: !!htmlFile,
    });

    const resetAll = () => {
        setStage("input");
        setPreviewHtml("");
        setPreviewTitle("");
        if (previewPdfUrl) URL.revokeObjectURL(previewPdfUrl);
        setPreviewPdfUrl(null);
        setError(null);
        setUrlInput("");
        setHtmlFile(null);
        setCodeInput("");
        setSettingsChanged(false);
    };

    const handleFetchUrl = async () => {
        if (!urlInput.trim()) return;
        setIsFetchingUrl(true);
        setIsGeneratingPreview(true);
        setError(null);
        if (previewPdfUrl) URL.revokeObjectURL(previewPdfUrl);
        setPreviewPdfUrl(null);
        try {
            const pdfBlob = await urlToPdf({
                url: urlInput.trim(),
                pageSize,
                orientation,
                margin,
                oneLongPage,
                hideCookie,
                viewportWidth: resolvedViewportWidth,
            });
            const blobUrl = URL.createObjectURL(pdfBlob);
            setPreviewPdfUrl(blobUrl);
            setPreviewTitle(urlInput.trim().replace(/^https?:\/\//, "").split("/")[0]);
            setStage("preview");
            setSettingsChanged(false);
        } catch (err: any) {
            setError(err.message || "Failed to fetch and convert URL.");
        } finally {
            setIsFetchingUrl(false);
            setIsGeneratingPreview(false);
        }
    };

    const handleFileRead = useCallback((file: File) => {
        if (!file.name.endsWith(".html") && !file.name.endsWith(".htm")) {
            setError("Please upload an HTML file (.html or .htm).");
            return;
        }
        setError(null);
        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = e.target?.result as string;
            setPreviewHtml(text);
            setPreviewTitle(file.name.replace(/\.(html|htm)$/i, ""));
            setPreviewPdfUrl(null);
            try {
                const pdfBlob = await urlToPdf({
                    html: text,
                    pageSize,
                    orientation,
                    margin,
                    oneLongPage,
                    hideCookie,
                    viewportWidth: resolvedViewportWidth,
                });
                setPreviewPdfUrl(URL.createObjectURL(pdfBlob));
            } catch {
                // fallback
            } finally {
                setIsGeneratingPreview(false);
            }
            setStage("preview");
            setSettingsChanged(false);
        };
        setIsGeneratingPreview(true);
        reader.readAsText(file);
    }, [pageSize, orientation, margin, oneLongPage, hideCookie, resolvedViewportWidth]);

    const handleCodePreview = async () => {
        if (!codeInput.trim()) return;
        setError(null);
        setPreviewHtml(codeInput);
        setPreviewTitle("custom-html");
        setIsGeneratingPreview(true);
        setPreviewPdfUrl(null);
        try {
            const pdfBlob = await urlToPdf({
                html: codeInput,
                pageSize,
                orientation,
                margin,
                oneLongPage,
                hideCookie,
                viewportWidth: resolvedViewportWidth,
            });
            setPreviewPdfUrl(URL.createObjectURL(pdfBlob));
        } catch {
            // fallback
        } finally {
            setIsGeneratingPreview(false);
        }
        setStage("preview");
        setSettingsChanged(false);
    };

    const handleConvert = async () => {
        if (!previewHtml.trim() && !urlInput.trim()) return;
        setIsConverting(true);
        setError(null);

        try {
            let pdfBlob: Blob;
            if (previewPdfUrl && !settingsChanged) {
                const response = await fetch(previewPdfUrl);
                pdfBlob = await response.blob();
            } else {
                pdfBlob = await urlToPdf({
                    url: activeTab === "url" ? urlInput.trim() : undefined,
                    html: activeTab !== "url" ? previewHtml : undefined,
                    pageSize,
                    orientation,
                    margin,
                    oneLongPage,
                    hideCookie,
                    viewportWidth: resolvedViewportWidth,
                });

                if (previewPdfUrl) URL.revokeObjectURL(previewPdfUrl);
                setPreviewPdfUrl(URL.createObjectURL(pdfBlob));
            }

            downloadBlob(pdfBlob, `${previewTitle || "webpage"}.pdf`);
            setStage("success");
            setSettingsChanged(false);
        } catch (err: any) {
            setError(err.message || "Failed to download PDF.");
        } finally {
            setIsConverting(false);
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(1) + " KB";
        }
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    };

    return (
        <div className="w-full">
            {stage === "input" && (
                <div className="bg-white rounded-3xl shadow-sm border border-[#E0DED9] p-5 sm:p-8 md:p-9 text-left">
                    {/* Tab Navigation Pill Bar */}
                    <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9] mb-6">
                        <TabBtn
                            active={activeTab === "url"}
                            onClick={() => { setActiveTab("url"); setError(null); }}
                            icon={<IconLink size={16} stroke={2} />}
                            label="From URL"
                        />
                        <TabBtn
                            active={activeTab === "file"}
                            onClick={() => { setActiveTab("file"); setError(null); }}
                            icon={<IconFileCode size={16} stroke={2} />}
                            label="Upload HTML File"
                        />
                        <TabBtn
                            active={activeTab === "code"}
                            onClick={() => { setActiveTab("code"); setError(null); }}
                            icon={<IconCode size={16} stroke={2} />}
                            label="Paste HTML Code"
                        />
                    </div>

                    {/* TAB 1: FROM URL */}
                    {activeTab === "url" && (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="url-input" className="text-sm font-bold text-brand-dark">
                                    Enter Webpage URL:
                                </label>
                                <p className="text-xs text-neutral-500">
                                    We&apos;ll render the page in a high-fidelity browser engine and convert it to clean PDF.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                        <IconLink size={18} />
                                    </span>
                                    <input
                                        id="url-input"
                                        type="url"
                                        placeholder="https://example.com"
                                        value={urlInput}
                                        onChange={(e) => { setUrlInput(e.target.value); setError(null); }}
                                        onKeyDown={(e) => e.key === "Enter" && handleFetchUrl()}
                                        className="w-full pl-11 pr-4 py-3.5 border border-[#E0DED9] rounded-xl text-sm font-medium focus:outline-none focus:border-brand-teal bg-[#FAFAF9] transition-all"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleFetchUrl}
                                    disabled={!urlInput.trim() || isFetchingUrl}
                                    className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all shadow-sm whitespace-nowrap cursor-pointer ${!urlInput.trim()
                                        ? "bg-brand-teal/40 cursor-not-allowed"
                                        : isFetchingUrl
                                            ? "bg-brand-teal opacity-60 cursor-wait"
                                            : "bg-brand-teal hover:bg-[#036649]"
                                        }`}
                                >
                                    {isFetchingUrl ? (
                                        <IconLoader2 size={18} className="animate-spin" />
                                    ) : (
                                        <IconEye size={18} />
                                    )}
                                    <span>{isFetchingUrl ? "Rendering Webpage…" : "Preview & Convert"}</span>
                                </button>
                            </div>

                            {(isFetchingUrl || isGeneratingPreview) && (
                                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#e6f4ef] border border-[#bce0d5] text-xs text-brand-teal font-semibold animate-pulse">
                                    <IconLoader2 size={16} className="animate-spin shrink-0" />
                                    <span>Rendering webpage and generating print-ready PDF layout. Please wait…</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* TAB 2: UPLOAD HTML FILE */}
                    {activeTab === "file" && (
                        <div className="w-full">
                            {!htmlFile ? (
                                <div
                                    {...getRootProps()}
                                    className={`group flex flex-col items-center justify-center py-8 sm:py-10 px-6 sm:px-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center w-full ${
                                        isDragActive
                                            ? "border-brand-teal bg-[#e6f4ef]/60 scale-[1.003]"
                                            : "border-[#E0DED9] bg-[#FAFAF9] hover:border-brand-teal/70 hover:bg-[#FAF9F7]"
                                    }`}
                                >
                                    <input {...getInputProps()} id="html-file-input" />

                                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5] group-hover:scale-105 transition-transform">
                                        <IconUpload size={28} stroke={1.8} className="sm:hidden" />
                                        <IconUpload size={32} stroke={1.8} className="hidden sm:block" />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={openDropzone}
                                        className="px-7 py-3 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer mb-2.5"
                                    >
                                        Select HTML File
                                    </button>

                                    <p className="text-sm font-medium text-brand-dark">
                                        or drag and drop your HTML file here
                                    </p>
                                    <p className="text-xs text-neutral-500 mt-1">
                                        Accepts .html and .htm files (up to 50MB)
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-5 max-w-2xl mx-auto py-2">
                                    <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9]">
                                        <div className="flex items-center gap-3.5 min-w-0 pr-3">
                                            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
                                                <IconFileCode size={24} stroke={2} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-bold text-sm sm:text-base text-brand-dark truncate">
                                                    {htmlFile.name}
                                                </p>
                                                <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1.5">
                                                    <span>{formatFileSize(htmlFile.size)}</span>
                                                    <span>•</span>
                                                    <span className="text-brand-teal font-semibold flex items-center gap-1">
                                                        <IconCheck size={13} /> Ready to Convert
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setHtmlFile(null)}
                                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors cursor-pointer"
                                            title="Remove file"
                                        >
                                            <IconX size={18} stroke={2} />
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleFileRead(htmlFile)}
                                        disabled={isGeneratingPreview}
                                        className={`w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-brand-teal hover:bg-[#036649] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.99] ${
                                            isGeneratingPreview ? "opacity-60 cursor-wait" : ""
                                        }`}
                                    >
                                        {isGeneratingPreview ? (
                                            <IconLoader2 size={20} className="animate-spin" />
                                        ) : (
                                            <IconEye size={20} />
                                        )}
                                        <span>{isGeneratingPreview ? "Processing HTML…" : "Preview & Convert HTML"}</span>
                                        {!isGeneratingPreview && <IconArrowRight size={18} />}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* TAB 3: PASTE HTML CODE */}
                    {activeTab === "code" && (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="html-code-input" className="text-sm font-bold text-brand-dark">
                                    Paste HTML Code:
                                </label>
                                <p className="text-xs text-neutral-500">
                                    Paste any valid HTML snippet or full web document with inline CSS styling.
                                </p>
                            </div>

                            <textarea
                                id="html-code-input"
                                value={codeInput}
                                onChange={(e) => { setCodeInput(e.target.value); setError(null); }}
                                placeholder={"<!DOCTYPE html>\n<html>\n  <head>\n    <style>body { font-family: sans-serif; padding: 20px; }</style>\n  </head>\n  <body>\n    <h1>Hello PDF Maya</h1>\n    <p>This code will be rendered into a high-resolution PDF document!</p>\n  </body>\n</html>"}
                                className="w-full h-52 p-4 border border-[#E0DED9] rounded-2xl bg-[#1E1702] text-emerald-400 font-mono text-xs sm:text-sm resize-y focus:outline-none focus:border-brand-teal shadow-2xs"
                                spellCheck={false}
                            />

                            <button
                                type="button"
                                onClick={handleCodePreview}
                                disabled={!codeInput.trim() || isGeneratingPreview}
                                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white text-base transition-all shadow-sm ${!codeInput.trim()
                                    ? "bg-brand-teal/40 cursor-not-allowed"
                                    : isGeneratingPreview
                                        ? "bg-brand-teal opacity-60 cursor-wait"
                                        : "bg-brand-teal hover:bg-[#036649] cursor-pointer active:scale-[0.99]"
                                    }`}
                            >
                                {isGeneratingPreview ? (
                                    <IconLoader2 size={18} className="animate-spin" />
                                ) : (
                                    <IconEye size={18} />
                                )}
                                <span>{isGeneratingPreview ? "Rendering Code…" : "Preview & Convert Code"}</span>
                            </button>
                        </div>
                    )}

                    {error && (
                        <div className="flex items-center gap-2 mt-4 p-3.5 bg-red-50 text-red-700 text-xs sm:text-sm rounded-xl border border-red-200 font-medium">
                            <IconAlertCircle size={18} className="shrink-0" />
                            {error}
                        </div>
                    )}
                </div>
            )}

            {/* PREVIEW & OPTIONS STAGE */}
            {stage === "preview" && (
                <div className="flex flex-col lg:flex-row gap-6 text-left">
                    {/* Left: PDF Preview Frame */}
                    <div className="flex-1 min-w-0 bg-white rounded-3xl shadow-sm border border-[#E0DED9] p-5 sm:p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-3 border-b border-[#E0DED9] pb-3">
                            <div className="flex items-center gap-2 min-w-0">
                                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal shrink-0" />
                                <span className="text-sm font-bold text-brand-dark truncate max-w-[200px] md:max-w-xs">
                                    {previewTitle}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={resetAll}
                                className="flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-brand-dark transition-colors cursor-pointer px-2.5 py-1 rounded-lg hover:bg-neutral-100"
                            >
                                <IconArrowLeft size={14} />
                                Change Source
                            </button>
                        </div>

                        {isGeneratingPreview ? (
                            <GeneratingPlaceholder />
                        ) : previewPdfUrl ? (
                            <PdfPreview pdfUrl={previewPdfUrl} />
                        ) : (
                            <div className="flex flex-col items-center justify-center flex-1 min-h-[500px] bg-[#FAFAF9] rounded-2xl border border-dashed border-[#E0DED9] gap-3">
                                <IconAlertCircle size={28} className="text-neutral-400" />
                                <p className="text-sm text-neutral-500">Preview rendering. Click Download PDF to save.</p>
                            </div>
                        )}
                    </div>

                    {/* Right: Options Sidebar */}
                    <div className="w-full lg:w-72 xl:w-80 shrink-0">
                        <div className="bg-white rounded-3xl border border-[#E0DED9] shadow-sm p-5 sm:p-6 flex flex-col gap-4">
                            <h2 className="text-sm font-bold text-brand-dark flex items-center gap-2 border-b border-[#E0DED9] pb-3">
                                <IconFileTypePdf size={18} className="text-brand-teal" />
                                Page Configuration
                            </h2>

                            <CustomSelect
                                label="Viewport Width"
                                options={dynamicScreenSizes}
                                value={screenSize}
                                onChange={(v) => { setScreenSize(v); setSettingsChanged(true); }}
                            />

                            <CustomSelect
                                label="Page Size"
                                options={PAGE_SIZES}
                                value={pageSize}
                                onChange={(v) => { setPageSize(v); setSettingsChanged(true); }}
                            />

                            <div className="flex items-center gap-2 cursor-pointer pt-1">
                                <input
                                    type="checkbox"
                                    id="one-long-page"
                                    checked={oneLongPage}
                                    onChange={(e) => { setOneLongPage(e.target.checked); setSettingsChanged(true); }}
                                    className="rounded text-brand-teal focus:ring-brand-teal w-4 h-4 cursor-pointer"
                                />
                                <label htmlFor="one-long-page" className="text-xs font-semibold text-brand-dark cursor-pointer select-none">
                                    Single continuous long page
                                </label>
                            </div>

                            <button
                                type="button"
                                onClick={handleConvert}
                                disabled={isConverting || isGeneratingPreview}
                                className={`w-full mt-3 py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-sm text-sm sm:text-base cursor-pointer ${isConverting || isGeneratingPreview
                                    ? "bg-brand-teal opacity-60 cursor-wait"
                                    : "bg-brand-teal hover:bg-[#036649] active:scale-[0.99]"
                                    }`}
                            >
                                {isConverting ? (
                                    <>
                                        <IconLoader2 size={18} className="animate-spin" />
                                        <span>Downloading PDF…</span>
                                    </>
                                ) : (
                                    <>
                                        <IconDownload size={18} />
                                        <span>Download PDF</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* SUCCESS STAGE */}
            {stage === "success" && (
                <div className="bg-white rounded-3xl shadow-sm border border-[#E0DED9] p-8 sm:p-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-200">
                    <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5]">
                        <IconCheck size={34} stroke={2.5} />
                    </span>
                    <h2 className="text-2xl font-bold text-brand-dark">PDF Generated Successfully!</h2>
                    <p className="text-neutral-600 mt-2 text-sm sm:text-base leading-relaxed">
                        Your webpage or HTML document has been compiled and saved to your device.
                    </p>
                    <div className="flex gap-3 mt-6 flex-wrap justify-center w-full">
                        <button
                            type="button"
                            onClick={() => setStage("preview")}
                            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-[#E0DED9] text-brand-dark font-semibold hover:bg-gray-50 transition-all cursor-pointer text-sm"
                        >
                            Back to Preview
                        </button>
                        <button
                            type="button"
                            onClick={resetAll}
                            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-teal text-white font-bold hover:bg-[#036649] transition-all cursor-pointer shadow-sm text-sm"
                        >
                            Convert Another Document
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
