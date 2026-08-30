"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
    IconScissors,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconX,
    IconArrowRight,
    IconLayoutGrid,
} from "@tabler/icons-react";
import { splitPdf, downloadBlob, downloadZip } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";
import toast from "react-hot-toast";

export default function SplitPdfClient() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [pageRange, setPageRange] = useState("1-2");
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            setSuccess(false);
        }
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: false,
        noClick: !!file,
    });

    const handleQuickSplit = async () => {
        if (!file) return;
        setIsProcessing(true);
        setSuccess(false);

        const toastId = toast.loading("Splitting PDF pages...");

        try {
            // Parse ranges (e.g. "1-3, 5")
            const parts = pageRange.split(",").map((p) => p.trim());
            const ranges = parts.map((part) => {
                if (part.includes("-")) {
                    const [s, e] = part.split("-").map((n) => parseInt(n.trim()));
                    return { start: s || 1, end: e || s || 1 };
                }
                const p = parseInt(part) || 1;
                return { start: p, end: p };
            });

            const result = await splitPdf(file, ranges, true);
            const uint8 = Array.isArray(result) ? result[0] : result;
            const blob = new Blob([new Uint8Array(uint8).buffer], { type: "application/pdf" });
            downloadBlob(blob, `split_${file.name}`);
            setSuccess(true);
            toast.success("Split successful! Your PDF has been downloaded.", { id: toastId });
        } catch (err: any) {
            console.error(err);
            toast.error(err?.message || "Failed to split PDF.", { id: toastId });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleVisualSplit = () => {
        if (!file) return;
        FileStore.clearFile("split_pdf_main");
        FileStore.setFile("split_pdf_main", file);
        router.push("/split-pdf/convert");
    };

    const handleReset = () => {
        setFile(null);
        setSuccess(false);
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
                                <input {...getInputProps()} id="split-pdf-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ffedd5] text-[#ea580c] mb-4 border border-[#fed7aa] group-hover:scale-105 transition-transform">
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
                                    Extract pages or split into multiple separate files (up to 100MB)
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5 max-w-2xl mx-auto py-2">
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
                                                {formatFileSize(file.size)} • Ready to split
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

                                {/* Range Input */}
                                <div className="p-4 rounded-xl bg-[#FAF9F7] border border-[#E0DED9] flex flex-col gap-2">
                                    <label htmlFor="split-range" className="text-xs font-bold text-brand-dark">
                                        Page Range to Extract:
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            id="split-range"
                                            type="text"
                                            value={pageRange}
                                            onChange={(e) => setPageRange(e.target.value)}
                                            placeholder="e.g. 1-3, 5"
                                            className="flex-1 py-2 px-3 rounded-lg border border-[#E0DED9] bg-white text-sm text-brand-dark focus:outline-none focus:border-brand-teal"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleQuickSplit}
                                            disabled={isProcessing}
                                            className="px-5 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs shadow-2xs transition-colors cursor-pointer"
                                        >
                                            Split Range
                                        </button>
                                    </div>
                                    <p className="text-[11px] text-neutral-500">
                                        Enter single pages or ranges separated by commas (e.g. 1-4, 7-10).
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleVisualSplit}
                                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                                >
                                    <IconLayoutGrid size={18} />
                                    <span>Open Visual Page Selector &amp; Splitter</span>
                                    <IconArrowRight size={15} />
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-200">
                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#ffedd5] text-[#ea580c] mb-4 border border-[#fed7aa]">
                            <IconCheck size={34} stroke={2.5} />
                        </span>

                        <h2 className="text-2xl font-bold text-brand-dark">Split Complete!</h2>
                        <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-lg">
                            Your requested page range has been extracted into a standalone PDF document.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6 w-full max-w-md">
                            <button
                                type="button"
                                onClick={handleQuickSplit}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                            >
                                <IconDownload size={18} />
                                <span>Download Again</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <IconRefresh size={18} />
                                <span>Split Another PDF</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
