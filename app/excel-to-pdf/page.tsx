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
        step: "01",
        icon: IconUpload,
        title: "Upload Your Excel Workbook",
        body: "Drag and drop your spreadsheet (.xlsx, .xls, or .csv) into the converter area above or click to select from your device.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Table Layout Optimization",
        body: "Click 'Convert to PDF'. Our engine scales sheets, preserves gridlines, aligns cell data, and optimizes tables for standard page sizes.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Print-Ready PDF",
        body: "Your PDF document is ready immediately. Download your fixed-layout file that opens reliably without cell shifting on any screen.",
    },
];

const FEATURES = [
    {
        icon: IconTable,
        title: "Fixed Table & Column Alignment",
        body: "Lock column widths, row heights, font sizes, and custom cell formatting so tables don't wrap unexpectedly on different computers.",
    },
    {
        icon: IconPrinter,
        title: "Print-Ready Page Scaling",
        body: "Automatically fits wide data tables and reports to standard Letter and A4 page dimensions for crisp printing.",
    },
    {
        icon: IconChartBar,
        title: "Chart & Graph Rendering",
        body: "Renders financial charts, bar graphs, trendlines, and pivot visuals in full vector resolution within the PDF.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Convert your spreadsheets without subscription charges, registration walls, watermarks, or credit card requirements.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Secure Processing",
        body: "All transmissions are encrypted via SSL/TLS. Your proprietary financial spreadsheets are deleted immediately after conversion.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Universal Cross-Device Viewing",
        body: "Recipients don't need Microsoft Excel installed to review your reports; the output PDF opens seamlessly on any smartphone, tablet, or PC.",
    },
];

const USE_CASES = [
    {
        icon: IconReceipt,
        title: "Invoices, Price Lists & Quotes",
        body: "Convert calculated pricing sheets and itemized invoices into unalterable, professional PDF estimates for clients.",
    },
    {
        icon: IconChartBar,
        title: "Executive Reports & KPI Dashboards",
        body: "Share quarterly sales statistics, business KPIs, and budget reviews with leadership in an easily readable format.",
    },
    {
        icon: IconFileSpreadsheet,
        title: "Schedules, Rosters & Attendance Logs",
        body: "Distribute employee shift schedules, project timelines, and event rosters that look clean and easy to print.",
    },
    {
        icon: IconTable,
        title: "Auditing & Financial Archives",
        body: "Archive year-end balance sheets, tax logs, and audit trails in the immutable PDF standard.",
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
        q: "Are my confidential numbers and data safe?",
        a: "Yes. All file uploads and downloads are encrypted via HTTPS (SSL/TLS). Files are processed strictly on isolated servers and automatically deleted once the conversion finishes.",
    },
    {
        q: "Does this tool support multiple sheets in an Excel workbook?",
        a: "Yes. The converter processes all active worksheets within your Excel workbook and combines them into sequential pages within the final PDF.",
    },
    {
        q: "Can I convert Excel to PDF on Mac or mobile devices?",
        a: "Yes. PDF Maya runs in any modern browser on macOS, Windows, Linux, iOS, and Android without needing Microsoft Office installed.",
    },
    {
        q: "Are there any watermarks or page limits?",
        a: "No. PDF Maya never adds watermarks, advertisements, or stamps to your converted PDF documents.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract PDF tables into editable Excel sheets.", icon: IconTable },
    { label: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word documents to clean PDF files.", icon: IconFileWord },
    { label: "JPG to PDF", href: "/jpg-to-pdf", desc: "Convert images to PDF documents.", icon: IconPhoto },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function ExcelToPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Excel to PDF Converter - PDF Maya",
        url: "https://pdfmaya.com/excel-to-pdf",
        description: "Convert Microsoft Excel spreadsheets (XLSX, XLS) into standardized PDF documents online for free.",
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
        description: "Step-by-step guide to converting an Excel spreadsheet into a PDF document with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#107C41]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f7ef]">
                                <IconFileTypeXls size={13} stroke={2.5} />
                            </span>
                            <span>Excel</span>
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
                        Transform Microsoft Excel (.xlsx, .xls, .csv) spreadsheets into fixed-layout, print-ready PDF documents. Fast, accurate, and completely free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <ExcelToPdfClient />
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
                                How to Convert Excel to PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to turn spreadsheets into professional, non-editable PDF files.
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
                                Why Convert Excel to PDF with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Ensure your financial data, reports, and calculations are shared securely and displayed cleanly.
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
                                When to Use the Excel to PDF Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Perfect for accounting, management reporting, inventory management, and invoice distribution.
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
                                Everything you need to know about converting spreadsheets to PDF format.
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
