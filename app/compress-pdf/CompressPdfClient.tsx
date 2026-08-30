"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
    IconLayersSubtract,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconX,
    IconArrowRight,
    IconSparkles,
} from "@tabler/icons-react";
import { compressPdf, downloadBlob, CompressQuality, CompressResult } from "@/lib/pdf-utils";
import toast from "react-hot-toast";

export default function CompressPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [quality, setQuality] = useState<CompressQuality>("medium");
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<CompressResult | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            setResult(null);
        }
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: false,
        noClick: !!file,
    });

    const handleCompress = async () => {
        if (!file) return;
        setIsProcessing(true);
        setResult(null);

        const toastId = toast.loading("Compressing and optimizing PDF...");

        try {
            const res = await compressPdf(file, quality);
            downloadBlob(res.blob, `compressed_${file.name}`);
            setResult(res);
            const saved = res.originalSize > 0 ? Math.round(((res.originalSize - res.compressedSize) / res.originalSize) * 100) : 0;
            toast.success(`Reduced by ${saved > 0 ? saved : 0}%!`, { id: toastId });
        } catch (err: any) {
            console.error(err);
            toast.error(err?.message || "Failed to compress PDF.", { id: toastId });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setResult(null);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(1) + " KB";
        }
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    };

    const percentSaved =
        result && result.originalSize > 0
            ? Math.max(0, Math.round(((result.originalSize - result.compressedSize) / result.originalSize) * 100))
            : 0;

    return (
        <div className="w-full">
            <div className="bg-white rounded-3xl border border-[#E0DED9] p-5 sm:p-8 md:p-9 shadow-sm transition-all duration-200 w-full">
                {!result ? (
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
                                <input {...getInputProps()} id="compress-pdf-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ede9fe] text-[#7c3aed] mb-4 border border-[#ddd6fe] group-hover:scale-105 transition-transform">
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
                                    Reduces PDF file size while preserving high visual quality (up to 100MB)
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
                                            <p className="text-xs text-neutral-500 mt-0.5">
                                                Original Size: <span className="font-semibold text-brand-dark">{formatFileSize(file.size)}</span>
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

                                {/* Compression Level Selector */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setQuality("low")}
                                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                                            quality === "low"
                                                ? "border-[#7c3aed] bg-[#f5f3ff] shadow-2xs"
                                                : "border-[#E0DED9] bg-[#FAFAF9] hover:bg-white"
                                        }`}
                                    >
                                        <p className="font-bold text-xs text-brand-dark">Extreme</p>
                                        <p className="text-[11px] text-neutral-500 mt-0.5">Smallest file size, lower DPI.</p>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setQuality("medium")}
                                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                                            quality === "medium"
                                                ? "border-brand-teal bg-[#e6f4ef] shadow-2xs"
                                                : "border-[#E0DED9] bg-[#FAFAF9] hover:bg-white"
                                        }`}
                                    >
                                        <span className="absolute -top-2 right-2 px-1.5 py-0.5 bg-brand-teal text-white text-[9px] font-bold rounded-full">
                                            Recommended
                                        </span>
                                        <p className="font-bold text-xs text-brand-dark">Standard</p>
                                        <p className="text-[11px] text-neutral-500 mt-0.5">Optimal balance of size &amp; clarity.</p>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setQuality("high")}
                                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                                            quality === "high"
                                                ? "border-[#7c3aed] bg-[#f5f3ff] shadow-2xs"
                                                : "border-[#E0DED9] bg-[#FAFAF9] hover:bg-white"
                                        }`}
                                    >
                                        <p className="font-bold text-xs text-brand-dark">High Quality</p>
                                        <p className="text-[11px] text-neutral-500 mt-0.5">Light compression, maximum DPI.</p>
                                    </button>
                                </div>

                                <button
                                    id="compress-pdf-action-btn"
                                    type="button"
                                    onClick={handleCompress}
                                    disabled={isProcessing}
                                    className={`w-full py-3.5 px-8 rounded-xl font-bold text-base text-white transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99] cursor-pointer ${
                                        isProcessing
                                            ? "bg-[#7c3aed] opacity-70 cursor-wait"
                                            : "bg-[#7c3aed] hover:bg-[#6d28d9] hover:shadow-md"
                                    }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <IconLoader2 className="animate-spin" size={20} />
                                            <span>Compressing PDF…</span>
                                        </>
                                    ) : (
                                        <>
                                            <IconLayersSubtract size={20} />
                                            <span>Compress PDF</span>
                                            <IconArrowRight size={17} className="opacity-70 ml-1" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-200">
                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#ede9fe] text-[#7c3aed] mb-4 border border-[#ddd6fe]">
                            <IconCheck size={34} stroke={2.5} />
                        </span>

                        <h2 className="text-2xl font-bold text-brand-dark">Compression Complete!</h2>
                        
                        {/* Compression Savings Badge */}
                        <div className="flex items-center justify-center gap-6 my-4 p-4 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9] max-w-sm w-full">
                            <div>
                                <p className="text-xs text-neutral-500">Original</p>
                                <p className="text-sm font-bold text-brand-dark line-through">{formatFileSize(result.originalSize)}</p>
                            </div>
                            <span className="text-brand-teal font-bold text-lg">➔</span>
                            <div>
                                <p className="text-xs text-neutral-500">Compressed</p>
                                <p className="text-sm font-bold text-brand-teal">{formatFileSize(result.compressedSize)}</p>
                            </div>
                            <div className="border-l border-[#E0DED9] pl-4">
                                <p className="text-xs text-neutral-500">Saved</p>
                                <p className="text-sm font-extrabold text-[#7c3aed]">-{percentSaved}%</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-4 w-full max-w-md">
                            <button
                                type="button"
                                onClick={() => downloadBlob(result.blob, `compressed_${file?.name || "document.pdf"}`)}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
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
                                <span>Compress Another</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
