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
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF Document",
        body: "Drag and drop your PDF containing tables, financial summaries, or invoices into the upload box above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Table Recognition & Extraction",
        body: "Click 'Convert to Excel'. Our engine scans rows, columns, numerical figures, and cell borders to construct structured spreadsheet grids.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Editable XLSX",
        body: "Your Microsoft Excel workbook is ready immediately. Download and open in Excel, Google Sheets, or Numbers to analyze data.",
    },
];

const FEATURES = [
    {
        icon: IconTable,
        title: "Smart Table & Column Detection",
        body: "Automatically identifies table boundaries, multi-column grids, and headers without manual row cropping.",
    },
    {
        icon: IconDatabase,
        title: "Accurate Numerical & Text Formatting",
        body: "Preserves numbers, currency symbols, percentages, and dates as editable spreadsheet cells ready for calculations.",
    },
    {
        icon: IconChartBar,
        title: "Multi-Page Batch Table Stitching",
        body: "Combines tables spanning across multiple consecutive PDF pages into continuous Excel worksheets.",
    },
    {
        icon: IconSparkles,
        title: "100% Free & No Watermarks",
        body: "Convert financial reports and tables with zero watermarks, no registration, and no hidden subscriptions.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Automatically Deleted",
        body: "Your sensitive financial and personal records are processed securely and permanently deleted immediately after conversion.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Cross-Platform Spreadsheet Access",
        body: "Compatible with Microsoft Excel, Microsoft 365, Google Sheets, LibreOffice Calc, and Apple Numbers.",
    },
];

const USE_CASES = [
    {
        icon: IconReceipt,
        title: "Bank Statements & Invoices",
        body: "Extract transaction histories, monthly statements, billing rows, and invoice breakdowns for seamless accounting reconciliation.",
    },
    {
        icon: IconChartBar,
        title: "Financial Reports & Balance Sheets",
        body: "Turn annual reports, profit & loss statements, and investor decks into dynamic Excel models for computational analysis.",
    },
    {
        icon: IconFileSpreadsheet,
        title: "Inventory & Catalog Listings",
        body: "Extract product SKUs, pricing charts, inventory stock logs, and vendor supplier lists without manual copy-pasting.",
    },
    {
        icon: IconTable,
        title: "Scientific & Survey Research Data",
        body: "Extract statistical research data, tabular study results, and laboratory test matrices into spreadsheets for statistical modeling.",
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
        q: "Are my financial and tax documents private and secure?",
        a: "Yes. PDF Maya uses end-to-end SSL/TLS encryption. Your documents are never stored permanently, viewed, or shared, and are deleted immediately after your session.",
    },
    {
        q: "Does this tool work with multi-page PDFs with many tables?",
        a: "Yes. Our extractor processes multi-page documents and converts all detected tables across every page into structured Excel worksheets.",
    },
    {
        q: "Do I need to install Microsoft Excel or special software?",
        a: "No. The entire conversion takes place online in your browser on any computer, tablet, or smartphone.",
    },
    {
        q: "Will there be any watermarks on the output spreadsheet?",
        a: "No. PDF Maya never inserts watermarks, promotional notes, or branding into your converted Excel sheets.",
    },
];

const RELATED_TOOLS = [
    { label: "Excel to PDF", href: "/excel-to-pdf", desc: "Turn spreadsheets into clean, locked PDF files.", icon: IconTable },
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
        description: "Convert PDF tables and spreadsheets into editable Microsoft Excel (XLSX) files online for free.",
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
        description: "Step-by-step guide to converting a PDF into an Excel spreadsheet with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#dc2626]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fee2e2]">
                                <IconFileTypePdf size={13} stroke={2.5} />
                            </span>
                            <span>PDF</span>
                        </div>
                        <IconArrowRight size={13} className="text-neutral-400" />
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#107C41]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f7ef]">
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
                        Extract PDF tables and tabular data into fully editable Microsoft Excel (.xlsx) spreadsheets. Fast, accurate, and completely free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PdfToExcelClient />
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
                                How to Convert PDF to Excel Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to transform static PDF tables into dynamic Excel workbooks.
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
                                Why Convert PDF to Excel with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Save hours of manual data entry with automated table recognition and column mapping.
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
                                When to Use the PDF to Excel Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Ideal for financial analysts, accountants, researchers, and operations teams.
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
                                Everything you need to know about extracting PDF tables into Excel workbooks.
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
