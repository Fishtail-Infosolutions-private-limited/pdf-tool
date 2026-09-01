import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompressPdfClient from "./CompressPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconLayersSubtract,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconMail,
    IconDeviceFloppy,
    IconFileDescription,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconPencil,
    IconCheck,
    IconUserCheck,
    IconTrendingDown,
    IconTrash,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Compress PDF Online Free – Reduce PDF File Size | PDF Maya",
    description:
        "Compress PDF files online for free while maintaining maximum visual quality. Reduce document MB size for email, web uploads, and storage with 100% privacy.",
    keywords: [
        "compress pdf",
        "reduce pdf file size",
        "shrink pdf size",
        "compress pdf to 1mb",
        "pdf compressor online free",
        "pdf size reducer",
        "compress pdf for email",
        "free online pdf compressor",
    ],
    alternates: {
        canonical: "/compress-pdf",
    },
    openGraph: {
        title: "Compress PDF Online Free – Reduce PDF File Size | PDF Maya",
        description:
            "Compress PDF files online for free while maintaining maximum visual quality. Reduce MB size for email and storage.",
        url: "/compress-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Compress PDF Online Free | PDF Maya",
        description:
            "Significantly reduce PDF file size without noticeable loss in text or image quality.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "1",
        title: "Upload Your PDF File",
        body: "Select your large PDF document from your device or drag and drop it into the compressor area above.",
    },
    {
        step: "2",
        title: "Choose Compression Level",
        body: "Select from Standard (Recommended), Extreme, or High Quality according to your file size requirements.",
    },
    {
        step: "3",
        title: "Download Compressed PDF",
        body: "Your optimized PDF is generated instantly. Download and check how many MBs you saved with zero quality degradation.",
    },
];

const FEATURES = [
    {
        icon: IconTrendingDown,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "Up to 90% File Size Reduction",
        body: "Removes duplicate font structures, flattens unused layers, and compresses heavy graphics down to lightweight sizes.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "Crisp Text & Vector Preservation",
        body: "Intelligent resampling ensures high-DPI text, vector blueprints, charts, and logos remain clear and readable.",
    },
    {
        icon: IconMail,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Email & Web Portal Optimized",
        body: "Easily meet strict 5MB, 10MB, or 25MB attachment limits on Gmail, Outlook, Yahoo, and government portals.",
    },
    {
        icon: IconLayersSubtract,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "100% Free with No Watermarks",
        body: "Compress your PDF documents with zero fees, no registration, no advertisements, and no watermarks.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "Encrypted & Automatically Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed in private memory and deleted immediately.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Runs on Any Device",
        body: "Compress large e-books, scan bundles, and corporate manuals directly in your browser on Mac, Windows, iOS, and Android.",
    },
];

const USE_CASES = [
    {
        icon: IconMail,
        title: "Email Attachments & Inboxes",
        desc: "Avoid bounced emails by reducing oversized PDF attachments below standard 20MB and 25MB gateway thresholds.",
    },
    {
        icon: IconFileDescription,
        title: "Job Applications & Visa Portals",
        desc: "Comply with tight 1MB or 2MB resume and document upload limits on government visa, university, and job portals.",
    },
    {
        icon: IconDeviceFloppy,
        title: "Cloud & Mobile Storage Savings",
        desc: "Free up gigabytes of storage space on your Google Drive, Dropbox, iCloud, and phone storage by compressing archives.",
    },
    {
        icon: IconTrendingDown,
        title: "Client Pitch Handouts & Catalogs",
        desc: "Send snappy, lightweight digital brochures that download in milliseconds on client smartphones and tablets.",
    },
];

