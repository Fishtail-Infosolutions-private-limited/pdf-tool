"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
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
} from "@tabler/icons-react";
import { urlToPdf, downloadBlob } from "@/lib/pdf-utils";
import { FileUpload } from "@/components/ui/file-upload";
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

const MARGIN_OPTIONS = [
    { label: "None", value: "none", sub: '0"' },
    { label: "Small", value: "small", sub: '0.5"' },
    { label: "Large", value: "large", sub: '1"' },
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
                className="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border border-[#E0DED9] bg-white text-sm font-medium text-brand-dark hover:border-brand-teal transition-colors shadow-2xs cursor-pointer"
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
                                className={`w-full text-left px-3 py-2.5 text-sm transition-colors cursor-pointer ${value === opt.value ? "bg-[#e6f4ef] text-brand-teal font-semibold" : "text-brand-dark hover:bg-gray-50"}`}
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
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${active
                ? "bg-brand-teal text-white shadow-sm"
                : "text-neutral-500 hover:text-brand-dark hover:bg-gray-100"
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
        <div className="flex flex-col items-center justify-center flex-1 min-h-[500px] bg-gray-50 rounded-xl border border-dashed border-[#E0DED9] gap-4">
            <IconLoader2 size={36} className="animate-spin text-brand-teal" />
            <p className="text-sm font-semibold text-neutral-600">Generating preview PDF…</p>
            <p className="text-xs text-neutral-400">This may take a few moments</p>
        </div>
    );
}

