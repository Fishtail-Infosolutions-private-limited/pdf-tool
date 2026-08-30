import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PdfToPdfaClient from "./PdfToPdfaClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconArchive,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconBuildingBank,
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
    IconAlertTriangle,
    IconCheck,
    IconInfoCircle,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Convert PDF to PDF/A Online Free – ISO Archival Standard | PDF Maya",
    description:
        "Archive your PDF with the ISO-standardized PDF/A format. Fully compliant for long-term document preservation and legal standards.",
    keywords: [
        "pdf to pdfa",
        "convert pdf to pdf/a",
        "pdf/a converter online",
        "iso 19005 pdf",
        "pdfa 1b converter",
        "pdfa 2b converter",
        "pdfa 3b converter",
        "long term archiving pdf",
        "free online pdf to pdfa",
    ],
    alternates: {
        canonical: "/pdf-to-pdfa",
    },
    openGraph: {
        title: "Convert PDF to PDF/A Online Free – ISO Archival Standard | PDF Maya",
        description:
            "Archive your PDF with the ISO-standardized PDF/A format. Fully compliant for long-term document preservation and legal standards.",
        url: "/pdf-to-pdfa",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Convert PDF to PDF/A Online Free | PDF Maya",
        description:
            "Archive your PDF with the ISO-standardized PDF/A format. Fully compliant for long-term document preservation and legal standards.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF File",
        body: "Select your PDF document from your device or drag and drop it into the converter above.",
    },
    {
        step: "02",
        icon: IconSettings,
        title: "Set Conformance Level",
        body: "Choose the appropriate archival standard: PDF/A-1b (Universal), PDF/A-2b (Modern Layers), or PDF/A-3b (File Attachments).",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Download Archival PDF/A",
        body: "Your ISO-compliant document with embedded font profiles and color OutputIntents is downloaded immediately.",
    },
];

const CONFORMANCE_PROFILES = [
    {
        name: "PDF/A-1b",
        badge: "Recommended • Most Compatible",
        iso: "PDF 1.4 : ISO 19005-1:2005",
        summary: "The widest-supported archival format. Guarantees visual reproduction of the document for long-term archiving. Ideal for legal, government, and regulated industries.",
        specs: [
            "Embedded fonts & colour profiles (OutputIntent)",
            "No JavaScript, encryption, or multimedia",
            "No external file references or links to resources",
            "Maximum viewer compatibility (Acrobat 5+)",
        ],
    },
    {
        name: "PDF/A-2b",
        badge: "Modern Features",
        iso: "PDF 1.7 : ISO 19005-2:2011",
        summary: "Modern ISO standard supporting native transparency, OpenType fonts, JPEG 2000 compression, and layer structures.",
        specs: [
            "Supports native transparency and gradient layers",
            "Embedded OpenType and Unicode font mappings",
            "JPEG 2000 image compression for crisp photos",
            "Preserves layer structures and digital signatures",
        ],
    },
    {
        name: "PDF/A-3b",
        badge: "File Attachments",
        iso: "PDF 1.7 : ISO 19005-3:2012",
        summary: "Allows embedding secondary files (XML invoices, CSV, raw data, CAD drawings) alongside visual PDF pages for hybrid archiving.",
        specs: [
            "Embeds XML, CSV, spreadsheets, and CAD drawings",
            "Standard for ZUGFeRD, Factur-X & electronic invoicing",
            "Full visual fidelity with machine-readable payloads",
            "Certified for multi-format archival requirements",
        ],
    },
];

const PERFORMANCE_DISCLAIMERS = [
    "Interactive JavaScript or form actions will be removed",
    "Embedded multimedia (video, audio) will be stripped",
    "External hyperlinks are kept but may not persist forever",
    "Transparency & gradients may be flattened in PDF/A-1b mode",
    "Encrypted or password-protected PDFs cannot be converted",
    "All fonts will be embedded (may slightly increase file size)",
];

const FEATURES = [
    {
        icon: IconShieldCheck,
        title: "Full ISO 19005 Compliance",
        body: "Embeds color spaces (OutputIntent), embeds all fonts, and flattens unpermitted JavaScript objects.",
    },
    {
        icon: IconBuildingBank,
        title: "Legal & Regulatory Compliance",
        body: "Meets mandatory archiving requirements for courts, tax agencies, financial regulators, and public libraries.",
    },
    {
        icon: IconArchive,
        title: "Guaranteed Visual Fidelity Forever",
        body: "Ensures your documents can be rendered identically decades from now regardless of future software changes.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Watermarks",
        body: "Convert your archival records without subscription fees, account setups, or branding watermarks.",
    },
    {
        icon: IconShieldLock,
        title: "Confidential & Secure",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed in private memory and deleted immediately.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Universal Cross-Platform Tool",
        body: "Convert PDFs directly in your web browser on Mac, Windows, Linux, iPad, and Android devices.",
    },
];

const USE_CASES = [
    {
        icon: IconBuildingBank,
        title: "Government Filings & Electronic Courts",
        body: "Submit court briefs, patent applications, and public filings that mandate PDF/A format compliance.",
    },
    {
        icon: IconFileDescription,
        title: "Banking & Financial Audits",
        body: "Archive annual financial statements, tax ledgers, and loan agreements for multi-decade compliance storage.",
    },
    {
        icon: IconArchive,
        title: "Healthcare & Patient Records",
        body: "Preserve medical charts, clinical trial records, and health histories according to HIPAA and GDPR standards.",
    },
    {
        icon: IconShieldCheck,
        title: "Contracts & Real Estate Deeds",
        body: "Store notarized real estate deeds, title transfers, and corporate bylaws in a non-degrading electronic format.",
    },
];

