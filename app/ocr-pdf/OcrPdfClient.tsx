"use client";
import React, { useState } from "react";
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
  IconInfoCircle,
  IconAlertCircle,
  IconLanguage,
} from "@tabler/icons-react";
import { ocrPdf, downloadBlob, OcrResult } from "@/lib/pdf-utils";
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

type Status = "idle" | "processing" | "already_text" | "success" | "error";

export default function OcrPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [language, setLanguage] = useState("eng");
  const [result, setResult] = useState<OcrResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setStatus("idle");
      setResult(null);
      setErrorMessage(null);
    }
  };

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    noClick: !!file,
  });

  const handleRunOcr = async (forceReOcr = false) => {
    if (!file) return;
    setStatus("processing");
    setErrorMessage(null);
    const toastId = toast.loading(
      forceReOcr
        ? "Re-running OCR on all pages..."
        : "Running OCR text recognition...",
    );

    try {
      const res = await ocrPdf(file, language, forceReOcr);
      setResult(res);

      if (res.alreadyHadText && !forceReOcr) {
        setStatus("already_text");
        toast.success("PDF already has selectable text!", { id: toastId });
      } else {
        downloadBlob(res.blob, res.filename || `ocr_${file.name}`);
        setStatus("success");
        toast.success("OCR complete! Your file is downloading.", {
          id: toastId,
        });
      }
    } catch (err: any) {
      console.error("OCR error:", err);
      setStatus("error");
      setErrorMessage(
        err?.message ||
          "OCR recognition failed. Please check your document and try again.",
      );
      toast.error("OCR failed. Please try again.", { id: toastId });
    }
  };

  const handleReset = () => {
    setFile(null);
    setStatus("idle");
    setResult(null);
    setErrorMessage(null);
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
        {/* ── 1. INITIAL UPLOAD DROPZONE ── */}
        {!file && (
          <div
            {...getRootProps()}
            className={`group flex flex-col items-center justify-center py-8 sm:py-10 px-6 sm:px-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center w-full ${
              isDragActive
                ? "border-brand-teal bg-[#e6f4ef]/60 scale-[1.003]"
                : "border-[#E0DED9] bg-[#FAFAF9] hover:border-brand-teal/70 hover:bg-[#FAF9F7]"
            }`}
          >
            <input {...getInputProps()} id="ocr-pdf-input" />

            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5] group-hover:scale-105 transition-transform">
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
              Extract text and convert non-selectable scans into searchable PDF
              (up to 50MB)
            </p>
          </div>
        )}

        {/* ── 2. FILE SELECTED & IDLE / READY TO RUN ── */}
        {file && status === "idle" && (
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
                    <span className="text-brand-teal font-semibold flex items-center gap-1">
                      <IconScan size={13} /> Ready for OCR
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

            {/* OCR Language Selection */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-[#FAFAF9] border border-[#E0DED9]">
              <div className="flex items-center gap-2">
                <IconLanguage size={18} className="text-brand-teal" />
                <span className="text-xs sm:text-sm font-bold text-brand-dark">
                  Recognition Language:
                </span>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-xs sm:text-sm font-semibold py-2 px-3 rounded-lg border border-[#E0DED9] bg-white text-brand-dark focus:outline-none focus:border-brand-teal cursor-pointer shadow-2xs"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              id="ocr-pdf-action-btn"
              type="button"
              onClick={() => handleRunOcr(false)}
              className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-brand-teal hover:bg-[#036649] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.99]"
            >
              <IconScan size={20} />
              <span>Run OCR</span>
              <IconArrowRight size={18} />
            </button>
          </div>
        )}

        {/* ── 3. PROCESSING STATE ── */}
        {status === "processing" && (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
              <IconLoader2 size={36} className="animate-spin" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand-dark">
                Running OCR Text Recognition…
              </h2>
              <p className="text-neutral-500 text-sm mt-1">
                Scanning document pages and embedding searchable text layers.
              </p>
            </div>
          </div>
        )}

        {/* ── 4. ALREADY HAS TEXT STATE ── */}
        {status === "already_text" && (
          <div className="flex flex-col items-center justify-center py-6 text-center max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-200">
            <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fef3c7] text-[#d97706] mb-4 border border-[#fde68a]">
              <IconInfoCircle size={36} stroke={2} />
            </span>

            <h2 className="text-2xl font-bold text-brand-dark">
              PDF Already Has Text!
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base leading-relaxed">
              This PDF already contains selectable text layers. You can force
              re-OCR if the existing text is garbled.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mt-6 w-full">
              <button
                type="button"
                onClick={() => handleRunOcr(true)}
                className="flex-1 py-3.5 px-5 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.98]"
              >
                <IconRefresh size={17} />
                <span>Force Re-OCR</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>New File</span>
              </button>
            </div>
          </div>
        )}

        {/* ── 5. SUCCESS STATE ── */}
        {status === "success" && (
          <div className="flex flex-col items-center justify-center py-6 text-center max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-200">
            <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e6f4ef] text-brand-teal mb-4 border border-[#bce0d5]">
              <IconCheck size={36} stroke={2.5} />
            </span>

            <h2 className="text-2xl font-bold text-brand-dark">
              OCR Complete!
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base leading-relaxed">
              Your searchable PDF has been downloaded. The text is now
              selectable and the visual appearance is unchanged.
            </p>

            <div className="mt-6 w-full">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer mx-auto active:scale-[0.98]"
              >
                <IconRefresh size={17} />
                <span>OCR Another File</span>
              </button>
            </div>
          </div>
        )}

        {/* ── 6. ERROR STATE ── */}
        {status === "error" && (
          <div className="flex flex-col items-center justify-center py-6 text-center max-w-lg mx-auto animate-in fade-in duration-200">
            <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fee2e2] text-[#dc2626] mb-4 border border-[#fecaca]">
              <IconAlertCircle size={36} stroke={2} />
            </span>

            <h2 className="text-2xl font-bold text-brand-dark">OCR Failed</h2>
            <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
              {errorMessage ||
                "Unable to process text recognition on this PDF file."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mt-6 w-full">
              <button
                type="button"
                onClick={() => handleRunOcr(false)}
                className="flex-1 py-3.5 px-5 rounded-xl bg-brand-teal hover:bg-[#036649] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <IconRefresh size={17} />
                <span>Try Again</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF9F7] text-brand-dark border border-[#E0DED9] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>New File</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
