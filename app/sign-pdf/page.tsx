import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignPdfClient from "./SignPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconWriting,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconPencil,
    IconFileDescription,
    IconShieldCheck,
    IconArrowUpRight,
    IconPlus,
    IconFileWord,
    IconTable,
    IconPhoto,
    IconArrowsJoin2,
    IconLayersSubtract,
    IconFileTypePdf,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Sign PDF Online Free – Create & Draw Digital Signatures | PDF Maya",
    description:
        "Sign PDF documents online for free. Draw, type, or upload digital signatures to legal contracts, agreements, and invoices with 100% security.",
    keywords: [
        "sign pdf",
        "sign pdf online free",
        "digital signature pdf",
        "draw signature on pdf",
        "e-sign pdf documents",
        "electronically sign pdf",
        "free online sign pdf",
    ],
    alternates: {
        canonical: "/sign-pdf",
    },
    openGraph: {
        title: "Sign PDF Online Free – Create & Draw Digital Signatures | PDF Maya",
        description:
            "Sign PDF documents online for free. Draw, type, or upload digital signatures to legal contracts, agreements, and invoices.",
        url: "/sign-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sign PDF Online Free | PDF Maya",
        description:
            "Draw or type valid digital signatures on PDF contracts and forms without printing.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Your PDF Contract",
        body: "Select your agreement, tax form, or real estate lease and drop it into the document signer above.",
    },
    {
        step: "02",
        icon: IconPencil,
        title: "Create or Draw Signature",
        body: "Draw your signature using your mouse/touchscreen, type stylized calligraphy initials, or upload an image stamp.",
    },
    {
        step: "03",
        icon: IconDownload,
        title: "Place & Download Signed PDF",
        body: "Drag and resize your signature stamp on any page line and click 'Download Signed PDF'.",
    },
];

const FEATURES = [
    {
        icon: IconWriting,
        title: "Draw, Type, or Upload Signatures",
        body: "Create signatures with fine-tip vector drawing, stylized typographic scripts, or crisp PNG image stamps.",
    },
    {
        icon: IconShieldCheck,
        title: "Legally Binding e-Signatures",
        body: "Complies with global electronic signature guidelines for commercial agreements, leases, and invoices.",
    },
    {
        icon: IconFileDescription,
        title: "Custom Placement & Date Stamps",
        body: "Freely position, scale, and rotate signatures, initials, and date fields across all document pages.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Accounts",
        body: "Sign unlimited business documents with zero monthly subscriptions, sender limits, or watermark stamps.",
    },
    {
        icon: IconShieldLock,
        title: "Private & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after signing.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Touchscreen & Mobile Ready",
        body: "Sign smoothly using your finger or stylus on iPad, iPhone, Android, touchscreen laptops, or desktop trackpads.",
    },
];

const USE_CASES = [
    {
        icon: IconFileDescription,
        title: "Business Contracts & NDAs",
        body: "Sign client vendor agreements, freelance service contracts, non-disclosure pacts, and partnership deals.",
    },
    {
        icon: IconShieldCheck,
        title: "Real Estate & Lease Agreements",
        body: "Execute residential leases, rental disclosures, and mortgage authorizations without needing a physical printer.",
    },
    {
        icon: IconWriting,
        title: "HR Onboarding & Offer Letters",
        body: "Sign employment contracts, W-9/W-4 tax withholding forms, and direct deposit authorizations.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Freelance Invoices & Work Orders",
        body: "Affix company sign-offs and approval initials to vendor invoices and milestone deliverables.",
    },
];

const FAQS = [
    {
        q: "How do I sign a PDF document online for free?",
        a: "Upload your document to the tool above, click 'Launch Document Signer', draw or type your signature, drag it onto the signature line, and click 'Download Signed PDF'.",
    },
    {
        q: "Are electronic signatures legally binding?",
        a: "Yes. In the United States (ESIGN Act / UETA), the European Union (eIDAS), and most jurisdictions worldwide, electronic signatures are legally binding for general commercial agreements.",
    },
    {
        q: "Can I sign using a phone or iPad touchscreen?",
        a: "Yes! PDF Maya is fully responsive and supports fingertip and stylus drawing on iOS, Android, and Windows touch screens.",
    },
    {
        q: "Are my sensitive contracts private?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated sandbox environments and deleted immediately after processing.",
    },
    {
        q: "Can I add multiple signatures or initials?",
        a: "Yes. You can add multiple signature boxes, initials, custom text notes, and date stamps anywhere on the document.",
    },
    {
        q: "Are there any watermarks added to the signed document?",
        a: "No. PDF Maya never places watermarks, stamps, or logos on your signed output files.",
    },
];

const RELATED_TOOLS = [
    { label: "Protect PDF", href: "/protect-pdf", desc: "Encrypt PDF files with strong password protection.", icon: IconShieldLock },
    { label: "Watermark PDF", href: "/watermark-pdf", desc: "Add custom text or image watermarks.", icon: IconSparkles },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
];

export default function SignPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Sign PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/sign-pdf",
        description: "Sign PDF documents online for free with legally binding digital signatures.",
        applicationCategory: "BusinessApplication",
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
        name: "How to Sign a PDF Online",
        description: "Step-by-step guide to drawing and placing digital signatures on PDF files with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-teal">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f4ef]">
                                <IconWriting size={13} stroke={2.5} />
                            </span>
                            <span>Digital Signature</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Sign PDF Online
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Create, draw, or type legally binding digital signatures on your contracts, agreements, and forms in seconds.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <SignPdfClient />
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
                                How to Sign a PDF Document Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to apply legally binding digital signatures without printing.
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
                                Why Sign PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Intuitive vector signing tools deliver crisp, legally compliant signatures.
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
                                When to Use the PDF Signer
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Ideal for business agreements, real estate contracts, freelance invoices, and HR paperwork.
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
                                Everything you need to know about signing PDF documents electronically.
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
