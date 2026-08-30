import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfToWordClient from "./PdfToWordClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconLayout,
    IconTable,
    IconPhoto,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconFileDescription,
    IconGavel,
    IconSchool,
    IconReceipt,
    IconArrowUpRight,
    IconPlus,
    IconFileArrowRight,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert PDF to Word Online Free – Fast PDF to DOCX | PDF Maya",
    description:
        "Convert PDF documents to editable Microsoft Word (DOCX) files online for free. Accurate formatting, table preservation, no watermarks, and 100% private.",
    keywords: [
        "pdf to word",
        "convert pdf to word",
        "pdf to docx",
        "convert pdf to docx online",
        "pdf to word converter free",
        "edit pdf in word",
        "free online pdf converter",
        "pdf to docx without watermark",
    ],
    alternates: {
        canonical: "/pdf-to-word",
    },
    openGraph: {
        title: "Convert PDF to Word Online Free – Fast PDF to DOCX | PDF Maya",
        description:
            "Convert PDF documents to editable Microsoft Word (DOCX) files online for free. Accurate formatting, table preservation, no watermarks, and 100% private.",
        url: "/pdf-to-word",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert PDF to Word Online Free | PDF Maya",
        description:
            "Convert PDF documents to editable Microsoft Word (.docx) files online for free. Preserve tables, layouts, and fonts.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF",
        body: "Drag and drop your PDF into the converter area above or click to select a file from your computer or phone.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Instant Conversion",
        body: "Click 'Convert to Word'. Our intelligent engine parses text, fonts, images, and tables directly into native Word format.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Editable DOCX",
        body: "Your new Microsoft Word (.docx) document is ready instantly. Download and edit freely in Word, Google Docs, or Pages.",
    },
];

const FEATURES = [
    {
        icon: IconLayout,
        title: "Accurate Layout & Formatting",
        body: "Preserve original fonts, paragraph styles, margins, headings, and column structures without misalignments.",
    },
    {
        icon: IconTable,
        title: "Table & Data Grid Preservation",
        body: "Convert structured financial grids, spreadsheets, and data tables into fully editable Word tables with cell borders.",
    },
    {
        icon: IconPhoto,
        title: "Embedded Image Extraction",
        body: "Retain high-resolution photos, graphics, diagrams, and illustrations positioned exactly where they belong.",
    },
    {
        icon: IconSparkles,
        title: "100% Free & No Watermarks",
        body: "Convert as many files as you need without hidden fees, subscriptions, credit cards, or unwanted branding stamps.",
    },
    {
        icon: IconShieldLock,
        title: "Private & Automatic Deletion",
        body: "All transmissions are SSL-encrypted. Your documents are never viewed, shared, or permanently stored.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Universal Cross-Platform Access",
        body: "Access directly from your browser on macOS, Windows, Linux, iPadOS, iOS, and Android without installing apps.",
    },
];

const USE_CASES = [
    {
        icon: IconFileDescription,
        title: "Update Resumes & CVs",
        body: "Need to update a resume saved as a PDF? Convert it back to Word to add recent roles, skills, or adjust the layout in minutes.",
    },
    {
        icon: IconGavel,
        title: "Revise Contracts & Agreements",
        body: "Make modifications to contract terms, clauses, dates, and party details directly in Microsoft Word before final approval.",
    },
    {
        icon: IconSchool,
        title: "Repurpose Academic Papers & Notes",
        body: "Extract research citations, study materials, and literature excerpts to incorporate directly into your essays and thesis drafts.",
    },
    {
        icon: IconReceipt,
        title: "Edit Invoices & Business Reports",
        body: "Reclaim editable financial data, invoices, and quarterly summaries without re-typing numbers manually.",
    },
];

const FAQS = [
    {
        q: "How do I convert a PDF to an editable Word document for free?",
        a: "Simply upload your PDF to the box above and click 'Convert to Word'. In a few seconds, your file is converted into a standard .docx document ready for immediate download and editing in Microsoft Word or Google Docs.",
    },
    {
        q: "Will the formatting and tables of my PDF change after conversion?",
        a: "PDF Maya uses advanced layout parsing algorithms to ensure paragraphs, tables, fonts, headings, and images retain their original formatting as closely as possible in the generated Word document.",
    },
    {
        q: "Are my uploaded PDF files safe and secure?",
        a: "Yes. All file uploads and downloads are encrypted via HTTPS (SSL/TLS). Files are processed strictly on isolated servers and automatically deleted once the conversion is complete. We do not read, share, or store your documents.",
    },
    {
        q: "Can I edit the converted file in Google Docs or Apple Pages?",
        a: "Yes. The generated file is a standard Microsoft Word .docx file, which is fully compatible with Microsoft Word, Google Docs, Apple Pages, LibreOffice, and WPS Office.",
    },
    {
        q: "Do I need to install any software or plugins?",
        a: "No. PDF Maya works 100% online in your web browser. You do not need to download desktop software, install extensions, or register for an account.",
    },
    {
        q: "Are there any watermarks added to my converted file?",
        a: "No. PDF Maya never adds watermarks, stamps, or logos to your converted documents. Your output Word file remains completely clean and professional.",
    },
];

const RELATED_TOOLS = [
    {
        label: "Word to PDF",
        href: "/word-to-pdf",
        desc: "Convert Word documents to clean PDF files.",
        icon: IconFileArrowRight,
    },
    {
        label: "PDF to Excel",
        href: "/pdf-to-excel",
        desc: "Extract PDF tables into editable Excel sheets.",
        icon: IconTable,
    },
    {
        label: "PDF to JPG",
        href: "/pdf-to-jpg",
        desc: "Convert PDF pages to high-resolution images.",
        icon: IconPhoto,
    },
    {
        label: "Merge PDF",
        href: "/merge-pdf",
        desc: "Combine multiple PDFs into a single file.",
        icon: IconArrowsJoin2,
    },
    {
        label: "Compress PDF",
        href: "/compress-pdf",
        desc: "Reduce PDF file size without quality loss.",
        icon: IconLayersSubtract,
    },
    {
        label: "Edit PDF",
        href: "/edit-pdf",
        desc: "Add text, annotations, and shapes directly to PDFs.",
        icon: IconPencil,
    },
];

export default function PdfToWordPage() {
    // Structured JSON-LD schemas
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "PDF to Word Converter - PDF Maya",
        "url": "https://pdfmaya.com/pdf-to-word",
        "description": "Convert PDF documents to editable Microsoft Word (DOCX) files online for free.",
        "applicationCategory": "OfficeApplication",
        "operatingSystem": "All",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        },
    };

    const jsonLdHowTo = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Convert PDF to Word Online",
        "description": "Step-by-step guide to converting a PDF into an editable Word document with PDF Maya.",
        "step": HOW_TO_STEPS.map((s, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": s.title,
            "text": s.body,
        })),
    };

    const jsonLdFaq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
            },
        })),
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
            {/* Structured Data for SEO */}
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
                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Convert PDF to Word
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transform PDF documents into fully editable Microsoft Word (.docx) files. Fast, accurate, and completely free with no registration.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PdfToWordClient />
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
                                How to Convert PDF to Word Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to transform uneditable PDFs into editable Word documents.
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
                                Why Convert PDF to Word with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Designed for professionals, students, and teams who require accurate, hassle-free document conversion.
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
                                When to Use the PDF to Word Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Overcome the frustration of uneditable PDF documents across your daily workflow.
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
                                Everything you need to know about converting PDFs to Word files.
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
