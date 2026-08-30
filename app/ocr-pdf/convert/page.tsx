"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import {
    IconScan,
    IconLoader2,
    IconFileTypePdf,
    IconAlertTriangle,
    IconCheck,
    IconInfoCircle,
    IconRefresh,
    IconLanguage,
    IconArrowRight,
} from "@tabler/icons-react";
import { ocrPdf, OcrResult, downloadBlob } from "@/lib/pdf-utils";
import FileStore from "@/lib/file-store";
import toast from "react-hot-toast";

const LANGUAGES = [
    { value: "eng", label: "English" },
    { value: "fra", label: "French (Français)" },
    { value: "deu", label: "German (Deutsch)" },
    { value: "spa", label: "Spanish (Español)" },
    { value: "por", label: "Portuguese (Português)" },
    { value: "ita", label: "Italian (Italiano)" },
    { value: "nld", label: "Dutch (Nederlands)" },
    { value: "rus", label: "Russian (Русский)" },
    { value: "chi_sim", label: "Chinese Simplified (简体中文)" },
    { value: "chi_tra", label: "Chinese Traditional (繁體中文)" },
    { value: "jpn", label: "Japanese (日本語)" },
    { value: "kor", label: "Korean (한국어)" },
    { value: "ara", label: "Arabic (العربية)" },
    { value: "hin", label: "Hindi (हिन्दी)" },
    { value: "eng+fra", label: "English + French" },
    { value: "eng+deu", label: "English + German" },
    { value: "eng+spa", label: "English + Spanish" },
];

type Status = "idle" | "processing" | "success" | "already_text" | "error";