const FAQS = [
    {
        q: "What is PDF/A and how does it differ from standard PDF?",
        a: "PDF/A is an ISO-standardized version of the Portable Document Format specialized for preserving electronic documents for the long term. It forbids features not suited for long-term archiving, such as font linking (fonts must be embedded) and encryption.",
    },
    {
        q: "Which PDF/A profile should I choose?",
        a: "PDF/A-1b is the most widely supported standard recommended for court filings and government records. PDF/A-2b supports modern transparency and better compression. PDF/A-3b allows embedding raw data files like XML invoices.",
    },
    {
        q: "How do I convert a PDF to PDF/A for free?",
        a: "Upload your document into the tool above, select your desired PDF/A profile (1b is recommended), and click 'Convert to PDF/A'. Your archival file will download instantly.",
    },
    {
        q: "What happens to JavaScript and multimedia in PDF/A mode?",
        a: "Per ISO 19005 standards, all interactive JavaScript, form actions, and embedded video/audio files are removed to ensure the document can be rendered identically in the future without execution risks.",
    },
    {
        q: "Are my sensitive archival documents kept private?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated sandbox environments and deleted immediately after processing.",
    },
    {
        q: "Are there any watermarks added to the PDF/A file?",
        a: "No. PDF Maya never inserts watermarks, branding stamps, or limitations on your output PDF documents.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract PDF tables into editable Excel sheets.", icon: IconTable },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "PDF to Text", href: "/pdf-to-txt", desc: "Extract raw plain text from PDF documents.", icon: IconFileDescription },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
];

export default function PdfToPdfaPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "PDF to PDF/A Converter - PDF Maya",
        url: "https://pdfmaya.com/pdf-to-pdfa",
        description: "Archive your PDF with the ISO-standardized PDF/A format. Fully compliant for long-term document preservation and legal standards.",
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
        name: "How to Convert PDF to PDF/A Online",
        description: "Step-by-step guide to converting a PDF into an ISO 19005 compliant PDF/A file with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-teal">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f4ef]">
                                <IconShieldCheck size={13} stroke={2.5} />
                            </span>
                            <span>ISO PDF/A Archival</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Convert PDF to PDF/A
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Archive your PDF with the ISO-standardized PDF/A format. Fully compliant for long-term document preservation and legal standards.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <PdfToPdfaClient />
                    </div>
                </div>
            </header>

            {/* ═══════════════════════════════════════════════
                WRITTEN CONTENT BELOW HERO UPLOADER
            ═══════════════════════════════════════════════ */}
            <main className="flex-1">
                {/* ── SECTION 1: PDF/A Conformance Standards & Specifications ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Set Conformance Level
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Choose the appropriate archival standard for your requirements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {CONFORMANCE_PROFILES.map((p) => (
                                <div
                                    key={p.name}
                                    className="bg-[#FAFAF9] rounded-2xl border border-[#E0DED9] p-7 flex flex-col justify-between gap-6 shadow-2xs hover:bg-white hover:border-brand-teal/60 hover:shadow-xs transition-all duration-200"
                                >
                                    <div>
                                        <div className="inline-block px-2.5 py-1 text-xs font-bold rounded-lg bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-3">
                                            {p.badge}
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight">
                                            {p.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-brand-teal mt-0.5">
                                            {p.iso}
                                        </p>
                                        <p className="text-sm text-neutral-600 leading-relaxed mt-3">
                                            {p.summary}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-[#E0DED9] flex flex-col gap-2">
                                        <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                                            {p.name} Specifications:
                                        </p>
                                        {p.specs.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                                                <span className="shrink-0 w-4 h-4 rounded-full bg-[#e6f4ef] text-brand-teal flex items-center justify-center mt-0.5">
                                                    <IconCheck size={11} stroke={3} />
                                                </span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 2: Important Performance Disclaimers ── */}
                <section className="py-16 md:py-20 px-5 md:px-8 bg-[#FAFAF9] border-b border-[#E0DED9]">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#fef3c7] p-8 md:p-10 shadow-xs">
                        <div className="flex items-center gap-3 text-[#92400e] mb-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#fef3c7] text-[#d97706] border border-[#fde68a]">
                                <IconAlertTriangle size={22} stroke={2} />
                            </span>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-brand-dark">
                                    Important Performance Disclaimers
                                </h2>
                                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                                    Strict ISO archival compliance modifies document features as follows:
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
                            {PERFORMANCE_DISCLAIMERS.map((disc, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAFAF9] border border-[#E0DED9] text-xs sm:text-sm text-neutral-700">
                                    <span className="w-2 h-2 rounded-full bg-[#d97706] mt-1.5 shrink-0" />
                                    <span className="leading-snug">{disc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 3: How It Works (3 Steps) ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                How to Convert PDF to PDF/A Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to transform standard PDFs into ISO archival compliance.
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

                {/* ── SECTION 4: Key Features & Benefits ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3] border-b border-[#E0DED9]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Why Convert to PDF/A with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Rigorous ISO validation engine ensures your archived records stand the test of time.
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

                {/* ── SECTION 5: Common Use Cases ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                When to Use the PDF/A Converter
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Required for legal filings, regulatory auditing, medical charts, and archival repositories.
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

                {/* ── SECTION 6: Frequently Asked Questions ── */}
                <section className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3] border-b border-[#E0DED9]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg">
                                Everything you need to know about ISO PDF/A archival compliance.
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
