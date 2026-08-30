"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
    IconLock,
    IconLoader2,
    IconCheck,
    IconDownload,
    IconRefresh,
    IconUpload,
    IconFileTypePdf,
    IconX,
    IconArrowRight,
    IconEye,
    IconEyeOff,
    IconShieldLock,
} from "@tabler/icons-react";
import { protectPdf, downloadBlob } from "@/lib/pdf-utils";
import toast from "react-hot-toast";

export default function ProtectPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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

    const handleProtect = async () => {
        if (!file) return;
        if (!password.trim()) {
            toast.error("Please enter a password to encrypt this PDF.");
            return;
        }

        setIsProcessing(true);
        setSuccess(false);

        const toastId = toast.loading("Encrypting PDF with 256-bit AES encryption...");

        try {
            const res = await protectPdf(file, password);
            const newName = res.filename || `protected_${file.name}`;
            downloadBlob(res.blob, newName);
            setDownloadInfo({ blob: res.blob, fileName: newName });
            setSuccess(true);
            toast.success("PDF encrypted successfully!", { id: toastId });
        } catch (err: any) {
            const isDev = process.env.NODE_ENV === "development";
            if (isDev) console.error(err);

            const rawMsg = err?.message || "Unknown error";
            toast.error(isDev ? `Error: ${rawMsg}` : "Failed to encrypt PDF.", { id: toastId });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDownloadAgain = () => {
        if (downloadInfo) {
            downloadBlob(downloadInfo.blob, downloadInfo.fileName);
            toast.success("Downloading protected PDF...");
        }
    };

    const handleReset = () => {
        setFile(null);
        setPassword("");
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
                                <input {...getInputProps()} id="protect-pdf-input" />

                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fee2e2] text-[#dc2626] mb-4 border border-[#fecaca] group-hover:scale-105 transition-transform">
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
                                    Adds military-grade AES encryption and password security (up to 100MB)
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
                                                <span className="text-[#dc2626] font-semibold flex items-center gap-1">
                                                    <IconShieldLock size={13} /> Security Mode
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

                                {/* Password Input */}
                                <div className="flex flex-col gap-1.5 text-left">
                                    <label htmlFor="protect-password-input" className="text-xs font-bold text-brand-dark">
                                        Set Document Password:
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="protect-password-input"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleProtect()}
                                            placeholder="Enter strong password…"
                                            className="w-full pl-4 pr-11 py-3 border border-[#E0DED9] rounded-xl text-sm focus:outline-none focus:border-brand-teal bg-[#FAFAF9]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                                        >
                                            {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                                        </button>
                                    </div>
                                    <p className="text-[11px] text-neutral-500">
                                        Anyone opening this PDF will be prompted to enter this password.
                                    </p>
                                </div>

                                <button
                                    id="protect-pdf-action-btn"
                                    type="button"
                                    onClick={handleProtect}
                                    disabled={isProcessing || !password.trim()}
                                    className={`w-full py-3.5 px-8 rounded-xl font-bold text-base text-white transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99] cursor-pointer ${
                                        isProcessing || !password.trim()
                                            ? "bg-[#dc2626] opacity-70 cursor-wait"
                                            : "bg-[#dc2626] hover:bg-[#b91c1c] hover:shadow-md"
                                    }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <IconLoader2 className="animate-spin" size={20} />
                                            <span>Encrypting PDF…</span>
                                        </>
                                    ) : (
                                        <>
                                            <IconLock size={20} />
                                            <span>Encrypt &amp; Protect PDF</span>
                                            <IconArrowRight size={17} className="opacity-70 ml-1" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-200">
                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fee2e2] text-[#dc2626] mb-4 border border-[#fecaca]">
                            <IconCheck size={34} stroke={2.5} />
                        </span>

                        <h2 className="text-2xl font-bold text-brand-dark">PDF Successfully Encrypted!</h2>
                        <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-lg">
                            Your PDF (<span className="font-semibold text-brand-dark">{downloadInfo?.fileName}</span>) is now locked with 256-bit AES password encryption.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6 w-full max-w-md">
                            <button
                                type="button"
                                onClick={handleDownloadAgain}
                                className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
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
                                <span>Protect Another</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
