import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNumberPdfClient from "./PageNumberPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconListNumbers,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconTypography,
    IconFileDescription,
    IconAdjustmentsHorizontal,
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
    title: "Add Page Numbers to PDF Online Free – Customize Header & Footer | PDF Maya",
    description:
        "Add sequential page numbers, headers, and footers to PDF documents online for free. Custom typography, starting offsets, margin positioning, and 100% privacy.",
    keywords: [
        "page numbers pdf",
        "add page numbers to pdf",
        "number pdf pages online free",
        "pdf bates numbering",
        "insert page numbers in pdf",
        "page counter pdf",
        "free online page number pdf",
    ],
    alternates: {
        canonical: "/page-number-pdf",
    },
    openGraph: {
        title: "Add Page Numbers to PDF Online Free – Customize Header & Footer | PDF Maya",
        description:
            "Add sequential page numbers, headers, and footers to PDF documents online for free. Custom typography and positioning.",
        url: "/page-number-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Add Page Numbers to PDF Online Free | PDF Maya",
        description:
            "Number pages, chapters, and appendices in any PDF file with customized positioning and font styling.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF Document",
        body: "Select your eBook, research thesis, or court filing and drop it into the numbering tool above.",
    },
    {
        step: "02",
        icon: IconAdjustmentsHorizontal,
        title: "Choose Position & Format",
        body: "Pick your layout position (bottom-center, bottom-right, header) and numbering format (e.g., '1, 2, 3' or 'Page 1 of N').",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Numbered PDF",
        body: "Your numbered document is compiled instantly. Download and share clean, professional pagination.",
    },
];

const FEATURES = [
    {
        icon: IconListNumbers,
        title: "Multiple Numbering Formats",
        body: "Supports standard integers ('1, 2, 3'), Roman numerals ('i, ii, iii'), and compound templates ('Page 1 of 50').",
    },
    {
        icon: IconAdjustmentsHorizontal,
        title: "Flexible Margin Placement",
        body: "Position numbers across 6 standard zones: top-left, top-center, top-right, bottom-left, bottom-center, or bottom-right.",
    },
    {
        icon: IconTypography,
        title: "Custom Start Offsets & Cover Skip",
        body: "Start numbering from any page index and skip the cover page or introductory table of contents easily.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Number unlimited multi-page documents without paying subscription fees or getting branded stamps.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Cross-Platform Access",
        body: "Add page numbers directly in your web browser on iPad, iPhone, Android, macOS, Windows, and Linux.",
    },
];

const USE_CASES = [
    {
        icon: IconFileDescription,
        title: "Academic Theses & Dissertations",
        body: "Meet university formatting guidelines by adding standard bottom-center pagination starting after the abstract.",
    },
    {
        icon: IconAdjustmentsHorizontal,
        title: "Legal Briefs & Bates Numbering",
        body: "Sequential pagination required by courts and legal discovery auditors for evidence binders and contracts.",
    },
    {
        icon: IconListNumbers,
        title: "Corporate Annual Reports",
        body: "Ensure executive summaries, financial tables, and glossaries are easy to reference during shareholder meetings.",
    },
    {
        icon: IconTypography,
        title: "eBooks & Training Manuals",
        body: "Give students and readers clear progress markers and table-of-contents parity across training materials.",
    },
];

const FAQS = [
    {
        q: "How do I add page numbers to a PDF for free?",
        a: "Upload your document to the tool above, click 'Launch Page Numbering Tool', select your preferred position and format, and click 'Apply Page Numbers' to download.",
    },
    {
        q: "Can I skip numbering on the cover page?",
        a: "Yes! You can choose to skip the first page (cover) or any specified starting range, ensuring numbers only appear where intended.",
    },
    {
        q: "Can I use formats like 'Page X of Y'?",
        a: "Yes. PDF Maya supports custom dynamic template strings including total page counts ('Page 1 of 24').",
    },
    {
        q: "Are my uploaded files kept confidential?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated sandbox environments and deleted immediately after processing.",
    },
    {
        q: "Can I customize the font size and color?",
        a: "Yes! You can adjust the font size, typeface, and color to seamlessly blend with your document's existing layout.",
    },
    {
        q: "Are there any watermarks added by PDF Maya?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your output PDF files.",
    },
];

const RELATED_TOOLS = [
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
    { label: "Organise Pages", href: "/organise-pdf", desc: "Reorder, duplicate, or delete pages in a PDF.", icon: IconListNumbers },
    { label: "Rotate PDF", href: "/rotate-pdf", desc: "Rotate upside-down pages 90° or 180°.", icon: IconAdjustmentsHorizontal },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
];

export default function PageNumberPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Page Numbering Tool - PDF Maya",
        url: "https://pdfmaya.com/page-number-pdf",
        description: "Add sequential page numbers, headers, and footers to PDF documents online for free.",
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
        name: "How to Add Page Numbers to a PDF Online",
        description: "Step-by-step guide to inserting page numbers in PDF files with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#059669]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#d1fae5]">
                                <IconListNumbers size={13} stroke={2.5} />
                            </span>
                            <span>Document Pagination</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Add Page Numbers to PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Insert customized sequential page numbers, headers, and footers into your PDF documents in seconds.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PageNumberPdfClient />
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
                                How to Add Page Numbers to a PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to apply clean, professional pagination across your entire document.
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
                                Why Number PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Pixel-perfect header and footer alignment with complete typographic control.
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
                                When to Use the PDF Page Numbering Tool
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Essential for academic research theses, court evidence binders, annual shareholder reports, and eBooks.
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
                                Everything you need to know about numbering and paginating PDF files.
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