const FAQS = [
    {
        q: "How do I reduce the file size of a PDF for free?",
        a: "Upload your PDF into the compressor above, choose your preferred compression level (Standard, Extreme, or High Quality), and click 'Compress PDF'. Your compressed file will download instantly.",
    },
    {
        q: "Will compressing a PDF make text blurry or unreadable?",
        a: "No. PDF Maya optimizes image data and removes redundant metadata while keeping font vectors and text characters razor sharp.",
    },
    {
        q: "How much file size can I expect to save?",
        a: "Depending on the original file structure (image-heavy vs text-heavy), file size reduction typically ranges from 40% to over 90%.",
    },
    {
        q: "Are my confidential files secure during compression?",
        a: "Yes. All file uploads and downloads are encrypted via HTTPS. Files are processed on isolated sandboxes and automatically deleted right after compression.",
    },
    {
        q: "Can I compress password-protected PDF files?",
        a: "You must first unlock password-protected files using our Unlock PDF tool before optimizing and compressing their file size.",
    },
    {
        q: "Is there any software installation required?",
        a: "No. PDF Maya works 100% online in your web browser without downloading desktop software or plugins.",
    },
];

const RELATED_TOOLS = [
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Split PDF", href: "/split-pdf", desc: "Extract specific pages or page ranges from a PDF.", icon: IconArrowsJoin2 },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract PDF tables into editable Excel sheets.", icon: IconTable },
    { label: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages to high-resolution images.", icon: IconPhoto },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function CompressPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Compress PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/compress-pdf",
        description: "Compress PDF files online for free while maintaining maximum visual quality.",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
    };

    const jsonLdHowTo = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Compress PDF Files Online",
        description: "Step-by-step guide to reducing PDF file sizes with PDF Maya.",
        step: HOW_TO_STEPS.map((s, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: s.title,
            text: s.body,
        })),
    };

    const jsonLdFaq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
            },
        })),
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
            />

            <Navbar />

            {/* ═══════════════════════════════════════════════
                HERO AREA: Header & Full-Width Upload Section
                (Preserved intact)
            ═══════════════════════════════════════════════ */}
            <header className="pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-8 border-b border-[#E0DED9] bg-[#FAFAF9]">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Format Badge */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DED9] shadow-2xs mb-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-teal">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f4ef]">
                                <IconLayersSubtract size={13} stroke={2.5} />
                            </span>
                            <span>Document Optimization</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Compress PDF Online Free
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Reduce PDF file size significantly while retaining maximum visual clarity. Fast, free, and completely secure.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <CompressPdfClient />
                    </div>
                </div>
            </header>

            {/* ═══════════════════════════════════════════════
                REFINED CONTENT SECTIONS (Clean, Modern, Open UI)
            ═══════════════════════════════════════════════ */}
            <main className="flex-1">
                {/* ── SECTION 1: How to Convert (Centered 1, 2, 3 Steps) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                How to Compress PDF Files
                            </h2>
                            <p className="text-base text-neutral-600">
                                Shrink PDF document size in 3 simple steps.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                            {HOW_TO_STEPS.map((item) => (
                                <div key={item.step} className="flex flex-col items-center text-center space-y-4">
                                    <span className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9] flex items-center justify-center font-extrabold text-brand-dark text-lg shadow-2xs">
                                        {item.step}
                                    </span>
                                    <h3 className="text-lg font-bold text-brand-dark">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                                        {item.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 2: Feature Matrix (Refined 6-Item Grid, Centered) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-[#FAFAF9] border-b border-[#E0DED9]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                The Best PDF Compressor Online
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Reduce file size smartly by stripping redundant stream objects while preserving text sharpness and high-res media.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                            {FEATURES.map((feature, idx) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <div key={idx} className="flex flex-col items-center text-center space-y-3.5">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color}`}>
                                            <FeatureIcon size={26} stroke={2} />
                                        </div>
                                        <h3 className="text-lg font-bold text-brand-dark">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {feature.body}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 3: Deep-Dive Technical Fidelity (Visual Breakdown) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Advanced Compression &amp; Maximum Visual Fidelity
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya applies intelligent algorithms to shrink file footprint without compromising read quality.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Smart Image Downsampling &amp; Deflation
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Heavy photos and bitmap assets are re-encoded with modern compression, reducing dimensions without introducing visual artifacts.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Redundant Metadata &amp; Font Subsetting
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Strips unused embedded font glyphs, duplicate color profiles, and orphaned objects to maximize byte savings.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Vector &amp; Typography Clarity
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Text character outlines, SVG charts, and vector diagrams remain crisp at any zoom level, ensuring professional print and screen readability.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Fast Multi-Megabyte Processing
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Compress massive 100MB+ document scans, financial presentations, and catalogs in seconds without browser timeouts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SECTION 4: Everyday Use Cases (Clean 4-Column Open Flow) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-[#FAFAF9] border-b border-[#E0DED9]">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Practical PDF Compression Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Accelerate everyday document transmission across personal, academic, and business workflows.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            {USE_CASES.map((uc, idx) => {
                                const UcIcon = uc.icon;
                                return (
                                    <div key={idx} className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-[#E0DED9] flex items-center justify-center text-brand-dark shrink-0 shadow-2xs">
                                                <UcIcon size={20} stroke={2} />
                                            </div>
                                            <h3 className="text-base font-bold text-brand-dark">
                                                {uc.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-neutral-600 leading-relaxed pl-13">
                                            {uc.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 5: Privacy & Security Trust Strip (Refined & Centered) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Your Documents Stay Private &amp; Secure
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                We prioritize document confidentiality and data security at every stage of the process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#e6f4ea] text-[#107C41] border border-[#bfe4cd] flex items-center justify-center shadow-2xs">
                                    <IconShieldLock size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">256-Bit SSL/TLS</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    All transmissions are secured with end-to-end HTTPS encryption.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#fee2e2] text-[#dc2626] border border-[#fecaca] flex items-center justify-center shadow-2xs">
                                    <IconTrash size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">Instant File Deletion</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    Uploaded PDFs and compressed files are purged automatically from memory.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5] flex items-center justify-center shadow-2xs">
                                    <IconUserCheck size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">No Account Needed</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    Compress unlimited files without registration, emails, or paywalls.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#e0ecfc] text-[#185ABD] border border-[#c0daf8] flex items-center justify-center shadow-2xs">
                                    <IconDeviceLaptop size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">Universal Support</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    Works seamlessly in any browser on macOS, Windows, iOS, and Android.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SECTION 6: Frequently Asked Questions ──
                    (Preserved intact as requested) */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3] border-b border-[#E0DED9]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg">
                                Everything you need to know about compressing PDF files.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            {FAQS.map((faq) => (
                                <details
                                    key={faq.q}
                                    className="group border border-[#E0DED9] rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
                                >
                                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-bold text-brand-dark text-sm sm:text-base hover:bg-[#FAF9F7] transition-colors select-none">
                                        <span className="pr-4 leading-snug">{faq.q}</span>
                                        <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#f0ede4] text-brand-dark group-open:rotate-45 transition-transform duration-200">
                                            <IconPlus size={14} stroke={2.5} />
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-5 pt-3 text-sm text-neutral-600 leading-relaxed border-t border-[#E0DED9] bg-[#FAF9F7]">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 7: Explore More PDF Tools ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Explore More PDF Tools
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg">
                                Everything you need to convert, organize, and edit documents in one place.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {RELATED_TOOLS.map((tool) => {
                                const ToolIcon = tool.icon;
                                return (
                                    <Link
                                        key={tool.label}
                                        href={tool.href}
                                        className="group relative flex items-start gap-4 p-5 rounded-2xl bg-[#FAFAF9] border border-[#E0DED9] hover:bg-white hover:border-brand-teal hover:shadow-xs transition-all duration-200"
                                    >
                                        <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]/60 group-hover:scale-105 transition-transform duration-200">
                                            <ToolIcon size={22} stroke={1.8} />
                                        </div>
                                        <div className="flex-1 min-w-0 pr-3">
                                            <h3 className="font-bold text-base text-brand-dark group-hover:text-brand-teal transition-colors truncate">
                                                {tool.label}
                                            </h3>
                                            <p className="text-xs text-neutral-500 mt-1 leading-relaxed line-clamp-2">
                                                {tool.desc}
                                            </p>
                                        </div>
                                        <span className="shrink-0 text-neutral-300 group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5">
                                            <IconArrowUpRight size={17} />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
