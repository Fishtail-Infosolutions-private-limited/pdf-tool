import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordToPdfClient from "./WordToPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconLayout,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconFileDescription,
    IconGavel,
    IconSchool,
    IconReceipt,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypeDocx,
    IconFileTypePdf,
    IconArrowRight,
    IconCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert Word to PDF Online Free – Fast DOCX to PDF | PDF Maya",
    description:
        "Convert Microsoft Word documents (DOCX, DOC) to PDF files online for free. Lock formatting, fonts, images, and layout across all devices with 100% privacy.",
    keywords: [
        "word to pdf",
        "convert word to pdf",
        "docx to pdf",
        "doc to pdf converter",
        "convert docx to pdf free",
        "word to pdf converter online",
        "microsoft word to pdf",
        "free online word to pdf converter",
    ],
    alternates: {
        canonical: "/word-to-pdf",
    },
    openGraph: {
        title: "Convert Word to PDF Online Free – Fast DOCX to PDF | PDF Maya",
        description:
            "Convert Microsoft Word documents (DOCX, DOC) to PDF files online for free. Lock formatting, fonts, images, and layout across all devices.",
        url: "/word-to-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert Word to PDF Online Free | PDF Maya",
        description:
            "Convert DOCX and DOC documents into secure, standardized PDF files instantly. Free and private.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your Word File",
        body: "Select your Microsoft Word document (.docx or .doc) from your device or drag and drop it into the converter box above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Instant Conversion",
        body: "Click 'Convert to PDF'. Our high-fidelity conversion engine renders fonts, layouts, margins, and images to exact PDF specifications.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Standard PDF",
        body: "Your professional PDF is ready immediately. Download your file with fixed formatting that renders identically on any device.",
    },
];

const FEATURES = [
    {
        icon: IconLayout,
        title: "Perfect Layout & Typography",
        body: "Lock in custom fonts, headers, footnotes, line spacing, and page numbering so your document looks identical on every screen.",
    },
    {
        icon: IconTable,
        title: "Table & Data Preservation",
        body: "Keep complex Word tables, financial charts, and cell borders accurately aligned without unexpected column shifts.",
    },
    {
        icon: IconPhoto,
        title: "High-Resolution Image Rendering",
        body: "Retain the crispness and clarity of embedded photos, company logos, graphs, and illustrations without pixelation.",
    },
    {
        icon: IconSparkles,
        title: "100% Free & Unlimited",
        body: "Convert your Word documents without subscriptions, credit card requirements, watermarks, or artificial daily limits.",
    },
    {
        icon: IconShieldLock,
        title: "Secure & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Your files are automatically deleted after processing and never stored.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Works Across All Platforms",
        body: "Convert Word files seamlessly on Windows, macOS, Linux, iOS, iPadOS, and Android directly from your browser.",
    },
];

const USE_CASES = [
    {
        icon: IconFileDescription,
        title: "Resumes, Portfolios & CVs",
        body: "Ensure hiring managers and automated applicant tracking systems (ATS) view your CV exactly as intended without formatting glitches.",
    },
    {
        icon: IconGavel,
        title: "Contracts & Legal Documents",
        body: "Lock agreement terms, non-disclosure agreements (NDAs), and proposals into a read-only format before sharing with clients.",
    },
    {
        icon: IconSchool,
        title: "Essays, Theses & Assignments",
        body: "Submit academic research papers, reports, and dissertation drafts in the universal PDF standard required by universities.",
    },
    {
        icon: IconReceipt,
        title: "Invoices, Quotes & Proposals",
        body: "Send clean, professional, non-editable business invoices and price estimates directly to customers.",
    },
];

const FAQS = [
    {
        q: "How do I convert a Microsoft Word document to PDF for free?",
        a: "Drag and drop your DOCX or DOC file into the converter above and click 'Convert to PDF'. In seconds, your file is processed into a high-quality PDF document ready for instant download.",
    },
    {
        q: "Will my custom fonts and layouts stay intact?",
        a: "Yes. Our conversion engine embeds and preserves document typography, margins, alignments, headers, and spacing so the resulting PDF matches your original Word document precisely.",
    },
    {
        q: "Are my uploaded Word files private and secure?",
        a: "Yes. All file transfers are protected with end-to-end HTTPS encryption. Uploaded documents are processed in isolated sandboxes and automatically deleted right after your session. We never read or store your data.",
    },
    {
        q: "Does this tool support both .docx and older .doc formats?",
        a: "Yes. PDF Maya supports standard modern .docx files as well as legacy Microsoft Word 97-2003 .doc formats.",
    },
    {
        q: "Can I convert Word to PDF on my phone or Mac?",
        a: "Yes. PDF Maya runs in any web browser on iOS, Android, macOS, Windows, and Linux without requiring Microsoft Office or any software installation.",
    },
    {
        q: "Will there be any watermarks on my generated PDF?",
        a: "No. PDF Maya never adds watermarks, stamps, or logos to your converted PDF documents. Your output remains 100% clean and professional.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Turn PDFs back into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "Excel to PDF", href: "/excel-to-pdf", desc: "Convert spreadsheets to clean PDF documents.", icon: IconTable },
    { label: "JPG to PDF", href: "/jpg-to-pdf", desc: "Convert photos and scanned images into PDF pages.", icon: IconPhoto },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function WordToPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Word to PDF Converter - PDF Maya",
        url: "https://pdfmaya.com/word-to-pdf",
        description: "Convert Microsoft Word documents (DOCX, DOC) to PDF files online for free.",
        applicationCategory: "OfficeApplication",
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
        name: "How to Convert Word to PDF Online",
        description: "Step-by-step guide to converting a Word file into a PDF document with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#185ABD]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e0ecfc]">
                                <IconFileTypeDocx size={13} stroke={2.5} />
                            </span>
                            <span>Word</span>
                        </div>
                        <IconArrowRight size={13} className="text-neutral-400" />
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#dc2626]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fee2e2]">
                                <IconFileTypePdf size={13} stroke={2.5} />
                            </span>
                            <span>PDF</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Convert Word to PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transform Microsoft Word (.docx, .doc) files into secure, high-quality PDF documents. Fast, free, and perfectly formatted.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <WordToPdfClient />
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
                                How to Convert Word to PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to turn Word documents into standardized PDF files.
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
                                Why Convert Word to PDF with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Ensure your documents display consistently on every device without unexpected formatting changes.
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
                                When to Use the Word to PDF Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                The essential tool for publishing, distributing, and archiving documents professionally.
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
                                Everything you need to know about converting Word documents to PDF files.
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
