import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExcelToPdfClient from "./ExcelToPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconTable,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconChartBar,
    IconReceipt,
    IconFileSpreadsheet,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconPhoto,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypeXls,
    IconFileTypePdf,
    IconArrowRight,
    IconPrinter,
    IconCheck,
    IconUserCheck,
    IconTrash,
    IconSchool,
    IconGavel,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert Excel to PDF Online Free – Fast XLSX to PDF | PDF Maya",
    description:
        "Convert Microsoft Excel spreadsheets (XLSX, XLS, CSV) into standardized PDF documents online for free. Maintain table formatting, fit to page, and ensure 100% privacy.",
    keywords: [
        "excel to pdf",
        "convert excel to pdf",
        "xlsx to pdf",
        "xls to pdf converter",
        "convert spreadsheet to pdf",
        "excel to pdf online free",
        "save excel as pdf",
        "free online excel to pdf converter",
    ],
    alternates: {
        canonical: "/excel-to-pdf",
    },
    openGraph: {
        title: "Convert Excel to PDF Online Free – Fast XLSX to PDF | PDF Maya",
        description:
            "Convert Microsoft Excel spreadsheets (XLSX, XLS, CSV) into standardized PDF documents online for free. Clean table formatting and 100% privacy.",
        url: "/excel-to-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert Excel to PDF Online Free | PDF Maya",
        description:
            "Convert XLSX and XLS workbooks into professional, print-ready PDF files instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "1",
        title: "Upload Your Excel Workbook",
        body: "Drag and drop your spreadsheet (.xlsx, .xls, or .csv) into the converter box above or click to browse files.",
    },
    {
        step: "2",
        title: "Table Layout Optimization",
        body: "Our engine scales sheets, preserves gridlines, aligns cell data, and optimizes tables for standard page sizes.",
    },
    {
        step: "3",
        title: "Download Print-Ready PDF",
        body: "Your PDF document is ready immediately. Download your fixed-layout file that opens reliably on any screen.",
    },
];

const FEATURES = [
    {
        icon: IconTable,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "Fixed Table & Column Alignment",
        body: "Lock column widths, row heights, font sizes, and custom cell formatting so tables don't wrap unexpectedly.",
    },
    {
        icon: IconPrinter,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Print-Ready Page Scaling",
        body: "Automatically fits wide data tables and reports to standard Letter and A4 page dimensions for crisp printing.",
    },
    {
        icon: IconChartBar,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "Chart & Graph Rendering",
        body: "Renders financial charts, bar graphs, trendlines, and pivot visuals in full vector resolution within the PDF.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "100% Free with No Watermarks",
        body: "Convert your spreadsheets without subscription charges, registration walls, watermarks, or credit cards.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "Encrypted & Secure Processing",
        body: "All transmissions are encrypted via SSL/TLS. Your proprietary financial spreadsheets are deleted immediately.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Universal Cross-Device Viewing",
        body: "Recipients don't need Microsoft Excel installed to review your reports; the output PDF opens seamlessly on any device.",
    },
];

const USE_CASES = [
    {
        icon: IconReceipt,
        title: "Invoices, Price Lists & Quotes",
        desc: "Convert calculated pricing sheets and itemized invoices into unalterable, professional PDF estimates for clients.",
    },
    {
        icon: IconChartBar,
        title: "Executive Reports & KPI Dashboards",
        desc: "Share quarterly sales statistics, business KPIs, and budget reviews with leadership in an easily readable format.",
    },
    {
        icon: IconFileSpreadsheet,
        title: "Schedules, Rosters & Attendance Logs",
        desc: "Distribute employee shift schedules, project timelines, and event rosters that look clean and easy to print.",
    },
    {
        icon: IconTable,
        title: "Auditing & Financial Archives",
        desc: "Archive year-end balance sheets, tax logs, and audit trails in the immutable, non-editable PDF standard.",
    },
];

