import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfToPptxClient from "./PdfToPptxClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconPresentation,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconTemplate,
    IconVideo,
    IconChartPie,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypePdf,
    IconFileTypePpt,
    IconArrowRight,
    IconCheck,
    IconUserCheck,
    IconTrash,
    IconSchool,
    IconGavel,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert PDF to PowerPoint Online Free – Fast PDF to PPTX | PDF Maya",
    description:
        "Convert PDF slides to editable Microsoft PowerPoint (PPTX, PPT) presentations online for free. Preserve slide layouts, formatting, and text boxes with 100% privacy.",
    keywords: [
        "pdf to ppt",
        "pdf to pptx",
        "convert pdf to powerpoint",
        "pdf to powerpoint converter free",
        "convert pdf slides to pptx",
        "pdf to ppt online",
        "free online pdf to powerpoint",
        "editable pptx from pdf",
    ],
    alternates: {
        canonical: "/pdf-to-pptx",
    },
    openGraph: {
        title: "Convert PDF to PowerPoint Online Free – Fast PDF to PPTX | PDF Maya",
        description:
            "Convert PDF slides to editable Microsoft PowerPoint (PPTX) presentations online for free. Preserve slide layouts and fonts.",
        url: "/pdf-to-pptx",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert PDF to PowerPoint Online Free | PDF Maya",
        description:
            "Transform static PDF slides into editable PowerPoint presentations instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "1",
        title: "Upload Your PDF Presentation",
        body: "Drag and drop your PDF pitch deck, webinar slides, or document into the upload box above.",
    },
    {
        step: "2",
        title: "Slide Element Reconstruction",
        body: "Our engine maps text blocks, images, shapes, and layouts into individual editable PowerPoint slides.",
    },
    {
        step: "3",
        title: "Download Editable PPTX",
        body: "Your Microsoft PowerPoint presentation is ready immediately. Download and customize slide transitions, text, and graphics.",
    },
];

const FEATURES = [
    {
        icon: IconPresentation,
        color: "bg-[#fee2e2] text-[#dc2626]",
        title: "Individual Slide Reconstruction",
        body: "Converts each PDF page into a distinct PowerPoint slide with editable text frames and positioned images.",
    },
    {
        icon: IconTemplate,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Preserved Themes & Layouts",
        body: "Retains background graphics, color schemes, typography, and bullet points without breaking design structure.",
    },
    {
        icon: IconChartPie,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "Diagram & Asset Extraction",
        body: "Isolates flowcharts, graphics, graphs, and infographics as movable objects on your slides.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "100% Free with No Watermarks",
        body: "Convert your presentation decks without paying subscription fees, watching ads, or receiving watermarked slides.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "Secure Cloud Deletion",
        body: "All transmissions are encrypted via SSL/TLS. Your private presentations and corporate decks are deleted immediately.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Universal Presentation Access",
        body: "Compatible with Microsoft PowerPoint, Google Slides, Apple Keynote, and LibreOffice Impress.",
    },
];

const USE_CASES = [
    {
        icon: IconPresentation,
        title: "Sales Decks & Pitch Presentations",
        desc: "Reactivate static PDF investor pitch decks and client proposals to customize figures, names, and case studies.",
    },
    {
        icon: IconVideo,
        title: "Webinar Slides & Conference Decks",
        desc: "Turn PDF keynote presentations into dynamic slideshows with custom animations, speaker notes, and transitions.",
    },
    {
        icon: IconChartPie,
        title: "Training Materials & Workshops",
        desc: "Repurpose corporate training booklets and slide handouts into interactive presentation modules for teams.",
    },
    {
        icon: IconSchool,
        title: "Academic Lectures & Thesis Defenses",
        desc: "Modify lecture notes and academic papers into presentation decks for seminars and classroom lectures.",
    },
];

