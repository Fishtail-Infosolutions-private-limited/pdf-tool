"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
    IconPencil,
    IconArrowsRightLeft,
    IconUsers,
    IconSchool,
    IconUser,
    IconArrowRight,
    IconPlus,
    IconMinus,
    IconUpload,
    IconSettings,
    IconDownload,
    IconFileWord,
    IconFileArrowRight,
    IconStack,
    IconLayersSubtract,
} from "@tabler/icons-react";

// ─────────────────────────────────────────────────────────────
// DATA (SEO TEAM CONTENT)
// ─────────────────────────────────────────────────────────────

const CAPABILITIES = [
    {
        title: "PDF Converter",
        description:
            "Convert documents between PDF and popular file formats with a fast, browser-based pdf converter. Turn PDFs into editable documents or convert Word, Excel, PowerPoint, and images into PDF files.",
        icon: IconArrowsRightLeft,
        accent: "#047C58",
        bg: "#e6f4ef",
        tools: [
            { label: "PDF to Word", href: "/pdf-to-word" },
            { label: "Word to PDF", href: "/word-to-pdf" },
            { label: "PDF to JPG", href: "/pdf-to-jpg" },
            { label: "JPG to PDF", href: "/jpg-to-pdf" },
            { label: "PPT to PDF", href: "/pptx-to-pdf" },
        ],
    },
    {
        title: "PDF Editor",
        description:
            "Make changes to your documents directly in your browser with a simple pdf editor. Add text, images, shapes, annotations, page numbers, and other elements without rebuilding the original document.",
        icon: IconPencil,
        accent: "#047C58",
        bg: "#e6f4ef",
        tools: [
            { label: "Edit PDF", href: "/edit-pdf" },
            { label: "Rotate PDF", href: "/rotate-pdf" },
            { label: "Crop PDF", href: "/crop-pdf" },
            { label: "Page Numbers", href: "/page-number-pdf" },
        ],
    },
    {
        title: "PDF Tools for Every Document Task",
        description:
            "Find the right pdf tool for everyday document work. Merge files, split documents, extract pages, compress PDFs, repair damaged files, run OCR, and organize pages from one online workspace.",
        icon: IconStack,
        accent: "#047C58",
        bg: "#e6f4ef",
        tools: [
            { label: "Merge PDF", href: "/merge-pdf" },
            { label: "Split PDF", href: "/split-pdf" },
            { label: "Compress PDF", href: "/compress-pdf" },
            { label: "OCR PDF", href: "/ocr-pdf" },
        ],
    },
    {
        title: "Convert Files to PDF",
        description:
            "Turn everyday documents and images into PDF files while keeping your workflow simple. Convert Word documents, spreadsheets, presentations, and images into a format that is easy to share, store, and submit.",
        icon: IconFileArrowRight,
        accent: "#047C58",
        bg: "#e6f4ef",
        tools: [
            { label: "Word to PDF", href: "/word-to-pdf" },
            { label: "Excel to PDF", href: "/excel-to-pdf" },
            { label: "PowerPoint to PDF", href: "/pptx-to-pdf" },
            { label: "Image to PDF", href: "/jpg-to-pdf" },
        ],
    },
    {
        title: "Convert PDF to Other Formats",
        description:
            "Need information from a PDF in another format? Convert your document into editable or shareable files depending on what you need to do next.",
        icon: IconFileWord,
        accent: "#047C58",
        bg: "#e6f4ef",
        tools: [
            { label: "PDF to Word", href: "/pdf-to-word" },
            { label: "PDF to JPG", href: "/pdf-to-jpg" },
            { label: "PDF to Excel", href: "/pdf-to-excel" },
            { label: "PDF to PPT", href: "/pdf-to-pptx" },
        ],
    },
    {
        title: "Compress and Organise PDFs",
        description:
            "Keep large documents easier to share and manage. Compress PDF files to reduce unnecessary file size, or organise pages by merging, splitting, extracting, removing, rotating, and rearranging them.",
        icon: IconLayersSubtract,
        accent: "#047C58",
        bg: "#e6f4ef",
        tools: [
            { label: "Compress PDF", href: "/compress-pdf" },
            { label: "Split PDF", href: "/split-pdf" },
        ],
    },
];