export default function HtmlToPdfClient() {
    const [activeTab, setActiveTab] = useState<Tab>("url");
    const [stage, setStage] = useState<Stage>("input");

    const [urlInput, setUrlInput] = useState("");
    const [isFetchingUrl, setIsFetchingUrl] = useState(false);

    const [htmlFiles, setHtmlFiles] = useState<File[]>([]);
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

    const dynamicScreenSizes = SCREEN_SIZES.map(s =>
        s.value === "your-screen"
            ? { ...s, label: `Your screen (${actualScreenWidth}px)` }
            : s
    );

    const resetAll = () => {
        setStage("input");
        setPreviewHtml("");
        setPreviewTitle("");
        if (previewPdfUrl) URL.revokeObjectURL(previewPdfUrl);
        setPreviewPdfUrl(null);
        setError(null);
        setUrlInput("");
        setHtmlFiles([]);
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

    return (
        <div className="w-full">
            {stage === "input" && (
                <div className="bg-white rounded-3xl shadow-sm border border-[#E0DED9] overflow-hidden text-left">
                    {/* Tab bar */}
                    <div className="flex items-center gap-2 p-3 border-b border-[#E0DED9] bg-[#FAFAF9]">
                        <TabBtn
                            active={activeTab === "url"}
                            onClick={() => { setActiveTab("url"); setError(null); }}
                            icon={<IconLink size={15} />}
                            label="From URL"
                        />
                        <TabBtn
                            active={activeTab === "file"}
                            onClick={() => { setActiveTab("file"); setError(null); }}
                            icon={<IconFileCode size={15} />}
                            label="Upload HTML"
                        />
                        <TabBtn
                            active={activeTab === "code"}
                            onClick={() => { setActiveTab("code"); setError(null); }}
                            icon={<IconCode size={15} />}
                            label="Paste Code"
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        {/* URL TAB */}
                        {activeTab === "url" && (
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="url-input" className="text-sm font-bold text-brand-dark">
                                        Enter Webpage URL:
                                    </label>
                                    <p className="text-xs text-neutral-500">
                                        We&apos;ll render the page in a high-fidelity browser engine and convert it to PDF.
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex-1 relative">
                                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                                            <IconLink size={17} />
                                        </span>
                                        <input
                                            id="url-input"
                                            type="url"
                                            placeholder="https://example.com"
                                            value={urlInput}
                                            onChange={(e) => { setUrlInput(e.target.value); setError(null); }}
                                            onKeyDown={(e) => e.key === "Enter" && handleFetchUrl()}
                                            className="w-full pl-10 pr-4 py-3 border border-[#E0DED9] rounded-xl text-sm focus:outline-none focus:border-brand-teal bg-[#FAFAF9] transition-all"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleFetchUrl}
                                        disabled={!urlInput.trim() || isFetchingUrl}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm transition-all shadow-sm whitespace-nowrap cursor-pointer ${!urlInput.trim()
                                            ? "bg-brand-teal/40 cursor-not-allowed"
                                            : isFetchingUrl
                                                ? "bg-brand-teal opacity-60 cursor-wait"
                                                : "bg-brand-teal hover:bg-[#036649]"
                                            }`}
                                    >
                                        {isFetchingUrl ? (
                                            <IconLoader2 size={16} className="animate-spin" />
                                        ) : (
                                            <IconEye size={16} />
                                        )}
                                        {isFetchingUrl ? "Rendering…" : "Preview PDF"}
                                    </button>
                                </div>

                                {(isFetchingUrl || isGeneratingPreview) && (
                                    <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-700 animate-pulse">
                                        <IconLoader2 size={14} className="animate-spin shrink-0" />
                                        <span>Rendering webpage and generating preview. Please wait…</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* FILE TAB */}
                        {activeTab === "file" && (
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-brand-dark">
                                        Upload an HTML File:
                                    </label>
                                    <p className="text-xs text-neutral-500">
                                        Accepts .html and .htm files.
                                    </p>
                                </div>

                                <FileUpload
                                    accept={{ "text/html": [".html", ".htm"] }}
                                    multiple={false}
                                    files={htmlFiles}
                                    setFiles={setHtmlFiles}
                                />

                                {htmlFiles.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => handleFileRead(htmlFiles[0])}
                                        disabled={isGeneratingPreview}
                                        className={`flex items-center gap-2 w-full justify-center py-3.5 rounded-xl bg-brand-teal text-white font-bold text-sm hover:bg-[#036649] transition-all cursor-pointer shadow-sm ${isGeneratingPreview ? "opacity-60 cursor-wait" : ""}`}
                                    >
                                        {isGeneratingPreview ? (
                                            <IconLoader2 size={16} className="animate-spin" />
                                        ) : (
                                            <IconEye size={16} />
                                        )}
                                        {isGeneratingPreview ? "Processing..." : "Preview HTML File"}
                                        {!isGeneratingPreview && <IconChevronRight size={15} />}
                                    </button>
                                )}
                            </div>
                        )}

                        {/* CODE TAB */}
                        {activeTab === "code" && (
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="html-code-input" className="text-sm font-bold text-brand-dark">
                                        Paste HTML Code:
                                    </label>
                                    <p className="text-xs text-neutral-500">
                                        Paste any valid HTML snippet or full document with CSS.
                                    </p>
                                </div>

                                <textarea
                                    id="html-code-input"
                                    value={codeInput}
                                    onChange={(e) => { setCodeInput(e.target.value); setError(null); }}
                                    placeholder={"<html>\n  <body>\n    <h1>Hello World</h1>\n    <p>This will be rendered into a clean PDF!</p>\n  </body>\n</html>"}
                                    className="w-full h-48 p-4 border border-[#E0DED9] rounded-xl bg-[#1E1702] text-green-400 font-mono text-xs sm:text-sm resize-y focus:outline-none focus:border-brand-teal"
                                    spellCheck={false}
                                />

                                <button
                                    type="button"
                                    onClick={handleCodePreview}
                                    disabled={!codeInput.trim() || isGeneratingPreview}
                                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all shadow-sm ${!codeInput.trim()
                                        ? "bg-brand-teal/40 cursor-not-allowed"
                                        : isGeneratingPreview
                                            ? "bg-brand-teal opacity-60 cursor-wait"
                                            : "bg-brand-teal hover:bg-[#036649] cursor-pointer"
                                        }`}
                                >
                                    {isGeneratingPreview ? (
                                        <IconLoader2 size={16} className="animate-spin" />
                                    ) : (
                                        <IconEye size={16} />
                                    )}
                                    {isGeneratingPreview ? "Rendering..." : "Preview Code"}
                                </button>
                            </div>
                        )}

                        {error && (
                            <div className="flex items-center gap-2 mt-4 p-3 bg-red-50 text-red-600 text-xs sm:text-sm rounded-xl border border-red-100">
                                <IconAlertCircle size={16} className="shrink-0" />
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* PREVIEW & OPTIONS STAGE */}
            {stage === "preview" && (
                <div className="flex flex-col lg:flex-row gap-6 text-left">
                    {/* Left: PDF Preview Frame */}
                    <div className="flex-1 min-w-0 bg-white rounded-3xl shadow-sm border border-[#E0DED9] p-5 flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-3 border-b border-[#E0DED9] pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                                <span className="text-sm font-bold text-brand-dark truncate max-w-[200px] md:max-w-xs">
                                    {previewTitle}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={resetAll}
                                className="flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
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
                            <div className="flex flex-col items-center justify-center flex-1 min-h-[500px] bg-gray-50 rounded-xl border border-dashed border-[#E0DED9] gap-3">
                                <IconAlertCircle size={28} className="text-neutral-400" />
                                <p className="text-sm text-neutral-500">Preview rendering. Click Download PDF to save.</p>
                            </div>
                        )}
                    </div>

                    {/* Right: Options Sidebar */}
                    <div className="w-full lg:w-72 xl:w-80 shrink-0">
                        <div className="bg-white rounded-3xl border border-[#E0DED9] shadow-sm p-5 flex flex-col gap-4">
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

                            <div className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="one-long-page"
                                    checked={oneLongPage}
                                    onChange={(e) => { setOneLongPage(e.target.checked); setSettingsChanged(true); }}
                                    className="rounded text-brand-teal focus:ring-brand-teal"
                                />
                                <label htmlFor="one-long-page" className="text-xs font-medium text-brand-dark cursor-pointer">
                                    Single continuous long page
                                </label>
                            </div>

                            <button
                                type="button"
                                onClick={handleConvert}
                                disabled={isConverting || isGeneratingPreview}
                                className={`w-full mt-2 py-3.5 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer ${isConverting || isGeneratingPreview
                                    ? "bg-brand-teal opacity-60 cursor-wait"
                                    : "bg-brand-teal hover:bg-[#036649]"
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
                <div className="bg-white rounded-3xl shadow-sm border border-[#E0DED9] p-8 flex flex-col items-center justify-center text-center max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-200">
                    <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5]">
                        <IconCheck size={34} stroke={2.5} />
                    </span>
                    <h2 className="text-2xl font-bold text-brand-dark">PDF Generated!</h2>
                    <p className="text-neutral-600 mt-2 text-sm sm:text-base">
                        Your webpage or HTML document has been saved to your device.
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
                            Convert Another Webpage
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
