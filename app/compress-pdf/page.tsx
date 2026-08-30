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
    IconUpload as IconWebUpload,
    IconDeviceFloppy,
    IconFileDescription,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconPencil,
    IconFileTypePdf,
    IconArrowRight,
    IconTrendingDown,
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
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF File",
        body: "Select your large PDF document from your device or drag and drop it into the compressor area above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Choose Compression Level",
        body: "Select from Standard (Recommended), Extreme, or High Quality according to your file size requirements.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Compressed PDF",
        body: "Your optimized PDF is generated instantly. Download and check how many MBs you saved with zero quality degradation.",
    },
];

const FEATURES = [
    {
        icon: IconTrendingDown,
        title: "Up to 90% File Size Reduction",
        body: "Removes duplicate font structures, flattens unused layers, and compresses heavy graphics down to lightweight sizes.",
    },
    {
        icon: IconSparkles,
        title: "Crisp Text & Vector Preservation",
        body: "Intelligent resampling ensures high-DPI text, vector blueprints, charts, and logos remain clear and readable.",
    },
    {
        icon: IconMail,
        title: "Email & Web Portal Optimized",
        body: "Easily meet strict 5MB, 10MB, or 25MB attachment limits on Gmail, Outlook, Yahoo, and government portals.",
    },
    {
        icon: IconLayersSubtract,
        title: "100% Free with No Watermarks",
        body: "Compress your PDF documents with zero fees, no registration, no advertisements, and no watermarks.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Automatically Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed in private memory and deleted immediately.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Runs on Any Device",
        body: "Compress large e-books, scan bundles, and corporate manuals directly in your browser on Mac, Windows, iOS, and Android.",
    },
];

const USE_CASES = [
    {
        icon: IconMail,
        title: "Email Attachments & Inboxes",
        body: "Avoid bounced emails by reducing oversized PDF attachments below standard 20MB and 25MB gateway thresholds.",
    },
    {
        icon: IconWebUpload,
        title: "Job Applications & Visa Portals",
        body: "Comply with tight 1MB or 2MB resume and document upload limits on government visa, university, and job portals.",
    },
    {
        icon: IconDeviceFloppy,
        title: "Cloud & Mobile Storage Savings",
        body: "Free up gigabytes of storage space on your Google Drive, Dropbox, iCloud, and phone storage by compressing archives.",
    },
    {
        icon: IconFileDescription,
        title: "Client Pitch Handouts & Catalogs",
        body: "Send snappy, lightweight digital brochures that download in milliseconds on client smartphones and tablets.",
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
        q: "How much can I reduce my PDF size?",
        a: "Depending on the number of images and graphics in your PDF, you can typically reduce file size by 50% to 90% using the recommended Standard preset.",
    },
    {
        q: "Are my uploaded PDF documents private and safe?",
        a: "Yes. All file transfers are secured with SSL/TLS encryption. Documents are processed in isolated sandbox environments and automatically deleted right after your session.",
    },
    {
        q: "Can I compress multiple files without paying?",
        a: "Yes. PDF Maya is completely free with no hidden charges, daily quotas, or subscriptions.",
    },
    {
        q: "Are any watermarks added to my compressed document?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your output PDF documents.",
    },
];

const RELATED_TOOLS = [
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Split PDF", href: "/split-pdf", desc: "Separate PDF pages or extract custom page ranges.", icon: IconLayersSubtract },
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
        description: "Step-by-step guide to reducing PDF file size with PDF Maya.",
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
            ═══════════════════════════════════════════════ */}
            <header className="pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-8 border-b border-[#E0DED9] bg-[#FAFAF9]">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Format Badge */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DED9] shadow-2xs mb-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#7c3aed]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#ede9fe]">
                                <IconLayersSubtract size={13} stroke={2.5} />
                            </span>
                            <span>Document Optimization</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Compress PDF File Size
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Significantly reduce PDF file size while preserving high visual quality and text sharpness. Fast, secure, and completely free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <CompressPdfClient />
                    </div>
                </div>
            </header>

            {/* ═══════════════════════════════════════════════
                WRITTEN CONTENT BELOW HERO UPLOADER
            ═══════════════════════════════════════════════ */}
            <main className="flex-1">
                {/* ── SECTION 1: How It Works (3 Steps) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                How to Compress PDF Files Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to reduce document size without sacrificing clarity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {HOW_TO_STEPS.map((s) => {
                                const StepIcon = s.icon;
                                return (
                                    <div
                                        key={s.step}
                                        className="bg-[#FAFAF9] rounded-2xl border border-[#E0DED9] p-8 flex flex-col items-center text-center gap-4 shadow-2xs hover:bg-white hover:border-brand-teal/60 hover:shadow-xs transition-all duration-200"
                                    >
                                        <div className="relative">
                                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]">
                                                <StepIcon size={26} stroke={1.8} />
                                            </span>
                                            <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-white text-[10px] font-bold">
                                                {s.step}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-brand-dark tracking-tight">
                                            {s.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {s.body}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 2: Key Features & Benefits ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3] border-b border-[#E0DED9]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Why Compress PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Intelligent compression algorithms balance maximum MB savings with crystal-clear readability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {FEATURES.map((f) => {
                                const FeatureIcon = f.icon;
                                return (
                                    <div
                                        key={f.title}
                                        className="bg-white rounded-2xl border border-[#E0DED9] p-7 flex flex-col gap-3.5 shadow-2xs hover:border-brand-teal/60 hover:shadow-xs transition-all duration-200"
                                    >
                                        <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#e6f4ef] text-brand-teal">
                                            <FeatureIcon size={22} stroke={1.8} />
                                        </span>
                                        <h3 className="text-lg font-bold text-brand-dark tracking-tight">
                                            {f.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {f.body}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 3: Common Use Cases ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                When to Use the PDF Compressor
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Perfect for email attachments, online job submissions, government portals, and storage optimization.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {USE_CASES.map((uc) => {
                                const UcIcon = uc.icon;
                                return (
                                    <div
                                        key={uc.title}
                                        className="bg-[#FAFAF9] rounded-2xl border border-[#E0DED9] p-7 flex flex-col gap-3.5 shadow-2xs"
                                    >
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#f0ede4] text-[#8C886B]">
                                            <UcIcon size={20} stroke={2} />
                                        </span>
                                        <h3 className="text-base font-bold text-brand-dark tracking-tight">
                                            {uc.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {uc.body}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 4: Frequently Asked Questions ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3] border-b border-[#E0DED9]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg">
                                Everything you need to know about optimizing and reducing PDF file sizes.
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

                {/* ── SECTION 5: Explore More PDF Tools (Sleek Tile Design) ── */}
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
