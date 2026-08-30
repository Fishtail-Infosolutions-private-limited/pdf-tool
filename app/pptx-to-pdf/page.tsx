import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PptxToPdfClient from "./PptxToPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconPresentation,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconShare,
    IconVideo,
    IconDeviceTv,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypePpt,
    IconFileTypePdf,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert PPT to PDF Online Free – Fast PowerPoint to PDF | PDF Maya",
    description:
        "Convert Microsoft PowerPoint presentations (PPTX, PPT) to PDF documents online for free. Lock slide layouts, fonts, and graphics for universal viewing with 100% privacy.",
    keywords: [
        "ppt to pdf",
        "pptx to pdf",
        "convert powerpoint to pdf",
        "save ppt as pdf",
        "powerpoint to pdf converter free",
        "convert slides to pdf online",
        "free online ppt to pdf",
    ],
    alternates: {
        canonical: "/pptx-to-pdf",
    },
    openGraph: {
        title: "Convert PPT to PDF Online Free – Fast PowerPoint to PDF | PDF Maya",
        description:
            "Convert Microsoft PowerPoint presentations (PPTX, PPT) to PDF documents online for free. Lock slide layouts and fonts.",
        url: "/pptx-to-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert PPT to PDF Online Free | PDF Maya",
        description:
            "Convert PPTX and PPT presentation slides into secure, standardized PDF files instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PowerPoint Deck",
        body: "Select your PowerPoint presentation (.pptx or .ppt) from your computer or mobile device and drop it above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Slide-to-Page Rendering",
        body: "Click 'Convert to PDF'. Our engine converts each slide into a high-fidelity PDF page preserving graphics and typography.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Universal PDF",
        body: "Your PDF presentation is ready immediately. Download your clean, fixed-layout file ready for presentations and handouts.",
    },
];

const FEATURES = [
    {
        icon: IconPresentation,
        title: "Exact Slide & Font Fidelity",
        body: "Locks in custom presentation typography, shapes, diagrams, and alignments so your slides never look distorted.",
    },
    {
        icon: IconDeviceTv,
        title: "Universal Presentation Display",
        body: "Present smoothly on conference screens, projectors, and client laptops without worrying about missing fonts.",
    },
    {
        icon: IconShare,
        title: "Lightweight Sharing & Printing",
        body: "Reduces bloated slide file sizes for effortless emailing and formats slides perfectly for A4 or Letter handouts.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Convert your presentation decks without paying subscription fees, watching ads, or receiving watermarked slides.",
    },
    {
        icon: IconShieldLock,
        title: "Confidential & Secure",
        body: "All transmissions are encrypted via SSL/TLS. Your private presentations and corporate decks are deleted immediately.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Cross-Platform Access",
        body: "Convert PowerPoint files on macOS, Windows, Linux, iOS, and Android directly from your browser.",
    },
];

const USE_CASES = [
    {
        icon: IconShare,
        title: "Client Pitch Decks & Proposals",
        body: "Distribute sales pitches and corporate proposals in an unalterable format that protects your design and proprietary data.",
    },
    {
        icon: IconVideo,
        title: "Conference Handouts & Slide Notes",
        body: "Provide conference attendees and webinar participants with clean, printable PDF handouts of your keynotes.",
    },
    {
        icon: IconPresentation,
        title: "Academic Seminars & Lectures",
        body: "Publish lecture slides for students in the universal PDF standard readable on all phones, tablets, and e-readers.",
    },
    {
        icon: IconDeviceTv,
        title: "Public Kiosks & Digital Displays",
        body: "Load fixed-layout PDF slide decks onto public digital signage, event kiosks, and exhibition monitors effortlessly.",
    },
];

const FAQS = [
    {
        q: "How do I convert a PowerPoint presentation to PDF for free?",
        a: "Upload your PPTX or PPT file to the converter above and click 'Convert to PDF'. In seconds, your slides are rendered into a high-quality PDF ready for download.",
    },
    {
        q: "Will animations and transitions be preserved?",
        a: "Animations and transitions are converted into clean, static final-state slides so that all information remains visible and readable.",
    },
    {
        q: "Can recipients view the converted PDF without Microsoft Office?",
        a: "Yes! PDFs can be opened on any computer, tablet, or smartphone natively in any web browser without needing PowerPoint installed.",
    },
    {
        q: "Are my corporate presentation files safe and private?",
        a: "Yes. All file uploads and downloads are encrypted via HTTPS (SSL/TLS). Files are processed strictly on isolated servers and automatically deleted once the conversion is complete.",
    },
    {
        q: "Does this tool support older .ppt files as well as .pptx?",
        a: "Yes. PDF Maya supports standard modern .pptx presentations as well as legacy Microsoft PowerPoint 97-2003 .ppt files.",
    },
    {
        q: "Are there any watermarks or page limits?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your converted PDF presentations.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to PPT", href: "/pdf-to-pptx", desc: "Convert PDF slides back into editable PowerPoint files.", icon: IconPresentation },
    { label: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word documents to clean PDF files.", icon: IconFileWord },
    { label: "Excel to PDF", href: "/excel-to-pdf", desc: "Convert spreadsheets to clean PDF documents.", icon: IconTable },
    { label: "JPG to PDF", href: "/jpg-to-pdf", desc: "Combine photos and images into a single PDF.", icon: IconPhoto },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
];

export default function PptxToPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "PowerPoint to PDF Converter - PDF Maya",
        url: "https://pdfmaya.com/pptx-to-pdf",
        description: "Convert Microsoft PowerPoint presentations (PPTX, PPT) to PDF documents online for free.",
        applicationCategory: "PresentationApplication",
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
        name: "How to Convert PowerPoint to PDF Online",
        description: "Step-by-step guide to converting a PowerPoint presentation into a PDF document with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#C43E1C]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fee2e2]">
                                <IconFileTypePpt size={13} stroke={2.5} />
                            </span>
                            <span>PowerPoint</span>
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
                        Convert PowerPoint to PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transform Microsoft PowerPoint (.pptx, .ppt) slides into fixed-layout, shareable PDF documents. Fast, free, and perfectly formatted.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PptxToPdfClient />
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
                                How to Convert PowerPoint to PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to transform presentation slides into universal PDF documents.
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
                                Why Convert PPT to PDF with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Preserve your presentation aesthetics, fonts, and slide layouts without software dependencies.
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
                                When to Use the PowerPoint to PDF Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Deliver flawless presentations, client decks, training guides, and academic handouts.
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
                                Everything you need to know about converting PowerPoint slides to PDF format.
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
