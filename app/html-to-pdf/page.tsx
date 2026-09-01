import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HtmlToPdfClient from "./HtmlToPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconWorld,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconCode,
    IconDeviceMobile,
    IconReceipt,
    IconFileDescription,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypePdf,
    IconArrowRight,
    IconCheck,
    IconUserCheck,
    IconTrash,
    IconSchool,
    IconGavel,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert HTML to PDF Online Free – Webpage to PDF | PDF Maya",
    description:
        "Convert live webpage URLs, HTML files, or raw HTML code into high-fidelity PDF documents online for free. Full CSS rendering, customizable viewport sizes, and 100% privacy.",
    keywords: [
        "html to pdf",
        "convert html to pdf",
        "webpage to pdf",
        "url to pdf converter",
        "save webpage as pdf",
        "html code to pdf",
        "free online html to pdf",
    ],
    alternates: {
        canonical: "/html-to-pdf",
    },
    openGraph: {
        title: "Convert HTML to PDF Online Free – Webpage to PDF | PDF Maya",
        description:
            "Convert live webpage URLs, HTML files, or raw HTML code into high-fidelity PDF documents online for free. Full CSS rendering with 100% privacy.",
        url: "/html-to-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert HTML to PDF Online Free | PDF Maya",
        description:
            "Convert live web URLs, HTML code, or files into printable, formatted PDF files instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "1",
        title: "Enter URL, File, or Code",
        body: "Type a live website URL, upload an .html file, or paste your raw HTML/CSS snippet into the converter above.",
    },
    {
        step: "2",
        title: "Browser Engine Rendering",
        body: "Our engine renders the webpage with active CSS styles, images, and fonts into an interactive preview.",
    },
    {
        step: "3",
        title: "Download Print-Ready PDF",
        body: "Your PDF document is compiled instantly. Download for offline archiving, printing, or client reporting.",
    },
];

const FEATURES = [
    {
        icon: IconWorld,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "High-Fidelity Browser Rendering",
        body: "Executes modern CSS, responsive layouts, web fonts, and JavaScript elements with pinpoint visual accuracy.",
    },
    {
        icon: IconDeviceMobile,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "Custom Device Viewports",
        body: "Render pages as Desktop HD (1920px), Laptop (1280px), Tablet (768px), or Mobile iPhone (430px) formats.",
    },
    {
        icon: IconCode,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "URL, File & Raw Code Modes",
        body: "Seamlessly convert from live public URLs, local .html files, or raw HTML code templates.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "100% Free with No Watermarks",
        body: "Capture web pages and convert HTML without paying subscription fees or getting branded watermarks.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "Encrypted & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files and temporary renders are deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Cross-Platform Access",
        body: "Convert web content directly in your web browser on macOS, Windows, Linux, iOS, and Android.",
    },
];

const USE_CASES = [
    {
        icon: IconReceipt,
        title: "Online Invoices & Receipts",
        desc: "Capture online payment receipts, booking confirmations, and digital invoices into permanent archival PDFs.",
    },
    {
        icon: IconWorld,
        title: "Web Articles & Documentation",
        desc: "Save long-form news stories, technical documentation, and blog tutorials for offline reading and reference.",
    },
    {
        icon: IconCode,
        title: "HTML Templates & Reports",
        desc: "Convert automated HTML invoice templates, receipts, and dynamic dashboard reports into downloadable PDF files.",
    },
    {
        icon: IconFileDescription,
        title: "Webpage Legal Disclosures",
        desc: "Archive terms of service updates, policy statements, and website snapshots for compliance and audit records.",
    },
];

const FAQS = [
    {
        q: "How do I convert a website URL to a PDF for free?",
        a: "Enter the webpage URL into the tool above and click 'Preview PDF'. Once rendered, click 'Download PDF' to save the complete webpage as a document.",
    },
    {
        q: "Will CSS stylesheets and images be preserved?",
        a: "Yes. Our engine uses a full headless browser that loads external CSS, web fonts, responsive images, and layouts accurately.",
    },
    {
        q: "Can I convert raw HTML code without hosting it online?",
        a: "Yes! Switch to the 'HTML Code' tab, paste your HTML and CSS markup directly into the editor, and click 'Render & Download'.",
    },
    {
        q: "Are my converted web pages and code snippets secure?",
        a: "Yes. All transmissions are protected with end-to-end 256-bit SSL encryption. Rendered files and temporary assets are purged automatically right after download.",
    },
    {
        q: "Can I choose between mobile and desktop screen views?",
        a: "Yes. Use the viewport selector to capture how the webpage looks on desktop monitors, laptops, tablets, or mobile phone screens.",
    },
    {
        q: "Are there any watermarks added to the PDF?",
        a: "No. Generated PDF files remain 100% clean and free of watermarks or branding stamps.",
    },
];

const RELATED_TOOLS = [
    { label: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word documents to clean PDF files.", icon: IconFileWord },
    { label: "JPG to PDF", href: "/jpg-to-pdf", desc: "Combine images into a single PDF document.", icon: IconPhoto },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function HtmlToPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "HTML to PDF Converter - PDF Maya",
        url: "https://pdfmaya.com/html-to-pdf",
        description: "Convert live webpage URLs, HTML files, or raw HTML code into high-fidelity PDF documents online for free.",
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
        name: "How to Convert HTML and Webpages to PDF Online",
        description: "Step-by-step guide to converting URLs and HTML code to PDF with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#185ABD]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e0ecfc]">
                                <IconWorld size={13} stroke={2.5} />
                            </span>
                            <span>HTML / Webpage</span>
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
                        Convert HTML to PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Convert live webpage URLs, HTML files, or raw code snippets into crisp, printable PDF documents in seconds. 100% free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <HtmlToPdfClient />
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
                                How to Convert HTML to PDF
                            </h2>
                            <p className="text-base text-neutral-600">
                                Capture web pages and render HTML to PDF in 3 simple steps.
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
                                The Best HTML to PDF Converter
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Complete headless browser rendering loads external CSS, web typography, JavaScript widgets, and custom device viewports accurately.
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
                                Headless Browser Execution &amp; CSS Fidelity
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya renders modern CSS Grid, Flexbox, Web Fonts, and SVG graphics into vector-crisp PDF documents.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        CSS3 &amp; Web Font Rendering
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Loads Google Fonts, custom @font-face declarations, gradients, shadows, and flex layouts with pixel precision.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Custom Device Screen Emulation
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Emulate desktop monitors, tablets, or smartphones to capture responsive media queries exactly as intended.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Live JavaScript Execution
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Executes interactive chart scripts, dynamic DOM manipulations, and math formulas before compiling the final PDF.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Selectable &amp; Searchable Text
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Webpage text remains fully selectable, searchable (Ctrl+F), and copyable within the generated PDF document.
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
                                Practical HTML to PDF Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Archive web pages, invoice templates, and online documentation cleanly.
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
                                We prioritize document confidentiality and code security at every stage.
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
                                    Uploaded code and rendered PDFs are purged automatically from memory.
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
                                Everything you need to know about converting HTML and webpages to PDF.
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
