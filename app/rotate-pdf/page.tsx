import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RotatePdfClient from "./RotatePdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconRotateClockwise2,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconScan,
    IconFileDescription,
    IconDeviceMobile,
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
    title: "Rotate PDF Online Free – Rotate PDF Pages Permanently | PDF Maya",
    description:
        "Rotate PDF pages permanently online for free. Fix upside-down scans, orientation errors, and sideways landscape pages with 100% privacy.",
    keywords: [
        "rotate pdf",
        "rotate pdf pages",
        "rotate pdf online free",
        "flip pdf upside down",
        "fix sideways pdf",
        "permanently rotate pdf",
        "change pdf orientation",
        "free online pdf rotator",
    ],
    alternates: {
        canonical: "/rotate-pdf",
    },
    openGraph: {
        title: "Rotate PDF Online Free – Rotate PDF Pages Permanently | PDF Maya",
        description:
            "Rotate PDF pages permanently online for free. Fix upside-down scans and sideways pages with 100% privacy.",
        url: "/rotate-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rotate PDF Online Free | PDF Maya",
        description:
            "Correct sideways or upside-down PDF pages permanently in your browser.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF Document",
        body: "Select your rotated or scanned PDF document from your device and drop it into the box above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Rotate Single or All Pages",
        body: "Click individual page rotation buttons or rotate the entire document 90°, 180°, or 270° clockwise.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Fixed PDF",
        body: "Your permanently reoriented PDF document is ready instantly. Download and view seamlessly anywhere.",
    },
];

const FEATURES = [
    {
        icon: IconRotateClockwise2,
        title: "Single Page & Full File Rotation",
        body: "Rotate specific inverted pages or rotate all pages uniformly with a single click.",
    },
    {
        icon: IconSparkles,
        title: "Permanent Metadata Orientation",
        body: "Saves new page orientation directly to the PDF specification so it opens correctly in every viewer.",
    },
    {
        icon: IconFileDescription,
        title: "Lossless Visual Quality",
        body: "Orientation changes do not recompress images or degrade text clarity in any way.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Automatically Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceMobile,
        title: "Mobile Friendly & Responsive",
        body: "Rotate mobile scan uploads effortlessly on iPhone, iPad, Android, macOS, and Windows browsers.",
    },
    {
        icon: IconSparkles,
        title: "100% Free & Unlimited",
        body: "Fix as many PDF files as you need with zero watermarks, registration gates, or file fees.",
    },
];

const USE_CASES = [
    {
        icon: IconScan,
        title: "Inverted Mobile Scanner Feeds",
        body: "Fix documents fed upside-down or sideways into flatbed office scanners and mobile camera apps.",
    },
    {
        icon: IconFileDescription,
        title: "Landscape Spreadsheets & Blueprints",
        body: "Align landscape architectural plans, Gantt charts, and wide spreadsheets to readable orientations.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Presentation Slides & Pitch Decks",
        body: "Standardize slide orientations so presentations display correctly on projector screens and external monitors.",
    },
    {
        icon: IconRotateClockwise2,
        title: "Legal Exhibits & Notarized Scans",
        body: "Ensure notarized court filings, affidavits, and bank statements are properly aligned before filing.",
    },
];

const FAQS = [
    {
        q: "How do I rotate PDF pages permanently for free?",
        a: "Upload your PDF into the tool above, click 'Open Visual Page Rotation Grid', click the rotation arrows on the pages you want to turn, and download your updated PDF.",
    },
    {
        q: "Will the rotation be permanent when I send the PDF to others?",
        a: "Yes. The rotation updates the PDF's native display matrix metadata, ensuring it opens right-side up in Adobe Acrobat, Apple Preview, web browsers, and mobile readers.",
    },
    {
        q: "Can I rotate only one page inside a multi-page PDF?",
        a: "Yes! You can rotate individual pages independently (e.g. rotate only page 3 by 90 degrees while leaving the rest unchanged).",
    },
    {
        q: "Are my uploaded PDF documents safe and private?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated sandbox environments and deleted immediately after your session.",
    },
    {
        q: "Does rotating a PDF reduce its quality?",
        a: "No. PDF rotation is completely lossless. No images are compressed or downsampled during rotation.",
    },
    {
        q: "Are there any watermarks added to my document?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your output PDF documents.",
    },
];

const RELATED_TOOLS = [
    { label: "Organise PDF", href: "/organise-pdf", desc: "Sort, reorder, delete, and rotate pages all in one place.", icon: IconFileDescription },
    { label: "Remove Pages", href: "/remove-pages", desc: "Delete unwanted or blank pages from your PDF.", icon: IconPencil },
    { label: "Split PDF", href: "/split-pdf", desc: "Separate PDF pages or extract custom page ranges.", icon: IconArrowsJoin2 },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function RotatePdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Rotate PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/rotate-pdf",
        description: "Rotate PDF pages permanently online for free.",
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
        name: "How to Rotate PDF Pages Online",
        description: "Step-by-step guide to rotating PDF pages permanently with PDF Maya.",
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
                                <IconRotateClockwise2 size={13} stroke={2.5} />
                            </span>
                            <span>Orientation Correction</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Rotate PDF Pages
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Permanently rotate PDF pages 90°, 180°, or 270° clockwise to correct sideways and upside-down documents.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <RotatePdfClient />
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
                                How to Rotate PDF Pages Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to permanently fix orientation on any PDF document.
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
                                Why Rotate PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Professional orientation alignment that saves directly to document metadata.
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
                                When to Use the Rotate PDF Tool
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Fix misaligned scanner batches, landscape tables, and camera snapshot documents.
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
                                Everything you need to know about rotating PDF documents.
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
