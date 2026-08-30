"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
    IconPhotoSearch,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconPhoto,
    IconX,
    IconArrowRight,
} from "@tabler/icons-react";
import FileStore from "@/lib/file-store";

export default function ExtractImagesClient() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: false,
        noClick: !!file,
    });

    const handleStartExtraction = () => {
        if (!file) return;
        FileStore.setFile("current_pdf", file);
        router.push("/pdf-to-jpg/extract");
    };

    const handleReset = () => {
        setFile(null);
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
                {!file ? (
                    <div
                        {...getRootProps()}
                        className={`group flex flex-col items-center justify-center py-8 sm:py-10 px-6 sm:px-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center w-full ${
                            isDragActive
                                ? "border-brand-teal bg-[#e6f4ef]/60 scale-[1.003]"
                                : "border-[#E0DED9] bg-[#FAFAF9] hover:border-brand-teal/70 hover:bg-[#FAF9F7]"
                        }`}
                    >
                        <input {...getInputProps()} id="extract-images-input" />

                        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ede9fe] text-[#8B5CF6] mb-4 border border-[#ddd6fe] group-hover:scale-105 transition-transform">
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
                            Extracts embedded photos, graphics, and figures losslessly (up to 50MB)
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
                                    <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1.5">
                                        <span>{formatFileSize(file.size)}</span>
                                        <span>•</span>
                                        <span className="text-[#8B5CF6] font-semibold flex items-center gap-1">
                                            <IconPhoto size={13} /> Ready to isolate images
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleReset}
                                className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors cursor-pointer"
                                title="Remove file"
                            >
                                <IconX size={18} stroke={2} />
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={handleStartExtraction}
                            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-[#8B5CF6] hover:bg-[#7c3aed] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.99]"
                        >
                            <IconPhotoSearch size={20} />
                            <span>Extract All Embedded Images</span>
                            <IconArrowRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
