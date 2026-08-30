"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
    IconPresentation,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePpt,
    IconFileTypePdf,
    IconX,
    IconArrowRight,
} from "@tabler/icons-react";
import { pptxToPdf, downloadBlob } from "@/lib/pdf-utils";
import toast from "react-hot-toast";

function PdfLogoBadge({ size = 28 }: { size?: number }) {
    return (
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fee2e2] text-[#dc2626] border border-[#fecaca] shadow-2xs">
            <IconFileTypePdf size={size} stroke={2} />
        </div>
    );
}

export default function PptxToPdfClient() {
    const [file, setFile] = useState<File | null>(null);
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
        accept: {
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".pptx"],
            "application/vnd.ms-powerpoint": [".ppt"],
        },
        multiple: false,
        noClick: !!file,
    });

    const handleConvert = async () => {
        if (!file) return;
        setIsProcessing(true);
        setSuccess(false);

        const toastId = toast.loading("Converting PowerPoint presentation to PDF...");

        try {
            const pdfBlob = await pptxToPdf(file);
            const newName = file.name.replace(/\.[^/.]+$/, ".pdf");
            downloadBlob(pdfBlob, newName);
            setDownloadInfo({ blob: pdfBlob, fileName: newName });
            setSuccess(true);
            toast.success("Conversion successful! Your PDF is ready.", { id: toastId });
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
            toast.success("Downloading PDF file...");
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
                                <input {...getInputProps()} id="pptx-file-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fee2e2] text-[#C43E1C] mb-4 border border-[#fecaca] group-hover:scale-105 transition-transform">
                                    <IconUpload size={28} stroke={1.8} className="sm:hidden" />
                                    <IconUpload size={32} stroke={1.8} className="hidden sm:block" />
                                </div>

                                <button
                                    type="button"
                                    onClick={open}
                                    className="px-7 py-3 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer mb-2.5"
                                >
                                    Select PowerPoint File
                                </button>

                                <p className="text-sm font-medium text-brand-dark">
                                    or drag and drop your PPTX / PPT file here
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Converts presentation slides into clean, formatted PDFs (up to 50MB)
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5 max-w-2xl mx-auto py-2">
                                <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9]">
                                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#fee2e2] text-[#C43E1C] border border-[#fecaca]">
                                            <IconFileTypePpt size={24} stroke={2} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-bold text-sm sm:text-base text-brand-dark truncate">
                                                {file.name}
                                            </p>
                                            <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1.5">
                                                <span>{formatFileSize(file.size)}</span>
                                                <span>•</span>
                                                <span className="text-[#dc2626] font-semibold flex items-center gap-1">
                                                    <IconFileTypePdf size={13} /> Target: PDF
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

                                <button
                                    id="convert-pptx-to-pdf-btn"
                                    type="button"
                                    onClick={handleConvert}
                                    disabled={isProcessing}
                                    className={`w-full py-3.5 px-8 rounded-xl font-bold text-base text-white transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99] cursor-pointer ${
                                        isProcessing
                                            ? "bg-[#C43E1C] opacity-70 cursor-wait"
                                            : "bg-[#C43E1C] hover:bg-[#a53214] hover:shadow-md"
                                    }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <IconLoader2 className="animate-spin" size={20} />
                                            <span>Converting to PDF…</span>
                                        </>
                                    ) : (
                                        <>
                                            <IconPresentation size={20} />
                                            <span>Convert to PDF</span>
                                            <IconArrowRight size={17} className="opacity-70 ml-1" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-200">
                        <div className="relative mb-4">
                            <PdfLogoBadge size={34} />
                            <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-white border-2 border-white">
                                <IconCheck size={14} stroke={3} />
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold text-brand-dark">Conversion Complete!</h2>
                        <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-lg">
                            Your PowerPoint presentation (<span className="font-semibold text-brand-dark">{downloadInfo?.fileName}</span>) has been compiled into a secure PDF document.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6 w-full max-w-md">
                            <button
                                type="button"
                                onClick={handleDownloadAgain}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                            >
                                <IconDownload size={18} />
                                <span>Download PDF</span>
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