const FAQS = [
    {
        q: "How do I convert an Excel spreadsheet to PDF for free?",
        a: "Upload your XLSX, XLS, or CSV file to the upload box above and click 'Convert to PDF'. In seconds, your spreadsheet is formatted into a clean PDF ready for download.",
    },
    {
        q: "Will my spreadsheet columns be cut off in the PDF?",
        a: "No. Our conversion engine uses intelligent page scaling to ensure that wide data tables and spreadsheet columns fit neatly onto standard printable pages.",
    },
    {
        q: "Can I convert multi-tab Excel workbooks?",
        a: "Yes. Worksheets in your Excel workbook are rendered into sequential PDF pages with consistent headers and column alignments.",
    },
    {
        q: "Are my confidential financial figures secure?",
        a: "Yes. All transmissions are protected with end-to-end 256-bit SSL encryption. Uploaded spreadsheets and converted PDFs are deleted automatically right after processing.",
    },
    {
        q: "Do I need Microsoft Excel installed on my device?",
        a: "No. PDF Maya converts spreadsheets completely in the cloud without requiring Microsoft Excel or Office 365 desktop software.",
    },
    {
        q: "Are there any watermarks added to the PDF?",
        a: "No. Output PDF documents remain 100% clean and free of watermarks or branding stamps.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract PDF tables into editable Excel sheets.", icon: IconFileSpreadsheet },
    { label: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word documents to clean PDF files.", icon: IconFileWord },
    { label: "PPT to PDF", href: "/pptx-to-pdf", desc: "Convert PowerPoint slides to PDF presentations.", icon: IconPhoto },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Protect PDF", href: "/protect-pdf", desc: "Encrypt PDF files with AES passwords.", icon: IconShieldLock },
];

export default function ExcelToPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Excel to PDF Converter - PDF Maya",
        url: "https://pdfmaya.com/excel-to-pdf",
        description: "Convert Microsoft Excel spreadsheets (XLSX, XLS, CSV) into standardized PDF documents online for free.",
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
        name: "How to Convert Excel to PDF Online",
        description: "Step-by-step guide to converting Microsoft Excel workbooks to PDF with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#107C41]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f4ea]">
                                <IconFileTypeXls size={13} stroke={2.5} />
                            </span>
                            <span>Excel (.xlsx)</span>
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
                        Convert Excel to PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transform Microsoft Excel workbooks (.xlsx, .xls, .csv) into clean, printable PDF documents in seconds. 100% free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <ExcelToPdfClient />
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
                                How to Convert Excel to PDF
                            </h2>
                            <p className="text-base text-neutral-600">
                                Fit tables and generate clean PDF files in 3 simple steps.
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
                                The Best Excel to PDF Converter
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Fit wide spreadsheets to printable pages automatically, preserve chart colors, and lock cells into read-only PDF reports.
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
                                Print Scaling &amp; Data Grid Preservation
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya eliminates truncated columns and broken data grids during spreadsheet PDF rendering.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Intelligent Sheet-to-Page Scaling
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Wide balance sheets and sprawling data tables are scaled intelligently to fit portrait or landscape Letter/A4 layouts.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Cell Styling &amp; Border Fidelity
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Background fills, currency symbols, custom date formats, and gridlines retain crisp contrast and styling.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Vector Charts &amp; Visual Assets
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Embedded bar graphs, pie charts, and sparklines are exported as razor-sharp vector graphics ready for print.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Multi-Sheet Sequential Export
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Multi-tab workbooks are converted into a single unified PDF document with sequentially numbered pages.
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
                                Practical Excel to PDF Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Lock and distribute financial models, price quotes, and operational schedules.
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
                                We prioritize financial data confidentiality and document security at every stage.
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
                                    Uploaded spreadsheets and converted PDFs are purged automatically from memory.
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
                                Everything you need to know about converting Excel spreadsheets to PDF.
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
