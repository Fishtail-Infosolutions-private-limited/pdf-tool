"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
    IconScan,
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
import { ocrPdf, downloadBlob } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";
import toast from "react-hot-toast";

export default function OcrPdfClient() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [language, setLanguage] = useState("eng");
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

    const handleOcr = async () => {
        if (!file) return;
        setIsProcessing(true);
        setSuccess(false);

        const toastId = toast.loading("Running OCR text recognition across all pages...");

        try {
            const res = await ocrPdf(file, language);
            const newName = res.filename || `ocr_${file.name}`;
            downloadBlob(res.blob, newName);
            setDownloadInfo({ blob: res.blob, fileName: newName });
            setSuccess(true);
            toast.success("OCR completed! Your searchable PDF is ready.", { id: toastId });
        } catch (err: any) {
            console.error(err);
            toast.error(err?.message || "Failed to perform OCR recognition.", { id: toastId });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCustomOcr = () => {
        if (!file) return;
        FileStore.clearFile("ocr_pdf_main");
        FileStore.setFile("ocr_pdf_main", file);
        router.push("/ocr-pdf/convert");
    };

    const handleDownloadAgain = () => {
        if (downloadInfo) {
            downloadBlob(downloadInfo.blob, downloadInfo.fileName);
            toast.success("Downloading searchable PDF...");
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
                                <input {...getInputProps()} id="ocr-pdf-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fef3c7] text-[#d97706] mb-4 border border-[#fde68a] group-hover:scale-105 transition-transform">
                                    <IconUpload size={28} stroke={1.8} className="sm:hidden" />
                                    <IconUpload size={32} stroke={1.8} className="hidden sm:block" />
                                </div>

                                <button
                                    type="button"
                                    onClick={open}
                                    className="px-7 py-3 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer mb-2.5"
                                >
                                    Select Scanned PDF
                                </button>

                                <p className="text-sm font-medium text-brand-dark">
                                    or drag and drop your scanned PDF here
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">
                                    Converts non-selectable scans into searchable, copyable text (up to 100MB)
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
                                                {formatFileSize(file.size)} • Ready for OCR Recognition
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

                                {/* Language Selector */}
                                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF9F7] border border-[#E0DED9]">
                                    <span className="text-xs font-bold text-brand-dark">Recognition Language:</span>
                                    <select
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        className="text-xs font-semibold py-1.5 px-3 rounded-lg border border-[#E0DED9] bg-white text-brand-dark focus:outline-none focus:border-brand-teal"
                                    >
                                        <option value="eng">English</option>
                                        <option value="spa">Spanish (Español)</option>
                                        <option value="fra">French (Français)</option>
                                        <option value="deu">German (Deutsch)</option>
                                        <option value="ita">Italian (Italiano)</option>
                                        <option value="por">Portuguese (Português)</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={handleCustomOcr}
                                        className="py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                                    >
                                        <IconScan size={18} />
                                        <span>Advanced OCR Options</span>
                                    </button>

                                    <button
                                        id="ocr-pdf-action-btn"
                                        type="button"
                                        onClick={handleOcr}
                                        disabled={isProcessing}
                                        className={`py-3.5 px-6 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                                            isProcessing
                                                ? "bg-[#d97706] opacity-70 cursor-wait"
                                                : "bg-[#d97706] hover:bg-[#b45309] hover:shadow-md"
                                        }`}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <IconLoader2 className="animate-spin" size={18} />
                                                <span>Running OCR…</span>
                                            </>
                                        ) : (
                                            <>
                                                <IconSparkles size={18} />
                                                <span>Make PDF Searchable</span>
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
                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fef3c7] text-[#d97706] mb-4 border border-[#fde68a]">
                            <IconCheck size={34} stroke={2.5} />
                        </span>

                        <h2 className="text-2xl font-bold text-brand-dark">OCR Complete!</h2>
                        <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-lg">
                            Your scanned PDF (<span className="font-semibold text-brand-dark">{downloadInfo?.fileName}</span>) now has fully selectable, searchable, and copyable text.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6 w-full max-w-md">
                            <button
                                type="button"
                                onClick={handleDownloadAgain}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
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
                                <span>Process Another File</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
