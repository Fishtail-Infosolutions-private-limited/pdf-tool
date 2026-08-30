import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfToJpgClient from "./PdfToJpgClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconPhoto,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconShare,
    IconFileDescription,
    IconWorld,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconPencil,
    IconFileTypePdf,
    IconFileTypeJpg,
    IconArrowRight,
    IconMaximize,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert PDF to JPG Online Free – High-Resolution Images | PDF Maya",
    description:
        "Convert PDF pages to high-resolution JPG images online for free. Extract individual pages or all embedded photos in seconds with no watermarks and 100% privacy.",
    keywords: [
        "pdf to jpg",
        "convert pdf to jpg",
        "pdf to image",
        "pdf to jpeg converter",
        "extract images from pdf",
        "pdf to jpg online free",
        "high quality pdf to jpg",
        "free online pdf to image",
    ],
    alternates: {
        canonical: "/pdf-to-jpg",
    },
    openGraph: {
        title: "Convert PDF to JPG Online Free – High-Resolution Images | PDF Maya",
        description:
            "Convert PDF pages to high-resolution JPG images online for free. Extract individual pages or embedded photos with no watermarks.",
        url: "/pdf-to-jpg",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert PDF to JPG Online Free | PDF Maya",
        description:
            "Convert PDF documents into crisp, high-resolution JPG/JPEG image files instantly.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF Document",
        body: "Drag and drop your PDF into the converter area above or click to browse files from your device.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "High-Resolution Image Rendering",
        body: "Choose between converting entire pages or extracting embedded images. Our engine renders every element in high DPI.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download JPGs or ZIP Archive",
        body: "Save individual image pages or download all converted pages in one organized, compressed ZIP archive.",
    },
];

const FEATURES = [
    {
        icon: IconMaximize,
        title: "High-DPI Retina Resolution",
        body: "Render PDF pages into crisp, clear JPG images with razor-sharp text and vibrant colors ready for presentations.",
    },
    {
        icon: IconPhoto,
        title: "Two-in-One Conversion & Extraction",
        body: "Choose whether to render full pages as continuous pictures or isolate embedded graphic assets and photos.",
    },
    {
        icon: IconShare,
        title: "Instant Social & Web Sharing",
        body: "Turn multi-page documents, infographics, and certificates into image formats that can be uploaded anywhere.",
    },
    {
        icon: IconSparkles,
        title: "100% Free & Unlimited",
        body: "Convert your PDF files to images without watermarks, registration gates, or file count limitations.",
    },
    {
        icon: IconShieldLock,
        title: "Private & Automatic Deletion",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Universal Cross-Platform Tool",
        body: "Convert PDFs to JPGs directly in your browser on iPhone, Android, Mac, Windows, iPad, or Linux.",
    },
];

const USE_CASES = [
    {
        icon: IconShare,
        title: "Social Media Posts & Stories",
        body: "Share PDF announcements, event posters, newsletters, and infographics on LinkedIn, Instagram, Facebook, and Twitter.",
    },
    {
        icon: IconWorld,
        title: "Website Carousels & Portfolios",
        body: "Embed slide presentations, case studies, and design portfolios into web image galleries without embedding heavy PDF readers.",
    },
    {
        icon: IconFileDescription,
        title: "Certificates, Diplomas & Badges",
        body: "Convert digital certificates and award PDFs into shareable image formats suitable for digital resumes and profile pictures.",
    },
    {
        icon: IconPhoto,
        title: "Asset & Graphic Recovery",
        body: "Extract high-resolution product photography, diagrams, and illustrations originally embedded within PDF brochures.",
    },
];

const FAQS = [
    {
        q: "How do I convert PDF pages to JPG images for free?",
        a: "Upload your PDF into the converter above and choose 'Convert Every Page' or 'Download All Pages as JPG (ZIP)'. Your high-resolution images are ready in seconds.",
    },
    {
        q: "What image quality can I expect from the conversion?",
        a: "PDF Maya renders pages at high-DPI retina quality (up to 300 DPI equivalent) to ensure small text, fine lines, and colors remain ultra-sharp.",
    },
    {
        q: "How will I receive multiple converted pages?",
        a: "Multi-page documents are packaged into a single, organized ZIP file containing individual sequentially numbered JPG images.",
    },
    {
        q: "Are my uploaded PDF files kept private?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated environments and deleted immediately after conversion.",
    },
    {
        q: "Can I extract only the images inside a PDF without converting text?",
        a: "Yes! Click the 'Extract Images Only' option after uploading to isolate all embedded photos, diagrams, and figures.",
    },
    {
        q: "Are there any watermarks added to the images?",
        a: "No. PDF Maya never places watermarks, stamps, or logos on your converted JPG files.",
    },
];

const RELATED_TOOLS = [
    { label: "JPG to PDF", href: "/jpg-to-pdf", desc: "Combine photos and images into a single PDF.", icon: IconPhoto },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract PDF tables into editable Excel sheets.", icon: IconTable },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function PdfToJpgPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "PDF to JPG Converter - PDF Maya",
        url: "https://pdfmaya.com/pdf-to-jpg",
        description: "Convert PDF pages to high-resolution JPG images online for free.",
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
        name: "How to Convert PDF to JPG Online",
        description: "Step-by-step guide to converting a PDF into high-resolution JPG images with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#d97706]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#fef3c7]">
                                <IconFileTypeJpg size={13} stroke={2.5} />
                            </span>
                            <span>JPG Images</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Convert PDF to JPG
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Convert every PDF page into high-resolution JPG images or extract embedded photos. Fast, high-quality, and completely free.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PdfToJpgClient />
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
                                How to Convert PDF to JPG Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to transform PDF pages into versatile image files.
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
                                Why Convert PDF to JPG with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Premium quality rendering designed for graphic designers, marketers, and document managers.
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
                                When to Use the PDF to JPG Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Turn static PDFs into versatile images for publishing, web development, and social channels.
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
                                Everything you need to know about converting PDF pages to JPG images.
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