const USE_CASES = [
    {
        icon: IconUsers,
        label: "Professionals & Teams",
        accent: "#047C58",
        bg: "#e6f4ef",
        points: [
            "Adopt a single submission of contracts and annexures.",
            "Compress large scan bundles before sending to the client by e-mail.",
            "Sign documents electronically – without the need for printing or scanning.",
            "Properly redact client information in reports prior to external release of them.",
            "Rapidly convert PDF tables to Excel for Financial analysis.",
        ],
    },
    {
        icon: IconSchool,
        label: "Students & Educators",
        accent: "#8C886B",
        bg: "#f0ede4",
        points: [
            "OCR your scanned lecture notes so that they're searchable.",
            "Divide a PDF textbook to get the necessary chapters.",
            "Submit your essays and appendices in a single document.",
            "Convert research papers (maintaining layout)",
            "Put page numbers on portfolios prior to submission",
        ],
    },
    {
        icon: IconUser,
        label: "Individuals & Freelancers",
        accent: "#047C58",
        bg: "#e6f4ef",
        points: [
            "Edit a resume without having to have the original design file!",
            "Use a password to protect tax documents or personal records",
            "Sign Rental Agreement or Freelance Contracts From Your Phones!",
            "Reduce large PDFs to fit in an E-mail attachment.",
        ],
    },
];

const HOW_IT_WORKS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Step 1 – Pick Your Tool and Upload",
        body: "Select from our tools matrix – edit, merge, compress, convert, sign, and much more. Drag and drop your file or click to browse.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Step 2 – Adjust and Process",
        body: "Set any options appropriate to your job – page range, compression, output format, or signing. Then have our back end take care of the work. It usually takes just a few seconds to process.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Step 3 – Download Your Result",
        body: "Your processed file is now ready to download and go. Files are deleted automatically from our servers after your session, thus no files are stored on our side.",
    },
];

const FAQS = [
    {
        q: "What can I do with PDF Maya?",
        a: "PDF Maya brings together a wide range of online PDF utilities for different document workflows. You can use the platform for tasks such as changing document formats, managing pages, preparing files for sharing, and handling other common PDF requirements.",
    },
    {
        q: "Do Pdf Maya add watermarks to my files?",
        a: "That's correct, PDF Maya doesn't put any watermarks on your output documents and they remain clean and professional.",
    },
    {
        q: "Do I need to install software to use PDF Maya?",
        a: "No. PDF Maya is designed to work directly in your web browser, so you can access its online tools without installing a separate desktop application.",
    },
    {
        q: "Can I use PDF Maya on a mobile phone?",
        a: "Yes. PDF Maya can be accessed through a modern mobile web browser, allowing you to work with documents when you are away from your computer.",
    },
    {
        q: "Does PDF Maya support image files?",
        a: "Yes. Several PDF workflows can involve image files, making it possible to work between PDFs and common image formats when preparing documents for different purposes.",
    },
    {
        q: "Can PDF Maya help with large PDF files?",
        a: "Yes. PDF Maya includes tools designed for working with documents of different sizes and for handling common file-management requirements. The available options depend on the particular task and file.",
    },
    {
        q: "Is PDF Maya free?",
        a: "Yes, most of our tools are totally free and have no limits, the PDF Editor has a limit of 3 edits per hour not logged in and 10 edits per hour logged in, but with .edu email, students and educators can unlock editor access.",
    },
    {
        q: "Do I need to create an account?",
        a: "NO - Most of our tools do not require you to register, only to increase your editor limits.",
    },
    {
        q: "Do my files get lost or are they compromised?",
        a: "Yes, all your files are treated securely, automatically deleted as soon as you finish your task, and we don't read, store, or share any of your files.",
    },
    {
        q: "Is PDF Maya compatible with mobile?",
        a: "Yes. PDF Maya is browser based and available on any device – Mac, Windows, Linux, iPhone, and Android.",
    },
];

