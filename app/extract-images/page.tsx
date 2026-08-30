import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExtractImagesClient from "./ExtractImagesClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconPhotoSearch,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconPhoto,
    IconFileDescription,
    IconPackage,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypePdf,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Extract Images from PDF Online Free – Pull Photos & Graphics | PDF Maya",
    description:
        "Extract all embedded images, pictures, and graphics from PDF documents online for free. Lossless quality recovery and bulk ZIP export with 100% privacy.",
    keywords: [
        "extract images from pdf",
        "pdf image extractor",
        "pull photos from pdf",
        "save images from pdf online",
        "extract pdf graphics free",
        "export photos from pdf",
        "free online pdf image extractor",
    ],
    alternates: {
        canonical: "/extract-images",
    },
    openGraph: {
        title: "Extract Images from PDF Online Free – Pull Photos & Graphics | PDF Maya",
        description:
            "Extract all embedded images, pictures, and graphics from PDF documents online for free. Lossless recovery with 100% privacy.",
        url: "/extract-images",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Extract Images from PDF Online Free | PDF Maya",
        description:
            "Rip and recover embedded photography, diagrams, and figures from any PDF file in seconds.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF Document",
        body: "Select your PDF brochure, presentation, or portfolio from your computer and drop it into the box above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Deep Asset Scanning",
        body: "Click 'Extract All Embedded Images'. Our engine parses the internal object streams and isolates raw image assets.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Images or ZIP",
        body: "Save individual high-resolution JPG/PNG photos or download all graphic assets in one neatly packaged ZIP file.",
    },
];

const FEATURES = [
    {
        icon: IconPhotoSearch,
        title: "Lossless Original Image Extraction",
        body: "Extracts original JPEG, PNG, and TIFF assets exactly as they were uploaded without lossy recompression.",
    },
    {
        icon: IconPackage,
        title: "One-Click Bulk ZIP Export",
        body: "Download hundreds of extracted photos, diagrams, and logos neatly organized in a single ZIP file.",
    },
    {
        icon: IconPhoto,
        title: "Strips Away Surrounding Text",
        body: "Isolates standalone picture elements without including body copy, watermarks, or page margins.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Extract images from unlimited documents with zero subscriptions, registration gates, or file fees.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Works Across All Devices",
        body: "Extract pictures on the go on iPhone, iPad, Android, macOS, Windows, and Linux browsers.",
    },
];

const USE_CASES = [
    {
        icon: IconPhoto,
        title: "Lost Original Asset Recovery",
        body: "Retrieve high-resolution product photography, marketing visuals, and brand graphics when raw camera files are lost.",
    },
    {
        icon: IconFileDescription,
        title: "Social Media & Marketing Content",
        body: "Repurpose charts, illustrations, and event photos from PDF annual reports and brochures for Instagram and LinkedIn.",
    },
    {
        icon: IconPackage,
        title: "Design Portfolio & Web Assets",
        body: "Harvest vector logos, user interface mockups, and client work samples from agency presentation decks.",
    },
    {
        icon: IconPhotoSearch,
        title: "Academic Research Figures",
        body: "Isolate microscope captures, medical scans, scientific graphs, and diagrams from published whitepapers.",
    },
];

const FAQS = [
    {
        q: "How do I extract images from a PDF for free?",
        a: "Upload your PDF to the tool above and click 'Extract All Embedded Images'. You will see all isolated photos and graphics ready to save individually or as a ZIP file.",
    },
    {
        q: "Will the extracted image quality be degraded?",
        a: "No. PDF Maya performs direct binary extraction of the image objects embedded inside the PDF file, preserving their full original resolution and color space.",
    },
    {
        q: "What is the difference between PDF to JPG and Extract Images?",
        a: "PDF to JPG renders entire pages as continuous picture files (including text and headers). Extract Images pulls out only the isolated photos, graphics, and logos without any text.",
    },
    {
        q: "Are my uploaded PDF files kept private?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated sandbox environments and deleted immediately after processing.",
    },
    {
        q: "In what format are the extracted images saved?",
        a: "Images are saved in their native embedded formats (typically high-quality JPG or PNG) packaged inside a ZIP archive.",
    },
    {
        q: "Are there any watermarks added to the extracted pictures?",
        a: "No. PDF Maya never places watermarks, stamps, or logos on your extracted images.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert whole PDF pages into high-resolution images.", icon: IconPhoto },
    { label: "JPG to PDF", href: "/jpg-to-pdf", desc: "Combine photos and images into a single PDF.", icon: IconPhoto },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function ExtractImagesPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Extract Images from PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/extract-images",
        description: "Extract all embedded images, pictures, and graphics from PDF documents online for free.",
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
        name: "How to Extract Images from a PDF Online",
        description: "Step-by-step guide to isolating and extracting images from PDF files with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#ede9fe]">
                                <IconPhotoSearch size={13} stroke={2.5} />
                            </span>
                            <span>Asset Extraction</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Extract Images from PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Isolate and extract all embedded photos, diagrams, and graphics from your PDF documents in high resolution.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <ExtractImagesClient />
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
                                How to Extract Images from a PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to pull embedded graphic assets out of any document.
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
                                Why Extract Images with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Recover lossless photography and graphics with full original resolution.
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
                                When to Use the Image Extractor
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Recover lost original photography, harvest marketing graphics, and extract scientific charts.
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
                                Everything you need to know about extracting embedded images from PDF documents.
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