export default function OcrPdfConvertPage() {
    const router = useRouter();
    const hasInitialized = useRef(false);

    const [file, setFile] = useState<File | null>(null);
    const [pageCount, setPageCount] = useState<number | null>(null);
    const [status, setStatus] = useState<Status>("idle");
    const [result, setResult] = useState<OcrResult | null>(null);
    const [language, setLanguage] = useState("eng");
    const [force, setForce] = useState(false);

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        const f = FileStore.getFile("ocr_pdf_main");
        if (!f) {
            router.replace("/ocr-pdf");
            return;
        }
        FileStore.clearFile("ocr_pdf_main");
        setFile(f);

        import("pdfjs-dist").then((pdfjsLib) => {
            pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
                "pdfjs-dist/build/pdf.worker.min.mjs",
                import.meta.url
            ).toString();
            f.arrayBuffer().then((buf) => {
                pdfjsLib.getDocument({ data: buf }).promise.then((pdfDoc) => {
                    setPageCount(pdfDoc.numPages);
                }).catch(() => {});
            });
        });
    }, [router]);

    const handleRun = async () => {
        if (!file) return;
        setStatus("processing");
        const toastId = toast.loading("Running OCR, please wait...");

        try {
            const res = await ocrPdf(file, language, force);
            setResult(res);

            if (res.alreadyHadText && !force) {
                setStatus("already_text");
                toast.success("PDF already has selectable text!", { id: toastId });
            } else {
                downloadBlob(res.blob, res.filename);
                setStatus("success");
                toast.success("OCR complete! Your file is downloading.", { id: toastId });
            }
        } catch (err) {
            console.error("OCR error:", err);
            setStatus("error");
            toast.error("OCR failed. Please try again.", { id: toastId });
        }
    };

    const handleReset = () => {
        setResult(null);
        setStatus("idle");
        router.push("/ocr-pdf");
    };

    const handleForceRun = async () => {
        if (!file) return;
        setForce(true);
        setStatus("processing");
        const toastId = toast.loading("Re-running OCR, please wait...");
        try {
            const res = await ocrPdf(file, language, true);
            setResult(res);
            downloadBlob(res.blob, res.filename);
            setStatus("success");
            toast.success("OCR complete! Your file is downloading.", { id: toastId });
        } catch (err) {
            console.error("Force OCR error:", err);
            setStatus("error");
            toast.error("OCR failed. Please try again.", { id: toastId });
        }
    };

    if (!file) {
        return (
            <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <IconLoader2 size={36} className="animate-spin text-brand-teal" />
                        <p className="text-neutral-500 text-sm font-medium">Loading document...</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 w-full py-16 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center gap-6 w-full max-w-lg"
                >
                    {/* ── SUCCESS STATE ── */}
                    {status === "success" ? (
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[#E0DED9] w-full flex flex-col items-center gap-6">
                            <span className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
                                <IconCheck size={40} stroke={2.5} />
                            </span>
                            <div>
                                <h1 className="text-2xl font-bold text-brand-dark">OCR Complete!</h1>
                                <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
                                    Your searchable PDF has been downloaded. The text is now selectable and the visual appearance is unchanged.
                                </p>
                            </div>
                            <button
                                onClick={handleReset}
                                className="w-full py-4 rounded-xl text-white font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98] text-sm bg-brand-teal hover:bg-[#036649]"
                            >
                                OCR Another File
                            </button>
                        </div>
                    ) : status === "already_text" && result ? (
                        /* ── ALREADY HAS TEXT STATE ── */
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[#E0DED9] w-full flex flex-col items-center gap-6">
                            <span className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#fef3c7] text-[#d97706] border border-[#fde68a]">
                                <IconInfoCircle size={40} stroke={2} />
                            </span>
                            <div>
                                <h1 className="text-2xl font-bold text-brand-dark">PDF Already Has Text!</h1>
                                <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
                                    This PDF already contains selectable text layers. You can force re-OCR if the existing text is garbled.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <button
                                    onClick={handleForceRun}
                                    className="flex-1 py-3.5 rounded-xl text-white font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 text-sm bg-brand-teal hover:bg-[#036649]"
                                >
                                    <IconRefresh size={16} />
                                    Force Re-OCR
                                </button>
                                <button
                                    onClick={handleReset}
                                    className="flex-1 py-3.5 rounded-xl bg-white text-brand-dark font-semibold border border-[#E0DED9] hover:bg-[#FAF9F7] transition-all cursor-pointer shadow-2xs active:scale-[0.98] text-sm"
                                >
                                    New File
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* ── IDLE / PROCESSING / ERROR STATE ── */
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[#E0DED9] w-full flex flex-col items-center gap-6">
                            <span className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
                                {status === "processing" ? (
                                    <IconLoader2 size={40} className="animate-spin text-brand-teal" />
                                ) : status === "error" ? (
                                    <IconAlertTriangle size={40} className="text-red-500" />
                                ) : (
                                    <IconScan size={40} stroke={1.5} className="text-brand-teal" />
                                )}
                            </span>

                            <div>
                                <h1 className="text-2xl font-bold text-brand-dark">
                                    {status === "processing"
                                        ? "Running OCR..."
                                        : status === "error"
                                            ? "OCR Failed"
                                            : "Run OCR Recognition"}
                                </h1>
                                <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
                                    {status === "error"
                                        ? "Something went wrong. Please try again or check the file."
                                        : "Extract text from scanned PDF pages and create selectable, searchable documents."}
                                </p>
                            </div>

                            {/* File Info */}
                            <div className="w-full flex flex-col gap-2 text-left p-4 bg-[#FAFAF9] border border-[#E0DED9] rounded-2xl">
                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-0.5">
                                    Source File
                                </p>
                                <div className="flex gap-3 items-center w-full">
                                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[#fee2e2] text-[#dc2626] border border-[#fecaca]">
                                        <IconFileTypePdf size={20} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-bold truncate text-brand-dark">{file.name}</p>
                                        <p className="text-xs text-neutral-500 mt-0.5">
                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                            {pageCount !== null && ` · ${pageCount} page${pageCount === 1 ? "" : "s"}`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Language Picker */}
                            <div className="w-full text-left">
                                <label
                                    htmlFor="ocr-language"
                                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2"
                                >
                                    <IconLanguage size={14} />
                                    Document Language
                                </label>
                                <select
                                    id="ocr-language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    disabled={status === "processing"}
                                    className="w-full px-4 py-3 rounded-xl border border-[#E0DED9] bg-white text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-teal cursor-pointer disabled:opacity-50 transition-all"
                                >
                                    {LANGUAGES.map((l) => (
                                        <option key={l.value} value={l.value}>{l.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full mt-1">
                                <button
                                    onClick={() => router.push("/ocr-pdf")}
                                    disabled={status === "processing"}
                                    className="flex-1 py-3.5 rounded-xl bg-white text-brand-dark font-semibold border border-[#E0DED9] hover:bg-[#FAF9F7] transition-all cursor-pointer shadow-2xs active:scale-[0.98] text-sm disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleRun}
                                    disabled={status === "processing"}
                                    className="flex-1 py-3.5 rounded-xl text-white font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 text-sm disabled:opacity-70 bg-brand-teal hover:bg-[#036649]"
                                >
                                    {status === "processing" ? (
                                        <>
                                            <IconLoader2 size={17} className="animate-spin" />
                                            Processing...
                                        </>
                                    ) : status === "error" ? (
                                        <>
                                            <IconRefresh size={17} />
                                            Try Again
                                        </>
                                    ) : (
                                        <>
                                            <IconScan size={17} />
                                            Run OCR
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
