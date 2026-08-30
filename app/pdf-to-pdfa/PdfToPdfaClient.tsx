"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
    IconArchive,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconX,
    IconArrowRight,
    IconShieldCheck,
} from "@tabler/icons-react";
import { pdfToPdfa, downloadBlob } from "@/lib/pdf-utils";
import toast from "react-hot-toast";

type Level = "1b" | "2b" | "3b";

const LEVELS: {
    value: Level;
    label: string;
    badge: string;
    description: string;
    recommended?: boolean;
}[] = [
    {
        value: "1b",
        label: "PDF/A-1b",
        badge: "ISO 19005-1 (Most Compatible)",
        description: "Widest support across government, legal, and banking archives worldwide.",
        recommended: true,
    },
    {
        value: "2b",
        label: "PDF/A-2b",
        badge: "ISO 19005-2 (Modern)",
        description: "Supports transparency layers, OpenType fonts, and JPEG 2000 compression.",
    },
    {
        value: "3b",
        label: "PDF/A-3b",
        badge: "ISO 19005-3 (Embedded Files)",
        description: "Allows embedding XML invoices (ZUGFeRD/Factur-X) and raw data attachments.",
    },
];

export default function PdfToPdfaClient() {
    const [file, setFile] = useState<File | null>(null);
    const [level, setLevel] = useState<Level>("1b");
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [downloadInfo, setDownloadInfo] = useState<{ blob: Blob; fileName: string } | null>(null);

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
            <div className="bg-white rounded-3xl border border-[#E0DED9] p-5 sm:p-8 md:p-9 shadow-sm transition-all duration-200 w-full">
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
                                    Converts standard PDFs to ISO 19005 compliant archival PDF/A format (up to 50MB)
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6 max-w-2xl mx-auto py-2">
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

                                {/* Archival Level Selection */}
                                <div className="flex flex-col gap-2.5">
                                    <p className="text-xs font-bold text-brand-dark">Select PDF/A Archival Profile:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {LEVELS.map((lvl) => (
                                            <button
                                                key={lvl.value}
                                                type="button"
                                                onClick={() => setLevel(lvl.value)}
                                                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                                                    level === lvl.value
                                                        ? "border-brand-teal bg-[#e6f4ef] shadow-2xs"
                                                        : "border-[#E0DED9] bg-[#FAFAF9] hover:bg-white"
                                                }`}
                                            >
                                                {lvl.recommended && (
                                                    <span className="absolute -top-2 right-2 px-1.5 py-0.5 bg-brand-teal text-white text-[9px] font-bold rounded-full">
                                                        Recommended
                                                    </span>
                                                )}
                                                <p className="font-bold text-xs text-brand-dark">{lvl.label}</p>
                                                <p className="text-[10px] text-neutral-500 mt-0.5 leading-snug">{lvl.description}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    id="convert-pdf-to-pdfa-btn"
                                    type="button"
                                    onClick={handleConvert}
                                    disabled={isProcessing}
                                    className={`w-full py-3.5 px-8 rounded-xl font-bold text-base text-white transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99] cursor-pointer ${
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
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                            >
                                <IconDownload size={18} />
                                <span>Download PDF/A</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
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
