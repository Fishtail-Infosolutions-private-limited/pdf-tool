"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
    IconStack2,
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
import FileStore from "@/lib/file-store";

export default function OrganisePdfClient() {
    const router = useRouter();
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFiles(acceptedFiles);
        }
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: true,
        noClick: files.length > 0,
    });

    const handleOpenOrganizer = () => {
        if (files.length === 0) return;
        for (let i = 0; i < 200; i++) FileStore.clearFile(`organise_${i}`);
        files.forEach((f, i) => FileStore.setFile(`organise_${i}`, f));
        router.push("/organise-pdf/convert");
    };

    const handleReset = () => {
        setFiles([]);
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-3xl border border-[#E0DED9] p-5 sm:p-8 md:p-9 shadow-sm transition-all duration-200 w-full">
                {files.length === 0 ? (
                    <div
                        {...getRootProps()}
                        className={`group flex flex-col items-center justify-center py-8 sm:py-10 px-6 sm:px-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center w-full ${
                            isDragActive
                                ? "border-brand-teal bg-[#e6f4ef]/60 scale-[1.003]"
                                : "border-[#E0DED9] bg-[#FAFAF9] hover:border-brand-teal/70 hover:bg-[#FAF9F7]"
                        }`}
                    >
                        <input {...getInputProps()} id="organise-pdf-input" />

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
                            or drag and drop one or more PDF files here
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">
                            Reorder, sort, delete, and rotate pages interactively (up to 100MB)
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-5 max-w-2xl mx-auto py-2">
                        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9]">
                            <div className="flex items-center justify-between mb-3">
                                <p className="font-bold text-sm sm:text-base text-brand-dark">
                                    {files.length} Document{files.length > 1 ? "s" : ""} Loaded
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

                        <button
                            type="button"
                            onClick={handleOpenOrganizer}
                            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-brand-teal hover:bg-[#036649] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.99]"
                        >
                            <IconSortAscending size={20} />
                            <span>Open Visual Page Organizer &amp; Reorder</span>
                            <IconArrowRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
