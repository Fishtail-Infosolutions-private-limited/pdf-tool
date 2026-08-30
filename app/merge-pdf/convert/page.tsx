"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, Reorder } from "motion/react";
import {
    IconArrowsJoin2,
    IconPlus,
    IconTrash,
    IconLoader2,
    IconCheck,
    IconArrowLeft,
    IconFileTypePdf,
    IconGripVertical,
    IconUpload,
    IconDownload,
    IconRefresh,
} from "@tabler/icons-react";
import { downloadBlob, mergePdfs } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";

interface PdfItem {
    id: string;
    file: File;
    size: string;
}

function uid() {
    return Math.random().toString(36).slice(2, 10);
}

function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function PdfCard({
    item,
    index,
    onDelete,
}: {
    item: PdfItem;
    index: number;
    onDelete: () => void;
}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="group relative flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl border border-[#E0DED9] shadow-2xs hover:border-brand-teal/60 hover:shadow-xs transition-all duration-200"
        >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-3">
                <div
                    className="cursor-grab active:cursor-grabbing text-neutral-300 hover:text-neutral-600 transition-colors p-1"
                    title="Drag to reorder"
                >
                    <IconGripVertical size={20} />
                </div>

                <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#fee2e2] text-[#dc2626] border border-[#fecaca] shrink-0">
                    <IconFileTypePdf size={22} stroke={1.8} />
                </div>

                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-md bg-[#FAFAF9] border border-[#E0DED9] text-[10px] font-bold text-neutral-600">
                            {index + 1}
                        </span>
                        <p className="text-sm font-bold text-brand-dark truncate max-w-[200px] sm:max-w-md" title={item.file.name}>
                            {item.file.name}
                        </p>
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5 ml-7">
                        {item.size}
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
                title="Remove file"
                className="flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer shrink-0"
            >
                <IconTrash size={16} />
            </button>
        </motion.div>
    );
}

