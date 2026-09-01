import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfToTxtClient from "./PdfToTxtClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconFileText,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconCode,
    IconDatabase,
    IconCopy,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypePdf,
    IconFileTypeTxt,
    IconArrowRight,
    IconCheck,
    IconUserCheck,
    IconTrash,
    IconSchool,
    IconGavel,
    IconReceipt,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert PDF to Text Online Free – Extract TXT from PDF | PDF Maya",
    description:
        "Extract raw, unformatted text from PDF files online for free. Strip layout clutter and get clean TXT files for programming, NLP, and copy-pasting with 100% privacy.",
    keywords: [
        "pdf to text",
        "convert pdf to txt",
        "extract text from pdf",
        "pdf to text converter free",
        "pdf text extractor online",
        "raw text from pdf",
        "free online pdf to txt",
    ],
    alternates: {
        canonical: "/pdf-to-txt",
    },
    openGraph: {
        title: "Convert PDF to Text Online Free – Extract TXT from PDF | PDF Maya",
        description:
            "Extract raw, unformatted text from PDF files online for free. Strip layout clutter and get clean TXT files.",
        url: "/pdf-to-txt",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert PDF to Text Online Free | PDF Maya",
        description:
            "Extract clean plain text from PDF documents instantly for analysis, notes, or coding.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "1",
        title: "Upload Your PDF File",
        body: "Select your PDF document from your device or drag and drop it into the text extractor above.",
    },
    {
        step: "2",
        title: "Text Extraction Engine",
        body: "Our engine parses character encodings and extracts pure UTF-8 text strings without layout clutter.",
    },
    {
        step: "3",
        title: "Download Plain .TXT File",
        body: "Your clean, lightweight .txt document is ready immediately. Download and open in any text or code editor.",
    },
];

const FEATURES = [
    {
        icon: IconFileText,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Clean Plain UTF-8 Text",
        body: "Strips styling tags, page borders, and images to deliver clean, unformatted raw text strings.",
    },
    {
        icon: IconCode,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "Developer & NLP Friendly",
        body: "Ideal for feeding document corpora into Python, LLM prompts, machine learning pipelines, and data parsers.",
    },
    {
        icon: IconCopy,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "Effortless Copy & Pasting",
        body: "Grab whole articles, terms of service, and transcripts without annoying line-break formatting artifacts.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "100% Free with No Watermarks",
        body: "Extract text from unlimited PDF documents without subscriptions, credit cards, or quotas.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "Encrypted & Confidential",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Cross-Platform Access",
        body: "Extract text directly in your web browser on Mac, Windows, Linux, iOS, and Android devices.",
    },
];

const USE_CASES = [
    {
        icon: IconCode,
        title: "AI Prompts & NLP Datasets",
        desc: "Feed extracted PDF text directly into ChatGPT, Claude, custom embeddings, and natural language pipelines.",
    },
    {
        icon: IconDatabase,
        title: "Data Scraping & Mining",
        desc: "Parse thousands of words from government reports, scientific papers, and corporate filings for automated analysis.",
    },
    {
        icon: IconCopy,
        title: "Notes & Markdown Writing",
        desc: "Paste text cleanly into Obsidian, Notion, Apple Notes, or VS Code without messy background text boxes.",
    },
    {
        icon: IconSchool,
        title: "Audio Synthesizer Scripts",
        desc: "Convert PDF articles into pure text files suitable for text-to-speech synthesizers, screen readers, and podcast scripts.",
    },
];

const FAQS = [
    {
        q: "How do I extract text from a PDF for free?",
        a: "Upload your PDF to the tool above and click 'Extract Plain Text (.txt)'. In seconds, your plain text file will download automatically.",
    },
    {
        q: "Will images or formatting be included in the .txt file?",
        a: "No. The .txt format contains only raw text characters, stripping away all styling, images, and formatting for maximum portability.",
    },
    {
        q: "Can I extract text from scanned PDFs?",
        a: "If your PDF is an image scan without a digital text layer, use our OCR PDF tool first to recognize characters and generate copyable text.",
    },
    {
        q: "Are my confidential files secure?",
        a: "Yes. All transmissions are protected with end-to-end HTTPS encryption. Uploaded documents and extracted TXT files are deleted automatically right after processing.",
    },
    {
        q: "Is there any software installation required?",
        a: "No. PDF Maya extracts text 100% online in your web browser without requiring desktop software or extensions.",
    },
    {
        q: "Are there any file size or word count limits?",
        a: "No. You can extract text from large multi-page books and documents completely free of charge.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to EPUB", href: "/pdf-to-epub", desc: "Convert PDFs to reflowable eBook formats.", icon: IconFileText },
    { label: "OCR PDF", href: "/ocr-pdf", desc: "Extract text from scanned PDFs with optical recognition.", icon: IconSettings },
    { label: "Search PDF", href: "/search-pdf", desc: "Find words and highlight matches in PDF files.", icon: IconSettings },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
];

export default function PdfToTxtPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "PDF to Text Converter - PDF Maya",
        url: "https://pdfmaya.com/pdf-to-txt",
        description: "Extract raw, unformatted text from PDF files online for free.",
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
        name: "How to Convert PDF to Text Online",
        description: "Step-by-step guide to extracting plain text from PDF documents with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#185ABD]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e0ecfc]">
                                <IconFileTypeTxt size={13} stroke={2.5} />
                            </span>
                            <span>Plain Text (.txt)</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Convert PDF to Text
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Extract clean, unformatted plain text (.txt) from any PDF document in seconds. 100% free with no registration.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PdfToTxtClient />
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
                                How to Convert PDF to Text
                            </h2>
                            <p className="text-base text-neutral-600">
                                Extract raw text strings in 3 simple steps.
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
                                The Best PDF to Text Extractor
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Strip away complicated design layers and get clean, sequential UTF-8 text ready for code, AI models, and note-taking.
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
                                UTF-8 Encoding &amp; Character Stream Extraction
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya reads raw content streams and reconstructs natural reading flow across multi-column pages.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Pure Universal UTF-8 Output
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Converts non-standard font encodings into universal UTF-8 text strings compatible with any text editor or coding environment.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Eliminates Hard Line-Breaks
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Connects broken sentences across margins and paragraphs for clean, seamless copy-pasting into notes and documents.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Multi-Column Sequential Flow
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Processes newspapers, research journals, and magazines column-by-column rather than mixing horizontal text lines.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Zero Clutter, Zero Bloat
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Strips all image data, CSS tags, and styling overhead to produce tiny, lightning-fast text files.
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
                                Practical PDF to Text Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Extract clean copy across programming, writing, research, and machine learning workflows.
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
                                We prioritize document confidentiality and data privacy across all extraction tasks.
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
                                    Uploaded PDFs and extracted TXT files are purged automatically from memory.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5] flex items-center justify-center shadow-2xs">
                                    <IconUserCheck size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">No Account Needed</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    Extract unlimited files without registration, emails, or paywalls.
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
                                Everything you need to know about extracting plain text from PDF files.
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
