"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconX,
    IconArrowRight,
    IconShieldCheck,
    IconAlertTriangle,
    IconInfoCircle,
    IconFileCheck,
    IconPaperclip,
    IconSparkles,
    IconEye,
} from "@tabler/icons-react";
import { pdfToPdfa, downloadBlob } from "@/lib/pdf-utils";
import toast from "react-hot-toast";

export type Level = "1b" | "2b" | "3b";

export interface ConformanceOption {
    value: Level;
    label: string;
    badges: string[];
    isoCode: string;
    description: string;
    specsTitle: string;
    specsDescription: string;
    specsItems: string[];
}

export const CONFORMANCE_LEVELS: ConformanceOption[] = [
    {
        value: "1b",
        label: "PDF/A-1b",
        badges: ["Recommended", "Most Compatible"],
        isoCode: "PDF 1.4 : ISO 19005-1:2005",
        description: "The widest-supported archival format. Guarantees visual reproduction of the document for long-term archiving. Ideal for legal, government, and regulated industries.",
        specsTitle: "PDF/A-1b Specifications",
        specsDescription: "The widest-supported archival format. Guarantees visual reproduction of the document for long-term archiving. Ideal for legal, government, and regulated industries.",
        specsItems: [
            "Embedded fonts & colour profiles (OutputIntent)",
            "No JavaScript, encryption, or multimedia",
            "No external file references or links to resources",
            "Maximum viewer compatibility (Acrobat 5+)",
        ],
    },
    {
        value: "2b",
        label: "PDF/A-2b",
        badges: ["Modern Features"],
        isoCode: "PDF 1.7 : ISO 19005-2:2011",
        description: "Modern ISO standard supporting native transparency, OpenType fonts, and JPEG 2000 image compression.",
        specsTitle: "PDF/A-2b Specifications",
        specsDescription: "Modern archival profile based on PDF 1.7 specifications. Preserves transparent visual layers, complex gradients, and advanced compression.",
        specsItems: [
            "Supports native transparency and gradient layers",
            "Embedded OpenType and Unicode font mappings",
            "JPEG 2000 compression for high-resolution graphics",
            "Preserves layer structures and digital signatures",
        ],
    },
    {
        value: "3b",
        label: "PDF/A-3b",
        badges: ["File Attachments"],
        isoCode: "PDF 1.7 : ISO 19005-3:2012",
        description: "Allows embedding secondary files (XML invoices, CSV, raw data, CAD) alongside visual PDF pages.",
        specsTitle: "PDF/A-3b Specifications",
        specsDescription: "Enables embedding third-party data attachments directly inside the PDF package for hybrid human-readable and machine-readable storage.",
        specsItems: [
            "Embeds XML, CSV, spreadsheets, and CAD drawings",
            "Standard for ZUGFeRD, Factur-X & electronic invoicing",
            "Full visual fidelity with machine-readable payloads",
            "Certified for multi-format archival requirements",
        ],
    },
];

export const PERFORMANCE_DISCLAIMERS = [
    "Interactive JavaScript or form actions will be removed",
    "Embedded multimedia (video, audio) will be stripped",
    "External hyperlinks are kept but may not persist forever",
    "Transparency & gradients may be flattened in PDF/A-1b mode",
    "Encrypted or password-protected PDFs cannot be converted",
    "All fonts will be embedded (may slightly increase file size)",
];

