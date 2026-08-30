"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
    IconArrowsJoin2,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconX,
    IconArrowRight,
    IconSortAscending,
} from "@tabler/icons-react";
import { mergePdfs, downloadBlob } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";
import toast from "react-hot-toast";

export default function MergePdfClient() {
    const router = useRouter();
    const [files, setFiles] = useState<File[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [downloadBlobData, setDownloadBlobData] = useState<Blob | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFiles((prev) => [...prev, ...acceptedFiles]);
            setSuccess(false);
        }
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: true,
        noClick: files.length > 0,
    });

    const handleDirectMerge = async () => {
        if (files.length < 2) {
            toast.error("Please select at least 2 PDF files to merge.");
            return;
        }
        setIsProcessing(true);
        setSuccess(false);

        const toastId = toast.loading(`Merging ${files.length} PDF files...`);

        try {
            const mergedBytes = await mergePdfs(files);
            const blob = new Blob([new Uint8Array(mergedBytes).buffer], { type: "application/pdf" });
            downloadBlob(blob, "merged_document.pdf");
            setDownloadBlobData(blob);
            setSuccess(true);
            toast.success("Merge successful! Your combined PDF is ready.", { id: toastId });
        } catch (err: any) {
            console.error(err);
            toast.error(err?.message || "Failed to merge PDF files.", { id: toastId });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleVisualOrder = () => {
        if (files.length === 0) return;
        for (let i = 0; i < 200; i++) FileStore.clearFile(`pdf_${i}`);
        files.forEach((f, i) => FileStore.setFile(`pdf_${i}`, f));
        router.push("/merge-pdf/convert");
    };

    const handleReset = () => {
        setFiles([]);
        setSuccess(false);
        setDownloadBlobData(null);
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-3xl border border-[#E0DED9] p-5 sm:p-8 md:p-9 shadow-sm transition-all duration-200 w-full">
                {!success ? (
                    <div>
                        {files.length === 0 ? (
                            <div
                                {...getRootProps()}
                                className={`group flex flex-col items-center justify-center py-8 sm:py-10 px-6 sm:px-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center w-full ${
                                    isDragActive
                                        ? "border-brand-teal bg-[#e6f4ef]/60 scale-[1.003]"
                                        : "border-[#E0DED9] bg-[#FAFAF9] hover:border-brand-teal/70 hover:bg-[#FAF9F7]"
                                }`}
                            >
                                <input {...getInputProps()} id="merge-pdf-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5]/60 group-hover:scale-105 transition-transform">
                                    <IconUpload size={28} stroke={1.8} className="sm:hidden" />
                                    <IconUpload size={32} stroke={1.8} className="hidden sm:block" />
                                </div>

                                <button
                                    type="button"
                                    onClick={open}
                                    className="px-7 py-3 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer mb-2.5"
                                >
                                    Select PDF Files
                                </button>

                                <p className="text-sm font-medium text-brand-dark">
                                    or drag and drop multiple PDF files here
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Combine 2 or more PDF documents into one (up to 100MB)
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5 max-w-2xl mx-auto py-2">
                                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9]">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="font-bold text-sm sm:text-base text-brand-dark">
                                            {files.length} PDF{files.length > 1 ? "s" : ""} to Merge
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={open}
                                                className="text-xs font-semibold text-brand-teal hover:underline"
                                            >
                                                + Add More
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleReset}
                                                className="text-xs font-semibold text-neutral-500 hover:text-neutral-800"
                                            >
                                                Clear
                                            </button>
                                        </div>
                                    </div>

                                    <div className="max-h-44 overflow-y-auto flex flex-col gap-2 pr-1">
                                        {files.map((f, i) => (
                                            <div
                                                key={`${f.name}-${i}`}
                                                className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-[#E0DED9] text-xs"
                                            >
                                                <div className="flex items-center gap-2 min-w-0 pr-2">
                                                    <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded bg-[#fee2e2] text-[#dc2626] font-bold">
                                                        {i + 1}
                                                    </span>
                                                    <span className="font-medium text-brand-dark truncate">
                                                        {f.name}
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFile(i)}
                                                    className="text-neutral-400 hover:text-red-500 transition-colors"
                                                >
                                                    <IconX size={15} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={handleVisualOrder}
                                        className="py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                                    >
                                        <IconSortAscending size={18} />
                                        <span>Reorder Pages</span>
                                    </button>

                                    <button
                                        id="merge-pdf-action-btn"
                                        type="button"
                                        onClick={handleDirectMerge}
                                        disabled={isProcessing || files.length < 2}
                                        className={`py-3.5 px-6 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                                            files.length < 2
                                                ? "bg-brand-teal/40 cursor-not-allowed shadow-none"
                                                : isProcessing
                                                    ? "bg-brand-teal opacity-70 cursor-wait"
                                                    : "bg-brand-teal hover:bg-[#036649] hover:shadow-md"
                                        }`}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <IconLoader2 className="animate-spin" size={18} />
                                                <span>Merging PDFs…</span>
                                            </>
                                        ) : (
                                            <>
                                                <IconArrowsJoin2 size={18} />
                                                <span>Merge {files.length} PDFs</span>
                                                <IconArrowRight size={15} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-200">
                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5]">
                            <IconCheck size={34} stroke={2.5} />
                        </span>

                        <h2 className="text-2xl font-bold text-brand-dark">Merge Complete!</h2>
                        <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-lg">
                            Your combined PDF document has been created with all pages in exact order.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6 w-full max-w-md">
                            <button
                                type="button"
                                onClick={handleDirectMerge}
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
                                <span>Merge More PDFs</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
