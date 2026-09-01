import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfToExcelClient from "./PdfToExcelClient";
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
    IconFileTypePdf,
    IconFileTypeXls,
    IconArrowRight,
    IconDatabase,
    IconCheck,
    IconUserCheck,
    IconTrash,
    IconSchool,
    IconGavel,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert PDF to Excel Online Free – Fast PDF to XLSX | PDF Maya",
    description:
        "Convert PDF tables and spreadsheets into editable Microsoft Excel (XLSX, XLS) files online for free. Accurate column recognition, formula-ready tables, and 100% private.",
    keywords: [
        "pdf to excel",
        "convert pdf to excel",
        "pdf to xlsx",
        "pdf to xls converter",
        "extract table from pdf to excel",
        "pdf to excel converter online free",
        "convert pdf to spreadsheet",
        "free online pdf to excel",
    ],
    alternates: {
        canonical: "/pdf-to-excel",
    },
    openGraph: {
        title: "Convert PDF to Excel Online Free – Fast PDF to XLSX | PDF Maya",
        description:
            "Convert PDF tables and spreadsheets into editable Microsoft Excel (XLSX, XLS) files online for free. Accurate column recognition and 100% private.",
        url: "/pdf-to-excel",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert PDF to Excel Online Free | PDF Maya",
        description:
            "Extract tables from PDF files into editable Microsoft Excel (.xlsx) spreadsheets instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "1",
        title: "Upload Your PDF Document",
        body: "Drag and drop your PDF containing tables, financial summaries, or invoices into the upload box above.",
    },
    {
        step: "2",
        title: "Table Recognition & Extraction",
        body: "Our engine scans rows, columns, numerical figures, and cell borders to construct structured spreadsheet grids.",
    },
    {
        step: "3",
        title: "Download Editable XLSX",
        body: "Your Microsoft Excel workbook is ready immediately. Download and open in Excel, Google Sheets, or Numbers to analyze data.",
    },
];

const FEATURES = [
    {
        icon: IconTable,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "Smart Table & Column Detection",
        body: "Automatically identifies table boundaries, multi-column grids, and headers without manual row cropping.",
    },
    {
        icon: IconDatabase,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Accurate Numerical Formatting",
        body: "Preserves numbers, currency symbols, percentages, and dates as editable spreadsheet cells ready for calculations.",
    },
    {
        icon: IconChartBar,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "Multi-Page Table Stitching",
        body: "Combines tables spanning across multiple consecutive PDF pages into continuous Excel worksheets.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "100% Free & No Watermarks",
        body: "Convert financial reports and tables with zero watermarks, no registration, and no hidden subscriptions.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "Encrypted & Automatically Deleted",
        body: "Your sensitive financial and personal records are processed securely and permanently deleted immediately after conversion.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Cross-Platform Spreadsheet Access",
        body: "Compatible with Microsoft Excel, Microsoft 365, Google Sheets, LibreOffice Calc, and Apple Numbers.",
    },
];

const USE_CASES = [
    {
        icon: IconReceipt,
        title: "Bank Statements & Invoices",
        desc: "Extract transaction histories, monthly statements, billing rows, and invoice breakdowns for seamless accounting reconciliation.",
    },
    {
        icon: IconChartBar,
        title: "Financial Reports & Balance Sheets",
        desc: "Turn annual reports, profit & loss statements, and investor decks into dynamic Excel models for computational analysis.",
    },
    {
        icon: IconFileSpreadsheet,
        title: "Inventory & Catalog Listings",
        desc: "Extract product SKUs, pricing charts, inventory stock logs, and vendor supplier lists without manual copy-pasting.",
    },
    {
        icon: IconSchool,
        title: "Scientific & Survey Research Data",
        desc: "Extract statistical research data, tabular study results, and laboratory test matrices into spreadsheets for modeling.",
    },
];

const FAQS = [
    {
        q: "How do I convert a PDF table to an Excel spreadsheet?",
        a: "Upload your PDF file to the tool above and click 'Convert to Excel'. The system automatically detects data tables and converts them into a downloadable Microsoft Excel (.xlsx) file.",
    },
    {
        q: "Can I edit the formulas and numbers in the converted Excel file?",
        a: "Yes. All extracted numbers and text are rendered into standard Excel cells, allowing you to create formulas, apply formatting, and build charts immediately.",
    },
    {
        q: "Will multi-page tables be merged properly?",
        a: "Yes. PDF Maya detects repeating headers and aligns sequential page tables into continuous Excel worksheets.",
    },
    {
        q: "Are my confidential financial records secure?",
        a: "Yes. All transmissions are encrypted via 256-bit SSL/TLS. Uploaded files are processed in isolated memory and deleted immediately after download.",
    },
    {
        q: "Do I need to install Microsoft Office or Excel?",
        a: "No. PDF Maya works 100% online in your web browser. You can view and edit the generated .xlsx file in Microsoft Excel, Google Sheets, Apple Numbers, or LibreOffice.",
    },
    {
        q: "Are there any watermarks added to the Excel file?",
        a: "No. PDF Maya never adds watermarks, stamps, or logos to your converted spreadsheets.",
    },
];

const RELATED_TOOLS = [
    { label: "Excel to PDF", href: "/excel-to-pdf", desc: "Convert Excel sheets to clean PDF documents.", icon: IconFileTypePdf },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages to high-resolution images.", icon: IconPhoto },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function PdfToExcelPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "PDF to Excel Converter - PDF Maya",
        url: "https://pdfmaya.com/pdf-to-excel",
        description: "Convert PDF tables and spreadsheets into editable Microsoft Excel (XLSX, XLS) files online for free.",
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
        name: "How to Convert PDF to Excel Online",
        description: "Step-by-step guide to extracting tables from PDF into Microsoft Excel with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#107C41]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f4ea]">
                                <IconFileTypeXls size={13} stroke={2.5} />
                            </span>
                            <span>Excel (.xlsx)</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Convert PDF to Excel
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Extract PDF tables into fully editable Microsoft Excel (.xlsx) spreadsheets. Fast, accurate, and completely free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PdfToExcelClient />
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
                                How to Convert PDF to Excel
                            </h2>
                            <p className="text-base text-neutral-600">
                                Extract data tables into editable spreadsheets in 3 simple steps.
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
                                The Best PDF to Excel Converter
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Accurate cell border parsing, numerical typing, and multi-page table reconstruction make PDF data analysis effortless.
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
                                Structure Detection &amp; Formula-Ready Output
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya deconstructs table lines into authentic spreadsheet rows, columns, and numeric formats.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Genuine Native Excel Grid Cells
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Converts PDF text lines into structured worksheet cells. No floating text boxes or awkward merged column shifts.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Automatic Number &amp; Currency Typing
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Financial values, dollar signs, percentages, and decimals are mapped as true numerical types ready for SUM and AVERAGE formulas.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Multi-Page Statement Stitching
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Bank statements and ledger sheets spanning dozens of pages are consolidated into single, unbroken worksheet tabs.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Cross-Suite Compatibility
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Generated .xlsx workbooks open seamlessly in Microsoft 365, Excel Desktop, Google Sheets, Apple Numbers, and LibreOffice Calc.
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
                                Practical PDF to Excel Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Accelerate financial modeling, bookkeeping, and research analysis.
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
                                We prioritize document confidentiality and financial data security at every stage.
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
                                    Uploaded PDFs and converted XLSX files are purged automatically from memory.
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
                                Everything you need to know about converting PDFs to Excel spreadsheets.
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
