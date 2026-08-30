import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPdfClient from "./SplitPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconScissors,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconLayoutGrid,
    IconFileDescription,
    IconSchool,
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
    title: "Split PDF Online Free – Extract Pages from PDF | PDF Maya",
    description:
        "Split PDF files into separate individual documents or extract custom page ranges online for free. Fast, precise, 100% private, and watermark-free.",
    keywords: [
        "split pdf",
        "extract pages from pdf",
        "separate pdf pages",
        "split pdf by page range",
        "split pdf online free",
        "cut pdf pages",
        "divide pdf document",
        "free online pdf splitter",
    ],
    alternates: {
        canonical: "/split-pdf",
    },
    openGraph: {
        title: "Split PDF Online Free – Extract Pages from PDF | PDF Maya",
        description:
            "Split PDF files into separate individual documents or extract custom page ranges online for free. Fast, precise, and private.",
        url: "/split-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Split PDF Online Free | PDF Maya",
        description:
            "Extract specific pages or divide large PDF documents into multiple smaller files instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF Document",
        body: "Drag and drop your PDF into the splitter area above or click to select a file from your device.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Specify Ranges or Pick Pages",
        body: "Enter page ranges (e.g. 1-4, 7-10) or open the visual page selector to pick individual pages interactively.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Extracted PDF",
        body: "Your split PDF document is generated in seconds. Download immediately with preserved formatting and vector quality.",
    },
];

const FEATURES = [
    {
        icon: IconScissors,
        title: "Custom Range & Interval Splitting",
        body: "Specify custom ranges like '1-3, 5, 8-12' to extract exact sections into clean, independent PDF files.",
    },
    {
        icon: IconLayoutGrid,
        title: "Visual Interactive Page Selection",
        body: "Preview page thumbnails and click to extract or remove specific pages before confirming.",
    },
    {
        icon: IconFileDescription,
        title: "Zero Quality Loss",
        body: "Maintains original fonts, images, hyperlinks, vector art, and form fields in the newly created documents.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Split documents as often as you need with no subscriptions, credit cards, or watermark stamps.",
    },
    {
        icon: IconShieldLock,
        title: "Private & Automatic Deletion",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Works Across All Browsers",
        body: "Split large manuals, e-books, and scans directly in your browser on Mac, Windows, Linux, iPhone, and Android.",
    },
];

const USE_CASES = [
    {
        icon: IconSchool,
        title: "Textbooks & Syllabus Chapters",
        body: "Extract only the relevant chapters and study modules from massive digital textbooks to share with classmates.",
    },
    {
        icon: IconFileDescription,
        title: "Contracts & Confidential Clauses",
        body: "Separate specific non-confidential clauses or signature exhibits from large master agreement packages.",
    },
    {
        icon: IconLayoutGrid,
        title: "Scan Bundles & Multi-Page Receipts",
        body: "Split bulk office scanner feeds into individual customer invoices, medical forms, or tax receipts.",
    },
    {
        icon: IconScissors,
        title: "Presentations & Lecture Slides",
        body: "Extract only your designated presentation slides from large company slide master decks.",
    },
];

const FAQS = [
    {
        q: "How do I split a PDF into separate pages for free?",
        a: "Upload your PDF to the tool above, enter the page range you want to extract (e.g. 1-3, 5), and click 'Split Range'. Your new PDF will download in seconds.",
    },
    {
        q: "Can I choose which pages to extract visually?",
        a: "Yes! Click the 'Open Visual Page Selector & Splitter' button after uploading to view page thumbnails and click the exact pages you want to save.",
    },
    {
        q: "Will splitting a PDF reduce its quality or break hyperlinks?",
        a: "No. PDF Maya performs lossless extraction. Text, high-resolution images, fonts, bookmarks, and links remain identical to the original file.",
    },
    {
        q: "Are my uploaded documents secure?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated environments and deleted immediately after conversion.",
    },
    {
        q: "Can I split password-protected PDFs?",
        a: "You will first need to unlock password-protected PDFs using our Unlock PDF tool before splitting pages.",
    },
    {
        q: "Are there any file size limits or watermarks?",
        a: "PDF Maya allows splitting large multi-page PDF documents for free with zero watermarks or branding stamps.",
    },
];

const RELATED_TOOLS = [
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract PDF tables into editable Excel sheets.", icon: IconTable },
    { label: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages to high-resolution images.", icon: IconPhoto },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function SplitPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Split PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/split-pdf",
        description: "Split PDF files into separate individual documents or extract custom page ranges online for free.",
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
        name: "How to Split PDF Files Online",
        description: "Step-by-step guide to splitting PDF pages or extracting ranges with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#ea580c]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#ffedd5]">
                                <IconScissors size={13} stroke={2.5} />
                            </span>
                            <span>Document Organization</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Split PDF Pages
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Separate PDF pages or extract custom page ranges into independent documents. Fast, exact, and completely free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <SplitPdfClient />
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
                                How to Split PDF Pages Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to isolate and extract specific sections from any PDF document.
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
                                Why Split PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Precise page extraction with lossless fidelity and full browser privacy.
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
                                When to Use the Split PDF Tool
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Extract chapters, separate legal schedules, and parse batch document scans effortlessly.
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
                                Everything you need to know about splitting and extracting PDF pages.
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
