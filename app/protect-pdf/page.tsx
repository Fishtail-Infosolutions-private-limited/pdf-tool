import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProtectPdfClient from "./ProtectPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconLock,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconKey,
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
    title: "Password Protect PDF Online Free – 256-Bit AES Encryption | PDF Maya",
    description:
        "Password protect PDF files online for free. Encrypt confidential documents with 256-bit AES encryption to prevent unauthorized access and copying with 100% privacy.",
    keywords: [
        "protect pdf",
        "password protect pdf",
        "encrypt pdf online",
        "lock pdf with password",
        "secure pdf document",
        "add password to pdf free",
        "free online protect pdf",
    ],
    alternates: {
        canonical: "/protect-pdf",
    },
    openGraph: {
        title: "Password Protect PDF Online Free – 256-Bit AES Encryption | PDF Maya",
        description:
            "Password protect PDF files online for free. Encrypt confidential documents with 256-bit AES encryption.",
        url: "/protect-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Password Protect PDF Online Free | PDF Maya",
        description:
            "Encrypt confidential PDF documents with strong AES password security to prevent unauthorized access.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF File",
        body: "Select your sensitive contract, tax return, or medical record and drop it into the secure uploader above.",
    },
    {
        step: "02",
        icon: IconKey,
        title: "Enter Strong Password",
        body: "Type your custom password. Our engine configures 256-bit AES encryption keys to lock the document stream.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Encrypted PDF",
        body: "Your protected document is compiled instantly. Anyone opening the file will be prompted for your password.",
    },
];

const FEATURES = [
    {
        icon: IconShieldLock,
        title: "256-Bit AES Encryption",
        body: "Industry-standard cryptographic encryption ensures unauthorized users and bots cannot read the file.",
    },
    {
        icon: IconLock,
        title: "Access & Viewing Restrictions",
        body: "Requires password entry before any PDF reader or browser will display document pages.",
    },
    {
        icon: IconShieldCheck,
        title: "Client-First Security Protocol",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed in volatile memory and deleted immediately.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Limits",
        body: "Encrypt as many PDF documents as you need with zero subscriptions, watermarks, or page restrictions.",
    },
    {
        icon: IconKey,
        title: "Universal Reader Compatibility",
        body: "Protected files open seamlessly in Adobe Acrobat, Apple Preview, Google Chrome, and mobile PDF apps.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Cross-Platform Protection",
        body: "Lock files from any device — iPhone, iPad, Android, macOS, Windows, and Linux web browsers.",
    },
];

const USE_CASES = [
    {
        icon: IconFileDescription,
        title: "Confidential Financial Statements",
        body: "Safeguard personal tax returns, payroll stubs, bank statements, and loan agreements before emailing.",
    },
    {
        icon: IconShieldCheck,
        title: "Legal NDAs & Contracts",
        body: "Protect proprietary non-disclosure agreements, mergers & acquisitions memos, and legal depositions.",
    },
    {
        icon: IconLock,
        title: "Medical & Health Records",
        body: "Maintain strict HIPAA and GDPR compliance when transmitting sensitive patient health charts.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Identity & Personal Documents",
        body: "Encrypt passport scans, driver's licenses, and social security cards against identity theft.",
    },
];

const FAQS = [
    {
        q: "How do I password protect a PDF for free?",
        a: "Upload your PDF to the tool above, enter your chosen password, and click 'Encrypt & Protect PDF'. Your encrypted document will download instantly.",
    },
    {
        q: "What encryption standard is used?",
        a: "PDF Maya uses standard 256-bit AES encryption, which is the gold standard used by banks and government security agencies.",
    },
    {
        q: "Will the password work in standard PDF readers like Adobe Acrobat?",
        a: "Yes! The password is built into the standard PDF header, so Adobe Acrobat, Apple Preview, web browsers, and mobile apps will all require the password to unlock.",
    },
    {
        q: "Can PDF Maya staff read my password or files?",
        a: "No. Your password and file are processed through automated cryptographic routines in temporary memory and never stored.",
    },
    {
        q: "Can I remove the password later?",
        a: "Yes! If you know the password, you can use our Unlock PDF tool at any time to remove password restrictions permanently.",
    },
    {
        q: "Are there any watermarks added to protected PDFs?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your output PDF documents.",
    },
];

const RELATED_TOOLS = [
    { label: "Unlock PDF", href: "/unlock-pdf", desc: "Remove passwords and restrictions from PDFs.", icon: IconKey },
    { label: "Sign PDF", href: "/sign-pdf", desc: "Add digital signatures and initials to PDFs.", icon: IconPencil },
    { label: "Watermark PDF", href: "/watermark-pdf", desc: "Add custom text or image watermarks.", icon: IconSparkles },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function ProtectPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Protect PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/protect-pdf",
        description: "Password protect PDF files online for free with 256-bit AES encryption.",
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
        name: "How to Password Protect a PDF Online",
        description: "Step-by-step guide to encrypting a PDF with a password using PDF Maya.",
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
                                <IconLock size={13} stroke={2.5} />
                            </span>
                            <span>Document Security</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Password Protect PDF
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Encrypt confidential PDF documents with military-grade 256-bit AES password protection against unauthorized viewing.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <ProtectPdfClient />
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
                                How to Password Protect a PDF Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to lock and encrypt sensitive PDF documents.
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
                                Why Protect PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Strong 256-bit AES encryption keeps your data private across every device and reader.
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
                                When to Use PDF Password Protection
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Essential for sensitive tax returns, confidential legal NDAs, patient health records, and identity files.
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
                                Everything you need to know about encrypting and protecting PDF files.
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
