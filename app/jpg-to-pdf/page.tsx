import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JpgToPdfClient from "./JpgToPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconPhoto,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconLayersLinked,
    IconFileDescription,
    IconScan,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypeJpg,
    IconFileTypePdf,
    IconArrowRight,
    IconSortAscending,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert JPG to PDF Online Free – Combine Images to PDF | PDF Maya",
    description:
        "Convert JPG, PNG, WEBP, and TIFF images into a single PDF document online for free. Reorder pages, adjust margins, and download without watermarks.",
    keywords: [
        "jpg to pdf",
        "convert jpg to pdf",
        "image to pdf",
        "combine images into pdf",
        "jpeg to pdf converter",
        "convert photo to pdf free",
        "png to pdf",
        "free online image to pdf",
    ],
    alternates: {
        canonical: "/jpg-to-pdf",
    },
    openGraph: {
        title: "Convert JPG to PDF Online Free – Combine Images to PDF | PDF Maya",
        description:
            "Convert JPG, PNG, WEBP, and TIFF images into a single PDF document online for free. Reorder pages and adjust margins.",
        url: "/jpg-to-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert JPG to PDF Online Free | PDF Maya",
        description:
            "Turn photos, scan images, and graphics into standardized PDF documents instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your Image Files",
        body: "Select one or multiple JPG, PNG, WEBP, or TIFF photos from your phone, camera, or computer.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Arrange & Optimize Pages",
        body: "Reorder images sequentially, choose page orientations, adjust margins, and optimize resolution.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Combined PDF",
        body: "Your single compiled PDF document is ready instantly. Download and share freely across any platform.",
    },
];

const FEATURES = [
    {
        icon: IconLayersLinked,
        title: "Multi-Image Batch Merging",
        body: "Combine tens or hundreds of photos, receipts, or presentation slides into one sequential, organized PDF.",
    },
    {
        icon: IconSortAscending,
        title: "Visual Drag & Drop Reordering",
        body: "Easily reorder thumbnails with intuitive drag-and-drop controls before finalizing your document.",
    },
    {
        icon: IconPhoto,
        title: "Multi-Format Image Support",
        body: "Seamlessly converts JPG, JPEG, PNG, WEBP, TIFF, BMP, SVG, and mobile HEIC files.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Create clean, professional PDF documents with zero branding, watermarks, or file limitations.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Private Processing",
        body: "Client-side image conversion ensures your personal photos and sensitive receipts are processed securely.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Works on Mobile & Desktop",
        body: "Convert photos on the go straight from your smartphone camera, iPhone Photos, Android gallery, or desktop.",
    },
];

const USE_CASES = [
    {
        icon: IconScan,
        title: "Digitized Receipts & Expense Reports",
        body: "Snap photos of receipts, bills, and tax slips on your phone and compile them into a unified PDF for reimbursement.",
    },
    {
        icon: IconFileDescription,
        title: "ID Cards, Passports & Certificates",
        body: "Combine the front and back of driver's licenses, IDs, and certificates into a single, clean application document.",
    },
    {
        icon: IconPhoto,
        title: "Photo Albums & Design Portfolios",
        body: "Present high-resolution photographs, graphic artwork, and design mocks in a professional digital booklet.",
    },
    {
        icon: IconLayersLinked,
        title: "Whiteboard Notes & Lecture Slides",
        body: "Convert snapshots of meeting whiteboards, diagrams, and study notes into searchable, archivable documents.",
    },
];

const FAQS = [
    {
        q: "How do I combine multiple JPG images into a single PDF?",
        a: "Select multiple image files in the upload box above and click 'Convert to PDF'. All your images will be compiled into one unified PDF document in seconds.",
    },
    {
        q: "Can I change the order of images before creating the PDF?",
        a: "Yes! Click the 'Reorder & Adjust Pages' button after selecting your files to visually rearrange image thumbnails in your preferred sequence.",
    },
    {
        q: "Which image formats are supported?",
        a: "PDF Maya supports JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF, SVG, and mobile HEIC photo formats.",
    },
    {
        q: "Will image quality be reduced after conversion?",
        a: "No. Our converter maintains original image resolution, sharpness, and color fidelity without unwanted compression.",
    },
    {
        q: "Are my personal photos stored or shared?",
        a: "No. Your privacy is paramount. Processing occurs securely in isolated sandboxes and images are never permanently stored or shared.",
    },
    {
        q: "Is there a limit on how many images I can convert?",
        a: "You can convert multiple images at once without restrictions or daily limits.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages into high-resolution images.", icon: IconPhoto },
    { label: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word documents to clean PDF files.", icon: IconFileWord },
    { label: "Excel to PDF", href: "/excel-to-pdf", desc: "Convert spreadsheets to clean PDF documents.", icon: IconTable },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function JpgToPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "JPG to PDF Converter - PDF Maya",
        url: "https://pdfmaya.com/jpg-to-pdf",
        description: "Convert JPG, PNG, WEBP, and TIFF images into a single PDF document online for free.",
        applicationCategory: "MultimediaApplication",
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
        name: "How to Convert JPG to PDF Online",
        description: "Step-by-step guide to converting images into a PDF document with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#d97706]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fef3c7]">
                                <IconFileTypeJpg size={13} stroke={2.5} />
                            </span>
                            <span>Images</span>
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
                        Convert JPG to PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transform photos, scanned images, and graphics into standardized, high-quality PDF documents. Fast, private, and completely free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <JpgToPdfClient />
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
                                How to Convert JPG to PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to combine photos and image scans into a PDF file.
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
                                Why Convert Images to PDF with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Create organized, sharable documents from receipts, photos, IDs, and scanned notes.
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
                                When to Use the JPG to PDF Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Ideal for mobile scanning, expense management, identity verification, and photography.
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
                                Everything you need to know about combining images into PDF documents.
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
