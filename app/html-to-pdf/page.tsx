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
        step: "01",
        icon: IconWorld,
        title: "Enter URL, File, or Code",
        body: "Type a live website URL, upload an .html file, or paste your raw HTML/CSS snippet into the converter above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Browser Engine Rendering",
        body: "Click 'Preview PDF'. Our engine renders the webpage with active CSS styles, images, and fonts into an interactive preview.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Print-Ready PDF",
        body: "Your PDF document is compiled instantly. Download for offline archiving, printing, or client reporting.",
    },
];

const FEATURES = [
    {
        icon: IconWorld,
        title: "High-Fidelity Browser Rendering",
        body: "Executes modern CSS, responsive layouts, web fonts, and JavaScript elements with pinpoint visual accuracy.",
    },
    {
        icon: IconDeviceMobile,
        title: "Custom Device Viewports",
        body: "Render pages as Desktop HD (1920px), Laptop (1280px), Tablet (768px), or Mobile iPhone (430px) formats.",
    },
    {
        icon: IconCode,
        title: "URL, File & Raw Code Modes",
        body: "Seamlessly convert from live public URLs, local .html files, or raw HTML templates.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Capture web pages and convert HTML without paying subscription fees or getting branded watermarks.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files and temporary renders are deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Cross-Platform Access",
        body: "Convert web content directly in your web browser on macOS, Windows, Linux, iOS, and Android.",
    },
];

const USE_CASES = [
    {
        icon: IconReceipt,
        title: "Online Invoices & Receipts",
        body: "Capture online payment receipts, booking confirmations, and digital invoices into permanent archival PDFs.",
    },
    {
        icon: IconWorld,
        title: "Web Articles & Blog Posts",
        body: "Save long-form news stories, scientific blog posts, and documentation articles for offline reading and research.",
    },
    {
        icon: IconCode,
        title: "HTML Templates & Reports",
        body: "Convert automated HTML invoice templates, receipts, and dynamic dashboard reports into downloadable PDF files.",
    },
    {
        icon: IconFileDescription,
        title: "Webpage Legal Disclosures",
        body: "Archive terms of service updates, policy statements, and website snapshots for compliance records.",
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
        a: "Yes! Switch to the 'Paste Code' tab to enter any raw HTML and CSS markup directly, or upload an .html file via the 'Upload HTML' tab.",
    },
    {
        q: "Can I capture a single continuous long page instead of multi-page breaks?",
        a: "Yes! Check the 'Single continuous long page' option in the sidebar to generate an unbroken snapshot of the entire webpage.",
    },
    {
        q: "Are my uploaded HTML documents and URLs secure?",
        a: "Yes. All file uploads and URL rendering are protected with HTTPS encryption. Rendered files are deleted immediately after download.",
    },
    {
        q: "Are there any watermarks on the converted PDF?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your output PDF documents.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages into high-resolution images.", icon: IconPhoto },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "PDF to Text", href: "/pdf-to-txt", desc: "Extract raw plain text from PDF documents.", icon: IconFileDescription },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function HtmlToPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "HTML to PDF Converter - PDF Maya",
        url: "https://pdfmaya.com/html-to-pdf",
        description: "Convert live webpage URLs, HTML files, or raw HTML code into high-fidelity PDF documents online for free.",
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
        name: "How to Convert HTML to PDF Online",
        description: "Step-by-step guide to converting web pages, HTML files, or code into a PDF with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-teal">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f4ef]">
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
                        Transform live website URLs, HTML files, or raw code into clean, print-ready PDF documents.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <HtmlToPdfClient />
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
                                How to Convert HTML to PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to render any webpage or HTML code into a clean PDF.
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
                                Why Convert HTML to PDF with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Pixel-accurate browser rendering with full CSS, web fonts, and responsive layout control.
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
                                When to Use the HTML to PDF Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Save online receipts, archive blog articles, convert invoice templates, and record compliance disclosures.
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
                                Everything you need to know about converting webpages and HTML to PDF.
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
