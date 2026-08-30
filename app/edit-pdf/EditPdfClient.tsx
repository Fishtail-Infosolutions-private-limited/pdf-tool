"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDropzone } from "react-dropzone";
import {
    IconPencil,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconTypography,
    IconX,
    IconArrowRight,
} from "@tabler/icons-react";
import FileStore from "@/lib/file-store";

const PdfEditor = dynamic(() => import("@/components/PdfEditor"), {
    ssr: false,
    loading: () => (
        <div className="flex-1 flex items-center justify-center py-32">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 rounded-full border-4 border-brand-teal border-t-transparent animate-spin" />
                <p className="text-neutral-500 text-sm font-medium">Loading PDF editor…</p>
            </div>
        </div>
    ),
});

export default function EditPdfClient() {
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        const storedFile = FileStore.getFile("edit_pdf_main");
        if (storedFile) {
            setFile(storedFile);
            FileStore.clearFile("edit_pdf_main");
        }
    }, []);

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

    if (file) {
        return (
            <div className="w-full">
                <PdfEditor file={file} setFile={setFile} />
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="bg-white rounded-3xl border border-[#E0DED9] p-5 sm:p-8 md:p-9 shadow-sm transition-all duration-200 w-full">
                <div
                    {...getRootProps()}
                    className={`group flex flex-col items-center justify-center py-8 sm:py-10 px-6 sm:px-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center w-full ${
                        isDragActive
                            ? "border-brand-teal bg-[#e6f4ef]/60 scale-[1.003]"
                            : "border-[#E0DED9] bg-[#FAFAF9] hover:border-brand-teal/70 hover:bg-[#FAF9F7]"
                    }`}
                >
                    <input {...getInputProps()} id="edit-pdf-input" />

                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5] group-hover:scale-105 transition-transform">
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
                        Add text, shapes, highlight, annotate, draw, and sign PDF pages (up to 50MB)
                    </p>
                </div>
            </div>
        </div>
    );
}
