"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/ui/file-upload";
import FileStore from "@/lib/file-store";
import {
  IconArrowRight,
  IconShieldCheck,
  IconBolt,
  IconCloud,
} from "@tabler/icons-react";
import { motion } from "motion/react";

const BADGES = [
  { icon: IconShieldCheck, label: "100% Secure" },
  { icon: IconBolt, label: "Lightning Fast" },
  { icon: IconCloud, label: "No Installation" },
];

export default function Hero() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileSelection = (newFiles: File[]) => {
    if (newFiles.length === 0) return;
    const file = newFiles[0];
    setFiles([file]);
    FileStore.clearFile("edit_pdf_main");
    FileStore.setFile("edit_pdf_main", file);
    router.push("/edit-pdf");
  };

  const handleStartWithBlankPage = () => {
    FileStore.clearFile("edit_pdf_main");
    sessionStorage.setItem("edit_pdf_blank", "true");
    router.push("/edit-pdf");
  };

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden pt-16 md:pt-18 border-b border-[#E0DED9] bg-[#FAFAF9]"
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full pt-6 sm:pt-10 md:pt-16 pb-14 sm:pb-18 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ── LEFT COLUMN (Headline & Content) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 flex flex-col gap-5 sm:gap-6"
          >
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-brand-dark">
              Free Online PDF Converter, Editor &amp; PDF Tools
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Work with your documents faster using PDF Maya, an all-in-one pdf
              converter, pdf editor, and online pdf tool suite. Convert, edit,
              merge, split, compress, organize, sign, and secure PDF files
              directly in your browser.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed -mt-2">
              Convert files between PDF and popular formats, edit existing
              documents, or choose a specialized PDF tool for the task you need
              to complete. No software installation required.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-1">
              {BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-brand-dark"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#e6f4ef] text-brand-teal">
                    <Icon size={16} stroke={2} />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#services"
                id="hero-cta-primary"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-teal text-white font-semibold text-sm hover:bg-[#036649] transition-all shadow-sm cursor-pointer active:scale-[0.98]"
              >
                Explore All Tools
                <IconArrowRight size={16} />
              </a>
            </div>

          </motion.div>

          {/* ── RIGHT COLUMN – File Uploader ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            id="upload"
            className="order-1 lg:order-2 relative"
          >
            {/* Card wrapper */}
            <div className="relative rounded-2xl border border-[#E0DED9] bg-white shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E0DED9] bg-[#FAF9F7]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FFC7C7]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFE6B3]" />
                  <span className="w-3 h-3 rounded-full bg-[#C7EACF]" />
                </div>
                <span className="text-xs font-semibold text-neutral-600 ml-2">
                  Start Editing your PDF
                </span>
              </div>

              {/* Uploader */}
              <div className="p-6">
                <FileUpload
                  accept={{ "application/pdf": [".pdf"] }}
                  multiple={false}
                  files={files}
                  setFiles={setFiles}
                  onChange={handleFileSelection}
                  title="Edit your PDF"
                  description="Drop PDF here or click to start editing"
                />
              </div>

              {/* Card Footer for Blank Page */}
              <div
                onClick={handleStartWithBlankPage}
                className="flex items-center justify-center gap-2 px-5 py-3.5 border-t border-[#E0DED9] bg-[#FAF9F7] cursor-pointer hover:bg-[#F2F0E9] transition-colors"
              >
                <span className="text-xs font-semibold text-brand-teal hover:underline">
                  + Start with a blank page
                </span>
              </div>
            </div>

            {/* Floating stats chips */}
            <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white rounded-xl shadow-md border border-[#E0DED9] text-xs font-semibold text-brand-dark">
              <span className="text-brand-teal text-sm font-bold">30+</span>
              PDF Tools
            </div>
            <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white rounded-xl shadow-md border border-[#E0DED9] text-xs font-semibold text-brand-dark">
              <span className="text-brand-teal text-sm font-bold">
                No Sign-up
              </span>
              Required
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
