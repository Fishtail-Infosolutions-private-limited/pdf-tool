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
    IconCheck,
    IconGavel,
    IconReceipt,
    IconTrash,
    IconUserCheck,
    IconLayoutGrid,
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
        step: "1",
        title: "Upload Your PDF Document",
        body: "Select your rotated or scanned PDF document from your device and drop it into the box above.",
    },
    {
        step: "2",
        title: "Rotate Single or All Pages",
        body: "Click individual page rotation buttons or rotate the entire document 90°, 180°, or 270° clockwise.",
    },
    {
        step: "3",
        title: "Download Fixed PDF",
        body: "Your permanently reoriented PDF document is ready instantly. Download and view seamlessly anywhere.",
    },
];

const FEATURES = [
    {
        icon: IconRotateClockwise2,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Single Page & Full File Rotation",
        body: "Rotate specific inverted pages or rotate all pages uniformly with a single click.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "Permanent Metadata Orientation",
        body: "Saves new page orientation directly to the PDF specification so it opens correctly in every viewer.",
    },
    {
        icon: IconFileDescription,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "Lossless Visual Quality",
        body: "Orientation changes do not recompress images or degrade text clarity in any way.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "256-Bit SSL & Auto-Deletion",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceMobile,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "Mobile Friendly & Responsive",
        body: "Rotate mobile scan uploads effortlessly on iPhone, iPad, Android, macOS, and Windows browsers.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "100% Free & Unlimited",
        body: "Fix as many PDF files as you need with zero watermarks, registration gates, or file fees.",
    },
];

const USE_CASES = [
    {
        icon: IconScan,
        title: "Inverted Mobile Scanner Feeds",
        desc: "Fix documents fed upside-down or sideways into flatbed office scanners and mobile camera apps.",
    },
    {
        icon: IconFileDescription,
        title: "Landscape Spreadsheets & Blueprints",
        desc: "Align landscape architectural plans, Gantt charts, and wide spreadsheets to readable orientations.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Presentation Slides & Pitch Decks",
        desc: "Standardize slide orientations so presentations display correctly on projector screens and external monitors.",
    },
    {
        icon: IconGavel,
        title: "Legal Exhibits & Notarized Scans",
        desc: "Ensure notarized court filings, affidavits, and bank statements are properly aligned before filing.",
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
        a: "Yes! You can rotate individual pages independently (e.g. rotating only page 3 by 90° clockwise while leaving the rest unchanged).",
    },
    {
        q: "Will rotating pages decrease the text or image resolution?",
        a: "No. Rotating pages only modifies the orientation viewport angle. Your text, high-resolution photos, and vector art remain 100% unaltered.",
    },
    {
        q: "Are my uploaded documents secure?",
        a: "Yes. All transmissions are protected by 256-bit SSL encryption. Uploaded documents and rotated files are automatically purged from our servers.",
    },
    {
        q: "Do I need to install any software or plugins?",
        a: "No. PDF Maya works entirely inside your web browser without installing desktop software or extensions.",
    },
];

const RELATED_TOOLS = [
    { label: "Organise Pages", href: "/organise-pdf", desc: "Reorder, rotate, and manage pages in your PDF.", icon: IconLayoutGrid },
    { label: "Remove Pages", href: "/remove-pages", desc: "Delete unwanted or blank pages from your PDF.", icon: IconTrash },
    { label: "Split PDF", href: "/split-pdf", desc: "Extract specific pages or page ranges from a PDF.", icon: IconArrowsJoin2 },
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
        description: "Step-by-step guide to rotating and permanently orienting PDF pages with PDF Maya.",
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
                                <IconRotateClockwise2 size={13} stroke={2.5} />
                            </span>
                            <span>Document Organization</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Rotate PDF Pages Online
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Rotate single pages or entire PDF documents permanently. Fix upside-down scans and landscape layouts in seconds.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <RotatePdfClient />
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
                                How to Rotate PDF Pages
                            </h2>
                            <p className="text-base text-neutral-600">
                                Correct document orientation in 3 simple steps.
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
                                The Best PDF Rotator Online
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Permanently fix document angles with native metadata updates and zero quality compression.
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
                                Permanent Orientation &amp; Lossless Quality
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya updates the native viewport transformation matrix so pages stay properly aligned across all devices.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Permanent Across All PDF Readers
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Saved rotations apply permanently to the PDF header. The file opens correctly in Adobe Acrobat, Apple Preview, Chrome, and iOS readers.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Lossless Text &amp; Image Preservation
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Rotating pages changes the viewport angle without touching embedded fonts, bitmaps, or vector drawings, ensuring 100% original fidelity.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Independent Per-Page Controls
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Rotate single landscape diagrams in a portrait document, or rotate upside-down scanner pages without affecting the rest of the file.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Retains Links, Form Fields &amp; Bookmarks
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Interactive elements, bookmarks, hyperlinks, and form input fields automatically adjust their coordinates to remain fully functional.
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
                                Practical PDF Rotation Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Simplify document workflows across business, legal, academic, and personal tasks.
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
                                We prioritize document confidentiality and data security at every stage of the process.
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
                                    Uploaded PDFs and rotated files are purged automatically from memory.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5] flex items-center justify-center shadow-2xs">
                                    <IconUserCheck size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">No Account Needed</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    Rotate unlimited files without registration, emails, or paywalls.
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