// ─────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className="border border-[#E0DED9] rounded-2xl overflow-hidden bg-white shadow-2xs"
        >
            <button
                id={`faq-${index}`}
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#FAF9F7] transition-colors cursor-pointer"
            >
                <span className="font-bold text-brand-dark text-sm md:text-base pr-4 leading-snug">{q}</span>
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#f0ede4] text-brand-dark">
                    {open ? <IconMinus size={14} stroke={2.5} /> : <IconPlus size={14} stroke={2.5} />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-[#E0DED9] pt-4 bg-[#FAF9F7]">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function HomeContent() {
    return (
        <>
            {/* ═══════════════════════════════════════════════
                SECTION 1 - What Can You Do with a Free Online PDF Tool?
            ═══════════════════════════════════════════════ */}
            <section id="capabilities" className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight tracking-tight">
                            What Can You Do with a Free Online PDF Tool?
                        </h2>
                        <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
                            PDF Maya is an all-in-one online PDF Editor &amp; Converter that handles almost every PDF task you can think of whether you’re a professional, student, freelancer or other. Our tools make working with PDFs simple and effective.
                        </p>
                    </motion.div>

                    {/* 6 Capabilities Cards Grid (Clean, Minimal & Modern) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {CAPABILITIES.map((cap, i) => {
                            const Icon = cap.icon;
                            return (
                                <motion.div
                                    key={cap.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="flex flex-col justify-between p-7 md:p-8 rounded-2xl border border-[#E0DED9] bg-[#FAFAF9] hover:bg-white hover:border-brand-teal/60 hover:shadow-md transition-all duration-200"
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e6f4ef] text-brand-teal"
                                            >
                                                <Icon size={20} stroke={2} />
                                            </span>
                                            <h3 className="text-lg font-bold text-brand-dark tracking-tight">
                                                {cap.title}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>

                                    {/* Direct Tool Links */}
                                    <div className="mt-6 pt-5 border-t border-[#E0DED9]">
                                        <div className="flex flex-wrap gap-2">
                                            {cap.tools.map((tool) => (
                                                <Link
                                                    key={tool.label}
                                                    href={tool.href}
                                                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#E0DED9] text-brand-dark hover:border-brand-teal hover:text-brand-teal hover:shadow-2xs transition-all"
                                                >
                                                    {tool.label}
                                                    <IconArrowRight size={11} className="opacity-40" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 2 - How it works
            ═══════════════════════════════════════════════ */}
            <section id="how-it-works" className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3] border-b border-[#E0DED9]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                            How It Works
                        </h2>
                        <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-md mx-auto">
                            Working with PDF Maya is easy. To get started, take the following three steps:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {HOW_IT_WORKS.map((step, i) => {
                            const SIcon = step.icon;
                            return (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl border border-[#E0DED9] shadow-2xs"
                                >
                                    <div className="relative">
                                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e6f4ef] border border-[#bce0d5] text-brand-teal">
                                            <SIcon size={28} stroke={1.8} />
                                        </span>
                                        <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-white text-[10px] font-bold">
                                            {step.step}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-brand-dark text-lg">{step.title}</h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{step.body}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 3 - Who uses PDF Maya
            ═══════════════════════════════════════════════ */}
            <section id="use-cases" className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                            Who Uses This Free Online PDF Tool?
                        </h2>
                        <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-xl mx-auto">
                            PDF Maya is developed to serve real people, real workflows. Use of our tools, by whom and how:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {USE_CASES.map((uc, i) => {
                            const UCIcon = uc.icon;
                            return (
                                <motion.div
                                    key={uc.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="bg-[#FAFAF9] rounded-2xl border border-[#E0DED9] p-7 flex flex-col gap-5 shadow-2xs"
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="flex items-center justify-center w-10 h-10 rounded-xl"
                                            style={{ background: uc.bg, color: uc.accent }}
                                        >
                                            <UCIcon size={20} stroke={1.8} />
                                        </span>
                                        <h3 className="font-bold text-brand-dark text-lg">{uc.label}</h3>
                                    </div>
                                    <ul className="flex flex-col gap-2.5">
                                        {uc.points.map((point) => (
                                            <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-600 leading-relaxed">
                                                <span
                                                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                                    style={{ background: uc.accent }}
                                                />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 4 - Frequently Asked Questions (FAQs)
            ═══════════════════════════════════════════════ */}
            <section id="faq" className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3]">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold 
                        
                        text-brand-dark">
                            Frequently Asked Questions(FAQs)
                        </h2>
                        <p className="mt-3 text-neutral-600 text-base sm:text-lg">
                            Straight answers, no marketing fluff.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-3">
                        {FAQS.map((faq, i) => (
                            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