export default function MergePdfConvertPage() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const hasInitialized = useRef(false);

    const [pdfs, setPdfs] = useState<PdfItem[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        const items: PdfItem[] = [];
        for (let i = 0; i < 200; i++) {
            const f = FileStore.getFile(`pdf_${i}`);
            if (!f) break;
            items.push({ id: uid(), file: f, size: formatBytes(f.size) });
        }

        if (items.length === 0) {
            router.replace("/merge-pdf");
            return;
        }

        for (let i = 0; i < items.length; i++) FileStore.clearFile(`pdf_${i}`);

        setPdfs(items);
        setIsLoading(false);
    }, [router]);

    const handleFileArray = useCallback((newFiles: File[]) => {
        if (!newFiles || newFiles.length === 0) return;
        const items: PdfItem[] = [];
        for (const f of newFiles) {
            if (f.type === "application/pdf" || f.name.endsWith(".pdf")) {
                items.push({ id: uid(), file: f, size: formatBytes(f.size) });
            }
        }
        setPdfs((prev) => [...prev, ...items]);
        setError(null);
    }, []);

    const addFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles) return;
        handleFileArray(Array.from(newFiles));
    }, [handleFileArray]);

    const deletePdf = (id: string) => {
        setPdfs((prev) => prev.filter((i) => i.id !== id));
    };

    const handleMerge = async () => {
        if (pdfs.length < 2) {
            setError("Please add at least 2 PDFs to merge.");
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            const allFiles = pdfs.map((p) => p.file);
            const mergedBytes = await mergePdfs(allFiles);
            const blob = new Blob([new Uint8Array(mergedBytes).buffer], { type: "application/pdf" });
            downloadBlob(blob, "merged_document.pdf");
            setSuccess(true);
        } catch (err: any) {
            console.error(err);
            setError(err?.message || "Merge failed. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <IconLoader2 size={36} className="animate-spin text-brand-teal" />
                        <p className="text-neutral-500 text-sm font-medium">Loading your PDFs…</p>
                    </div>
                </main>
            </div>
        );
    }

    if (success) {
        return (
            <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center py-20 px-5">
                    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#E0DED9] w-full max-w-lg flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-200">
                        <span className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
                            <IconCheck size={40} stroke={2.5} />
                        </span>
                        <div>
                            <h1 className="text-2xl font-bold text-brand-dark">PDFs Merged!</h1>
                            <p className="text-neutral-600 mt-2 text-sm sm:text-base leading-relaxed">
                                Your combined document (<span className="font-semibold text-brand-dark">merged_document.pdf</span>) has been downloaded.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                            <button
                                onClick={() => {
                                    setSuccess(false);
                                    setPdfs([]);
                                    router.push("/merge-pdf");
                                }}
                                className="flex-1 py-3.5 px-5 rounded-xl bg-white text-brand-dark font-semibold border border-[#E0DED9] hover:bg-[#FAF9F7] transition-all cursor-pointer shadow-2xs text-sm"
                            >
                                Start Over
                            </button>
                            <button
                                onClick={() => setSuccess(false)}
                                className="flex-1 py-3.5 px-5 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold transition-all cursor-pointer shadow-sm text-sm"
                            >
                                Back to Editing
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
            <Navbar />

            <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 w-full pt-28 md:pt-32 pb-16 flex flex-col">
                <div className="mb-6 shrink-0 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => router.push("/merge-pdf")}
                            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-600 hover:text-brand-dark px-3 py-1.5 rounded-xl border border-[#E0DED9] bg-white hover:bg-[#FAF9F7] transition-all cursor-pointer shadow-2xs"
                        >
                            <IconArrowLeft size={16} /> Back
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#e6f4ef] text-brand-teal">
                                <IconArrowsJoin2 size={18} stroke={2} />
                            </span>
                            <div>
                                <h1 className="text-base sm:text-lg font-bold text-brand-dark leading-tight">
                                    Organize & Merge PDFs
                                </h1>
                                <p className="text-xs text-neutral-500">
                                    {pdfs.length} document{pdfs.length !== 1 ? "s" : ""} loaded
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#E0DED9] text-brand-dark text-xs sm:text-sm font-bold hover:bg-[#FAF9F7] hover:border-brand-teal transition-all cursor-pointer shadow-2xs"
                    >
                        <IconPlus size={16} className="text-brand-teal" />
                        <span>Add More PDFs</span>
                    </button>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,application/pdf"
                    className="hidden"
                    onChange={(e) => addFiles(e.target.files)}
                />

                <div className="bg-white rounded-3xl border border-[#E0DED9] shadow-sm p-5 sm:p-8 flex flex-col flex-1">
                    <p className="text-xs sm:text-sm text-neutral-500 mb-5">
                        Drag and drop the cards using the grip handle (⋮⋮) to arrange their order. The topmost file will appear first in the merged document.
                    </p>

                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 min-h-[250px] max-h-[500px] pb-4">
                        {pdfs.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-[#E0DED9] rounded-2xl bg-[#FAFAF9]">
                                <IconUpload size={32} className="text-neutral-400 mb-2" />
                                <p className="text-sm font-bold text-brand-dark">No files loaded</p>
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="mt-3 px-5 py-2 rounded-xl bg-brand-teal text-white font-bold text-xs"
                                >
                                    Select PDF Files
                                </button>
                            </div>
                        ) : (
                            <Reorder.Group
                                axis="y"
                                values={pdfs}
                                onReorder={setPdfs}
                                className="flex flex-col gap-3"
                                as="div"
                            >
                                <AnimatePresence>
                                    {pdfs.map((pdf, index) => (
                                        <Reorder.Item key={pdf.id} value={pdf} as="div">
                                            <PdfCard
                                                item={pdf}
                                                index={index}
                                                onDelete={() => deletePdf(pdf.id)}
                                            />
                                        </Reorder.Item>
                                    ))}
                                </AnimatePresence>
                            </Reorder.Group>
                        )}
                    </div>

                    <div className="shrink-0 mt-6 pt-4 border-t border-[#E0DED9]">
                        {error && (
                            <div className="mb-4 p-3.5 bg-red-50 text-red-700 text-xs sm:text-sm rounded-xl flex items-center gap-2 border border-red-200 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                {error}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-neutral-500">
                                {pdfs.length < 2
                                    ? "Add at least 2 PDF files to enable merging."
                                    : `Ready to combine ${pdfs.length} files into one PDF.`}
                            </p>

                            <button
                                type="button"
                                onClick={handleMerge}
                                disabled={pdfs.length < 2 || isProcessing}
                                className={`w-full sm:w-auto sm:min-w-[220px] py-4 px-8 rounded-xl font-bold text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm text-sm sm:text-base ${
                                    pdfs.length < 2
                                        ? "bg-brand-teal/40 cursor-not-allowed shadow-none"
                                        : isProcessing
                                            ? "bg-brand-teal opacity-60 cursor-wait"
                                            : "bg-brand-teal hover:bg-[#036649] cursor-pointer active:scale-[0.99]"
                                }`}
                            >
                                {isProcessing && <IconLoader2 className="animate-spin" size={20} />}
                                {isProcessing ? "Merging PDFs…" : `Merge ${pdfs.length} PDF${pdfs.length !== 1 ? "s" : ""}`}
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
