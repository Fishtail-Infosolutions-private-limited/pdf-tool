"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
    IconPhoto,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconFileTypeJpg,
    IconX,
    IconArrowRight,
    IconPhotoSearch,
    IconLayersLinked,
} from "@tabler/icons-react";
import { pdfToImages, downloadZip } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";
import toast from "react-hot-toast";

function JpgLogoBadge({ size = 28 }: { size?: number }) {
    return (
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fef3c7] text-[#d97706] border border-[#fde68a] shadow-2xs">
            <IconFileTypeJpg size={size} stroke={2} />
        </div>
    );
}

export default function PdfToJpgClient() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [pageCount, setPageCount] = useState(0);

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

    const handleDirectConvert = async () => {
        if (!file) return;
        setIsProcessing(true);
        setSuccess(false);

        const toastId = toast.loading("Converting PDF pages to high-resolution JPG images...");

        try {
            const pages = await pdfToImages(file, "image/jpeg", 2);
            setPageCount(pages.length);

            const zipFiles = pages.map((p) => ({
                name: `${file.name.replace(/\.pdf$/i, "")}_page_${p.pageNum}.jpg`,
                data: p.dataUrl,
            }));

            await downloadZip(zipFiles, `${file.name.replace(/\.pdf$/i, "")}_images.zip`);
            setSuccess(true);
            toast.success(`Converted ${pages.length} page(s) to JPG!`, { id: toastId });
        } catch (err: any) {
            console.error(err);
            toast.error(err?.message || "Failed to convert PDF to JPG.", { id: toastId });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleVisualGallery = (mode: "convert" | "extract") => {
        if (!file) return;
        FileStore.setFile("current_pdf", file);
        router.push(`/pdf-to-jpg/${mode}`);
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
                                <input {...getInputProps()} id="pdf-to-jpg-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fef3c7] text-[#d97706] mb-4 border border-[#fde68a] group-hover:scale-105 transition-transform">
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
                                    Converts pages to high-resolution JPG images (up to 50MB)
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
                                                <span className="text-[#d97706] font-semibold flex items-center gap-1">
                                                    <IconPhoto size={13} /> Target: JPG Images
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

                                {/* Conversion Options */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <button
                                        type="button"
                                        onClick={() => handleVisualGallery("convert")}
                                        className="flex flex-col p-4 rounded-xl border border-[#E0DED9] bg-[#FAFAF9] hover:bg-white hover:border-[#d97706] hover:shadow-xs transition-all text-left cursor-pointer group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#fef3c7] text-[#d97706]">
                                                <IconLayersLinked size={20} stroke={2} />
                                            </span>
                                            <IconArrowRight size={16} className="text-neutral-400 group-hover:text-[#d97706] group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                        <h3 className="font-bold text-sm text-brand-dark group-hover:text-[#d97706] transition-colors">
                                            Convert Every Page
                                        </h3>
                                        <p className="text-xs text-neutral-500 mt-0.5">
                                            Select and preview pages before saving.
                                        </p>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleVisualGallery("extract")}
                                        className="flex flex-col p-4 rounded-xl border border-[#E0DED9] bg-[#FAFAF9] hover:bg-white hover:border-[#d97706] hover:shadow-xs transition-all text-left cursor-pointer group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#fef3c7] text-[#d97706]">
                                                <IconPhotoSearch size={20} stroke={2} />
                                            </span>
                                            <IconArrowRight size={16} className="text-neutral-400 group-hover:text-[#d97706] group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                        <h3 className="font-bold text-sm text-brand-dark group-hover:text-[#d97706] transition-colors">
                                            Extract Images Only
                                        </h3>
                                        <p className="text-xs text-neutral-500 mt-0.5">
                                            Extract embedded photos &amp; graphics.
                                        </p>
                                    </button>
                                </div>

                                <button
                                    id="convert-pdf-to-jpg-btn"
                                    type="button"
                                    onClick={handleDirectConvert}
                                    disabled={isProcessing}
                                    className={`w-full py-3.5 px-8 rounded-xl font-bold text-base text-white transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99] cursor-pointer ${
                                        isProcessing
                                            ? "bg-[#d97706] opacity-70 cursor-wait"
                                            : "bg-[#d97706] hover:bg-[#b45309] hover:shadow-md"
                                    }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <IconLoader2 className="animate-spin" size={20} />
                                            <span>Converting Pages to JPG (ZIP)…</span>
                                        </>
                                    ) : (
                                        <>
                                            <IconPhoto size={20} />
                                            <span>Download All Pages as JPG (ZIP)</span>
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
                            <JpgLogoBadge size={34} />
                            <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-white border-2 border-white">
                                <IconCheck size={14} stroke={3} />
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold text-brand-dark">Conversion Complete!</h2>
                        <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-lg">
                            Successfully converted <span className="font-semibold text-brand-dark">{pageCount} page(s)</span> into high-resolution JPG images packaged in a ZIP archive.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6 w-full max-w-md">
                            <button
                                type="button"
                                onClick={handleDirectConvert}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
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
                                <span>Convert Another PDF</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