const FAQS = [
    {
        q: "How do I convert a PDF to an editable PowerPoint presentation for free?",
        a: "Upload your PDF file to the converter above and click 'Convert to PowerPoint'. In seconds, your PDF will be converted into an editable Microsoft PowerPoint (.pptx) file ready for download.",
    },
    {
        q: "Will the text and images on the slides be editable in PowerPoint?",
        a: "Yes. Our conversion engine reconstructs text into editable text boxes and preserves images so you can reposition, edit, and animate them freely.",
    },
    {
        q: "Can I open the converted file in Google Slides or Apple Keynote?",
        a: "Yes. The output is a standard Microsoft PowerPoint .pptx file that opens smoothly in Microsoft PowerPoint, Google Slides, and Apple Keynote.",
    },
    {
        q: "Are my confidential presentations secure?",
        a: "Yes. All transmissions are protected with 256-bit SSL encryption. Uploaded documents and converted presentations are deleted automatically right after your session.",
    },
    {
        q: "Are there any slide limits or watermarks?",
        a: "No. You can convert large slide decks completely free with zero watermark stamps or branding overlays.",
    },
    {
        q: "Do I need to install desktop software?",
        a: "No. PDF Maya converts PDFs to PowerPoint presentations entirely online in your web browser.",
    },
];

const RELATED_TOOLS = [
    { label: "PPT to PDF", href: "/pptx-to-pdf", desc: "Convert PowerPoint slides to clean PDF documents.", icon: IconFileTypePdf },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract PDF tables into editable Excel sheets.", icon: IconTable },
    { label: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages to high-resolution images.", icon: IconPhoto },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
];

export default function PdfToPptxPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "PDF to PowerPoint Converter - PDF Maya",
        url: "https://pdfmaya.com/pdf-to-pptx",
        description: "Convert PDF slides to editable Microsoft PowerPoint (PPTX, PPT) presentations online for free.",
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
        name: "How to Convert PDF to PowerPoint Online",
        description: "Step-by-step guide to converting PDF slides into editable Microsoft PowerPoint files with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#dc2626]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fee2e2]">
                                <IconFileTypePdf size={13} stroke={2.5} />
                            </span>
                            <span>PDF</span>
                        </div>
                        <IconArrowRight size={13} className="text-neutral-400" />
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#d97706]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fef3c7]">
                                <IconFileTypePpt size={13} stroke={2.5} />
                            </span>
                            <span>PowerPoint (.pptx)</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Convert PDF to PowerPoint
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transform PDF documents into fully editable Microsoft PowerPoint (.pptx) slide decks in seconds. 100% free and accurate.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PdfToPptxClient />
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
                                How to Convert PDF to PowerPoint
                            </h2>
                            <p className="text-base text-neutral-600">
                                Transform PDF pages into editable PowerPoint slides in 3 simple steps.
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
                                The Best PDF to PPTX Converter
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Turn static documents into dynamic presentations with editable text blocks, high-res graphics, and preserved master slide themes.
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
                                Slide Geometry &amp; Typography Preservation
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya deconstructs PDF pages into genuine PowerPoint presentation assets rather than single static background images.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Editable Text Boxes &amp; Headers
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Paragraphs and slide titles are reconstructed as native PowerPoint text boxes with customizable fonts, weights, and color palettes.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Independent Graphic &amp; Chart Objects
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Photos, logos, infographics, and chart illustrations are extracted as distinct movable assets you can resize and reposition freely.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Standard Slide Aspect Ratios
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Automatically maps pages to standard 16:9 widescreen and 4:3 presentation slide formats for seamless modern projector display.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Full Google Slides &amp; Keynote Support
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Output files conform strictly to the OpenXML standard for frictionless importing into Google Slides, Keynote, and PowerPoint 365.
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
                                Practical PDF to PowerPoint Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Reactivate presentation assets across marketing, sales, academic, and training tasks.
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
                                We prioritize presentation confidentiality and corporate data security at every stage.
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
                                    Uploaded PDFs and converted PPTX files are purged automatically from memory.
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
                                Everything you need to know about converting PDFs to PowerPoint presentations.
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