export default function PdfToPdfaClient() {
    const [file, setFile] = useState<File | null>(null);
    const [level, setLevel] = useState<Level>("1b");
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [downloadInfo, setDownloadInfo] = useState<{ blob: Blob; fileName: string } | null>(null);

    const activeProfile = CONFORMANCE_LEVELS.find((l) => l.value === level) || CONFORMANCE_LEVELS[0];

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            setSuccess(false);
            setDownloadInfo(null);
        }
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: false,
        noClick: !!file,
    });

    const handleConvert = async () => {
        if (!file) return;
        setIsProcessing(true);
        setSuccess(false);

        const toastId = toast.loading(`Converting to ISO PDF/A-${level.toUpperCase()} archival format...`);

        try {
            const blob = await pdfToPdfa(file, level);
            const newName = file.name.replace(/\.pdf$/i, `-pdfa-${level}.pdf`);
            downloadBlob(blob, newName);
            setDownloadInfo({ blob, fileName: newName });
            setSuccess(true);
            toast.success(`Converted to PDF/A-${level.toUpperCase()} successfully!`, { id: toastId });
        } catch (err: any) {
            const isDev = process.env.NODE_ENV === "development";
            if (isDev) console.error(err);

            const rawMsg = err?.message || "Unknown error";

            if (rawMsg.includes("not running") || rawMsg.includes("fetch")) {
                const devError = `Local Debug: Conversion service is offline. (${rawMsg})`;
                const prodError = "Conversion service is temporarily unavailable. Please try again in a moment.";
                toast.error(isDev ? devError : prodError, { id: toastId, duration: 5000 });
            } else {
                toast.error(isDev ? `Error: ${rawMsg}` : "An error occurred during conversion.", { id: toastId });
            }
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDownloadAgain = () => {
        if (downloadInfo) {
            downloadBlob(downloadInfo.blob, downloadInfo.fileName);
            toast.success("Downloading PDF/A file...");
        }
    };

    const handleReset = () => {
        setFile(null);
        setSuccess(false);
        setDownloadInfo(null);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(1) + " KB";
        }
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-3xl border border-[#E0DED9] p-5 sm:p-8 md:p-9 shadow-sm transition-all duration-200 w-full text-left">
                {!success ? (
                    <div>
                        {!file ? (
                            <div
                                {...getRootProps()}
                                className={`group flex flex-col items-center justify-center py-8 sm:py-10 px-6 sm:px-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center w-full ${
                                    isDragActive
                                        ? "border-brand-teal bg-[#e6f4ef]/60 scale-[1.003]"
                                        : "border-[#E0DED9] bg-[#FAFAF9] hover:border-brand-teal/70 hover:bg-[#FAF9F7]"
                                }`}
                            >
                                <input {...getInputProps()} id="pdf-to-pdfa-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5]/60 group-hover:scale-105 transition-transform">
                                    <IconUpload size={28} stroke={1.8} className="sm:hidden" />
                                    <IconUpload size={32} stroke={1.8} className="hidden sm:block" />
                                </div>

                                <button
                                    type="button"
                                    onClick={open}
                                    className="px-7 py-3 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer mb-2.5"
                                >
                                    Select PDF File
                                </button>

                                <p className="text-sm font-medium text-brand-dark">
                                    or drag and drop your PDF file here
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Supports all PDF documents for ISO 19005 standard compliance (up to 50MB)
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6 max-w-3xl mx-auto py-2">
                                {/* ── File Details Bar ── */}
                                <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9]">
                                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#fee2e2] text-[#dc2626] border border-[#fecaca]">
                                            <IconFileTypePdf size={24} stroke={2} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-bold text-sm sm:text-base text-brand-dark truncate">
                                                {file.name}
                                            </p>
                                            <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1.5">
                                                <span>{formatFileSize(file.size)}</span>
                                                <span>•</span>
                                                <span className="text-brand-teal font-semibold flex items-center gap-1">
                                                    <IconShieldCheck size={13} /> Target: PDF/A-{level.toUpperCase()}
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        disabled={isProcessing}
                                        className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors cursor-pointer"
                                        title="Remove file"
                                    >
                                        <IconX size={18} stroke={2} />
                                    </button>
                                </div>

                                {/* ── 1. Set Conformance Level ── */}
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <h2 className="text-sm font-bold text-brand-dark flex items-center gap-2">
                                            <IconFileCheck size={18} className="text-brand-teal" />
                                            Set Conformance Level
                                        </h2>
                                        <p className="text-xs text-neutral-500 mt-0.5">
                                            Choose the appropriate archival standard for your requirements.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                                        {CONFORMANCE_LEVELS.map((lvl) => {
                                            const isSelected = level === lvl.value;
                                            return (
                                                <button
                                                    key={lvl.value}
                                                    type="button"
                                                    onClick={() => setLevel(lvl.value)}
                                                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between gap-3 ${
                                                        isSelected
                                                            ? "border-brand-teal bg-[#e6f4ef]/50 ring-2 ring-brand-teal/20 shadow-2xs"
                                                            : "border-[#E0DED9] bg-[#FAFAF9] hover:bg-white hover:border-neutral-400"
                                                    }`}
                                                >
                                                    <div>
                                                        <div className="flex flex-wrap items-center gap-1.5 mb-2">
                                                            {lvl.badges.map((b) => (
                                                                <span
                                                                    key={b}
                                                                    className={`px-2 py-0.5 text-[10px] font-bold rounded-md border ${
                                                                        b === "Recommended"
                                                                            ? "bg-brand-teal text-white border-brand-teal"
                                                                            : "bg-white text-neutral-700 border-[#E0DED9]"
                                                                    }`}
                                                                >
                                                                    {b}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <p className="font-bold text-base text-brand-dark">
                                                            {lvl.label}
                                                        </p>
                                                        <p className="text-[11px] font-medium text-brand-teal mt-0.5">
                                                            {lvl.isoCode}
                                                        </p>
                                                    </div>

                                                    <p className="text-xs text-neutral-600 leading-relaxed">
                                                        {lvl.description}
                                                    </p>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* ── 2. Active Level Specifications Card ── */}
                                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9] flex flex-col gap-3">
                                    <div>
                                        <h3 className="text-sm font-bold text-brand-dark flex items-center gap-2">
                                            <IconEye size={18} className="text-brand-teal" />
                                            {activeProfile.specsTitle}
                                        </h3>
                                        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                                            {activeProfile.specsDescription}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 border-t border-[#E0DED9]">
                                        {activeProfile.specsItems.map((spec, i) => (
                                            <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                                                <span className="shrink-0 w-4 h-4 rounded-full bg-[#e6f4ef] text-brand-teal flex items-center justify-center mt-0.5">
                                                    <IconCheck size={11} stroke={3} />
                                                </span>
                                                <span className="leading-snug">{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ── 3. Important Performance Disclaimers ── */}
                                <div className="p-4 sm:p-5 rounded-2xl bg-[#fffbeb] border border-[#fef3c7] flex flex-col gap-2.5">
                                    <div className="flex items-center gap-2 text-[#92400e]">
                                        <IconAlertTriangle size={18} className="shrink-0" />
                                        <h3 className="text-xs sm:text-sm font-bold">
                                            Important Performance Disclaimers
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-[#78350f]">
                                        {PERFORMANCE_DISCLAIMERS.map((disc, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-1.5 shrink-0" />
                                                <span className="leading-snug">{disc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ── Convert Action Button ── */}
                                <button
                                    id="convert-pdf-to-pdfa-btn"
                                    type="button"
                                    onClick={handleConvert}
                                    disabled={isProcessing}
                                    className={`w-full py-4 px-8 rounded-xl font-bold text-base text-white transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99] cursor-pointer ${
                                        isProcessing
                                            ? "bg-brand-teal opacity-70 cursor-wait"
                                            : "bg-brand-teal hover:bg-[#036649] hover:shadow-md"
                                    }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <IconLoader2 className="animate-spin" size={20} />
                                            <span>Converting to PDF/A-{level.toUpperCase()}…</span>
                                        </>
                                    ) : (
                                        <>
                                            <IconShieldCheck size={20} />
                                            <span>Convert to PDF/A-{level.toUpperCase()}</span>
                                            <IconArrowRight size={17} className="opacity-70 ml-1" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-200">
                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5]">
                            <IconCheck size={34} stroke={2.5} />
                        </span>

                        <h2 className="text-2xl font-bold text-brand-dark">Conversion Complete!</h2>
                        <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-lg">
                            Your document (<span className="font-semibold text-brand-dark">{downloadInfo?.fileName}</span>) now complies with ISO PDF/A long-term archiving standards.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6 w-full max-w-md">
                            <button
                                type="button"
                                onClick={handleDownloadAgain}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.98]"
                            >
                                <IconDownload size={18} />
                                <span>Download PDF/A</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                            >
                                <IconRefresh size={18} />
                                <span>Convert Another File</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
