import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedactPdfClient from "./RedactPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconEraser,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconEyeOff,
    IconFileDescription,
    IconShieldCheck,
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
    title: "Redact PDF Online Free – Permanently Black Out Text & Data | PDF Maya",
    description:
        "Redact PDF files online for free. Permanently black out sensitive data, SSNs, credit card numbers, and private text with true irreversible removal and 100% privacy.",
    keywords: [
        "redact pdf",
        "redact pdf online free",
        "black out text in pdf",
        "remove sensitive data pdf",
        "sanitize pdf document",
        "permanent pdf redaction",
        "free online redact pdf",
    ],
    alternates: {
        canonical: "/redact-pdf",
    },
    openGraph: {
        title: "Redact PDF Online Free – Permanently Black Out Text & Data | PDF Maya",
        description:
            "Redact PDF files online for free. Permanently black out sensitive data and private text with true irreversible removal.",
        url: "/redact-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Redact PDF Online Free | PDF Maya",
        description:
            "Permanently sanitize and black out sensitive data from legal documents and records.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF File",
        body: "Select your legal exhibit, medical record, or financial disclosure and drop it into the redaction tool above.",
    },
    {
        step: "02",
        icon: IconEraser,
        title: "Draw Redaction Boxes",
        body: "Click and drag black-out boxes over names, social security numbers, or private clauses. Text streams are destroyed underneath.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Sanitized PDF",
        body: "Your sanitized PDF is compiled with zero recoverable metadata or hidden text layers.",
    },
];

const FEATURES = [
    {
        icon: IconEyeOff,
        title: "True Irreversible Removal",
        body: "Unlike basic black highlighter shapes, true redaction strips the underlying binary text characters so data cannot be copy-pasted or extracted.",
    },
    {
        icon: IconShieldCheck,
        title: "HIPAA, GDPR & Legal Compliance",
        body: "Meets strict court rules and privacy mandates for public record disclosure and regulatory compliance.",
    },
    {
        icon: IconEraser,
        title: "Visual Box & Area Selection",
        body: "Easily draw opaque blackout boxes over addresses, account numbers, passport photos, and signatures.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Limits",
        body: "Sanitize unlimited PDF documents with zero monthly subscriptions, watermarks, or credit card requirements.",
    },
    {
        icon: IconShieldLock,
        title: "Encrypted & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Cross-Platform Access",
        body: "Sanitize sensitive documents directly in your web browser on iPad, iPhone, Android, macOS, Windows, and Linux.",
    },
];

const USE_CASES = [
    {
        icon: IconShieldCheck,
        title: "Legal Discovery & Court Filings",
        body: "Redact confidential trade secrets, minor identities, and privileged communications before public docket filing.",
    },
    {
        icon: IconFileDescription,
        title: "Public Records & FOIA Requests",
        body: "Black out personal phone numbers, home addresses, and private citizen data before municipal releases.",
    },
    {
        icon: IconEyeOff,
        title: "Patient Medical Charts",
        body: "Sanitize patient names, medical record numbers, and dates of birth for clinical trial publications.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Financial Statements & Tax Filings",
        body: "Conceal bank account numbers, tax identification numbers, and salary details before distributing reports.",
    },
];

const FAQS = [
    {
        q: "How do I redact text in a PDF for free?",
        a: "Upload your document to the tool above, click 'Launch Redaction Studio', draw blackout boxes over sensitive areas, and click 'Apply Redaction' to download your sanitized PDF.",
    },
    {
        q: "Can someone un-redact or copy the hidden text?",
        a: "No! PDF Maya performs true redaction by permanently deleting the underlying vector text and rasterizing the blacked-out region, making recovery impossible.",
    },
    {
        q: "How is redaction different from drawing a black rectangle in an editor?",
        a: "Drawing a shape merely places a visual layer over the text, which can easily be deleted or selected and copied. Redaction deletes the actual text data from the file stream.",
    },
    {
        q: "Are my sensitive documents kept private?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated sandbox environments and deleted immediately after processing.",
    },
    {
        q: "Can I redact images or photos in the PDF?",
        a: "Yes. You can draw redaction boxes over entire photos, faces, signatures, or diagrams to black them out permanently.",
    },
    {
        q: "Are there any watermarks added to redacted PDFs?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your output PDF documents.",
    },
];

const RELATED_TOOLS = [
    { label: "Protect PDF", href: "/protect-pdf", desc: "Encrypt PDF files with strong password protection.", icon: IconShieldLock },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
    { label: "Sign PDF", href: "/sign-pdf", desc: "Add digital signatures and initials to PDFs.", icon: IconPencil },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
];

export default function RedactPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Redact PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/redact-pdf",
        description: "Redact PDF files online for free. Permanently black out sensitive data and private text.",
        applicationCategory: "SecurityApplication",
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
        name: "How to Redact a PDF Online",
        description: "Step-by-step guide to blacking out and redacting sensitive data in PDF files with PDF Maya.",
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
                                <IconEraser size={13} stroke={2.5} />
                            </span>
                            <span>Data Sanitization</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Redact PDF Online
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Permanently black out and remove sensitive text, numbers, and graphics from your PDF files with irreversible security.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <RedactPdfClient />
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
                                How to Redact a PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to permanently black out private data before sharing.
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
                                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#fee2e2] text-[#dc2626] border border-[#fecaca]">
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
                                Why Redact PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                True binary redaction purges underlying text vectors for foolproof privacy compliance.
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
                                When to Use the PDF Redaction Tool
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Required for legal discovery, FOIA requests, medical disclosures, and corporate audit releases.
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
                                Everything you need to know about redacting and sanitizing PDF documents.
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
