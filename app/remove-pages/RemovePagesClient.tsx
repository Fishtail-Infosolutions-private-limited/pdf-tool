"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
    IconUpload,
    IconFileMinus,
    IconLoader2,
} from "@tabler/icons-react";
import FileStore from "@/lib/file-store";

export default function RemovePagesClient() {
    const router = useRouter();
    const [isRouting, setIsRouting] = useState(false);

    const onDrop = (acceptedFiles: File[]) => {
        if (!acceptedFiles || acceptedFiles.length === 0) return;
        setIsRouting(true);

        const file = acceptedFiles[0];
        for (let i = 0; i < 200; i++) FileStore.clearFile(`remove-pages_${i}`);
        FileStore.setFile("remove-pages_0", file);

        router.push("/remove-pages/remove");
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: false,
    });

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
                    <input {...getInputProps()} id="remove-pages-input" />

                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fee2e2] text-[#dc2626] mb-4 border border-[#fecaca] group-hover:scale-105 transition-transform">
                        {isRouting ? (
                            <IconLoader2 size={32} className="animate-spin text-[#dc2626]" />
                        ) : (
                            <>
                                <IconUpload size={28} stroke={1.8} className="sm:hidden" />
                                <IconUpload size={32} stroke={1.8} className="hidden sm:block" />
                            </>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={open}
                        disabled={isRouting}
                        className="px-7 py-3 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer mb-2.5"
                    >
                        {isRouting ? "Loading PDF…" : "Select PDF File"}
                    </button>

                    <p className="text-sm font-medium text-brand-dark">
                        or drag and drop your PDF file here
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                        Delete unwanted or blank pages easily (up to 100MB)
                    </p>
                </div>
            </div>
        </div>
    );
}
