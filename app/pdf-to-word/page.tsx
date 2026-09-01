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
    IconPlus,
    IconFileWord,
    IconFileTypePdf,
    IconArrowRight,
    IconArrowUpRight,
    IconFileArrowRight,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconCheck,
    IconFileDescription,
    IconGavel,
    IconSchool,
    IconReceipt,
    IconTrash,
    IconUserCheck,
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
        step: "1",
        title: "Upload Your PDF",
        body: "Select the PDF file you want to convert from your computer or phone, or drag and drop it into the box above.",
    },
    {
        step: "2",
        title: "Automatic Processing",
        body: "Our high-precision layout engine parses paragraphs, fonts, data tables, and embedded images into native Word format.",
    },
    {
        step: "3",
        title: "Download Word DOCX",
        body: "A perfectly formatted Microsoft Word document is generated in seconds, ready for instant download and editing.",
    },
];

const FEATURES = [
    {
        icon: IconLayout,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Accurate Layout & Typography",
        body: "Preserves custom fonts, bold weights, paragraph alignments, line heights, and margins so your Word document mirrors the original PDF.",
    },
    {
        icon: IconTable,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "Table & Data Grid Preservation",
        body: "Converts financial ledgers, balance sheets, and invoices into authentic Microsoft Word tables with editable cell grids.",
    },
    {
        icon: IconPhoto,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "High-Resolution Image Extraction",
        body: "Extracts embedded photos, corporate logos, diagrams, and vector illustrations at their crisp native resolution.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "100% Free with No Watermarks",
        body: "Convert your PDF files to Word without registration, credit cards, subscription gates, or branding watermarks.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "256-Bit SSL & Auto-Deletion",
        body: "All transmissions are encrypted via SSL/TLS. Uploaded files are processed in memory and deleted immediately after download.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Universal Cross-Platform Access",
        body: "Works directly in your browser on Mac, Windows, Linux, iOS, iPadOS, and Android without installing any software.",
    },
];

const USE_CASES = [
    {
        icon: IconFileDescription,
        title: "Resumes & CV Updates",
        desc: "Convert older PDF resumes back to Word to update work experience, add newly acquired skills, or customize typography before applying for jobs.",
    },
    {
        icon: IconGavel,
        title: "Contracts & Legal Agreements",
        desc: "Make modifications to contract terms, payment clauses, and execution dates directly in Microsoft Word with Track Changes and margin comments.",
    },
    {
        icon: IconSchool,
        title: "Academic Research & Theses",
        desc: "Extract literature citations, research study tables, and bibliographies straight into your essay and dissertation drafts without retyping.",
    },
    {
        icon: IconReceipt,
        title: "Invoices & Financial Reports",
        desc: "Reclaim editable financial records, monthly invoices, and audit summaries to paste tabular numbers directly into accounting spreadsheets.",
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
        name: "PDF to Word Converter - PDF Maya",
        url: "https://pdfmaya.com/pdf-to-word",
        description: "Convert PDF documents to editable Microsoft Word (DOCX) files online for free.",
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
        name: "How to Convert PDF to Word Online",
        description: "Step-by-step guide to converting a PDF into an editable Word document with PDF Maya.",
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
                (Preserved intact as requested)
            ═══════════════════════════════════════════════ */}
            <header className="pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-8 border-b border-[#E0DED9] bg-[#FAFAF9]">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Format Badge with Word Logo */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DED9] shadow-2xs mb-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#dc2626]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fee2e2]">
                                <IconFileTypePdf size={13} stroke={2.5} />
                            </span>
                            <span>PDF</span>
                        </div>
                        <IconArrowRight size={13} className="text-neutral-400" />
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#185ABD]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e0ecfc]">
                                <IconFileWord size={13} stroke={2.5} />
                            </span>
                            <span>Word (.docx)</span>
                        </div>
                    </div>

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
                REFINED CONTENT SECTIONS (Clean, Modern, Centered Steps)
            ═══════════════════════════════════════════════ */}
            <main className="flex-1">
                {/* ── SECTION 1: How to Convert (Centered 1, 2, 3 Steps) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                How to Convert PDF to Word
                            </h2>
                            <p className="text-base text-neutral-600">
                                Follow three simple steps to convert any PDF into an editable Word document online.
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
                                The Best PDF to Word Converter
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Convert documents with precision. Our engine reconstructs tables, typography, paragraphs, and high-resolution images seamlessly.
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
                                Formatting &amp; Geometry Integrity
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya deconstructs PDF geometry into authentic Microsoft Word elements rather than floating text frames.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            {/* Feature Point 1 */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Native Table Grid Reconstruction
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Financial balance sheets, invoice grids, and product catalogs are converted into authentic Word tables with editable cells, customizable borders, and formula-ready numbers.
                                </p>
                            </div>

                            {/* Feature Point 2 */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Fluid Paragraph Flow &amp; Font Matching
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Sentences wrap automatically across margins. Font families, weights (bold, italic), line spacing, and paragraph indents are preserved so you can rewrite copy naturally.
                                </p>
                            </div>

                            {/* Feature Point 3 */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Lossless Image &amp; Graphic Extraction
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Embedded photography, corporate branding logos, charts, and vector diagrams maintain their native DPI resolution without fuzzy compression.
                                </p>
                            </div>

                            {/* Feature Point 4 */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Multi-Column Document Structuring
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Magazine layouts, academic research articles, and corporate newsletters flow sequentially through columns without overlapping headers or misplaced images.
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
                                Practical PDF to Word Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Accelerate document turnaround across business, legal, academic, and personal workflows.
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
                                We prioritize document confidentiality and data security at every stage of the conversion process.
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
                                    Uploaded PDFs and converted DOCX files are purged automatically.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5] flex items-center justify-center shadow-2xs">
                                    <IconUserCheck size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">No Account Needed</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    Convert unlimited files without registration, emails, or paywalls.
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
