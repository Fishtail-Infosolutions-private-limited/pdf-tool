import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparePdfClient from "./ComparePdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconArrowsLeftRight,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconEye,
    IconFileDescription,
    IconLayersIntersect,
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
    title: "Compare PDF Online Free – Side-by-Side Visual Diff Tool | PDF Maya",
    description:
        "Compare two PDF documents side-by-side online for free. Spot text additions, deletions, modifications, and visual layout differences with 100% privacy.",
    keywords: [
        "compare pdf",
        "pdf diff tool",
        "compare two pdf files",
        "find differences in pdf",
        "side by side pdf compare",
        "pdf comparison online free",
        "free online compare pdf",
    ],
    alternates: {
        canonical: "/compare-pdf",
    },
    openGraph: {
        title: "Compare PDF Online Free – Side-by-Side Visual Diff Tool | PDF Maya",
        description:
            "Compare two PDF documents side-by-side online for free. Spot text additions, deletions, and modifications with 100% privacy.",
        url: "/compare-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Compare PDF Online Free | PDF Maya",
        description:
            "Spot changes, additions, and deletions between two PDF versions instantly with side-by-side visual diffing.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "01",
        icon: IconUpload,
        title: "Upload Both PDF Versions",
        body: "Drop your original version (A) and revised version (B) into the comparison boxes above.",
    },
    {
        step: "02",
        icon: IconArrowsLeftRight,
        title: "Deep Text & Layout Diffing",
        body: "Click 'Compare Documents'. Our engine scans word-for-word and highlights deleted text in red and new text in green.",
    },
    {
        step: "03",
        icon: IconEye,
        title: "Inspect Synchronized Pages",
        body: "Scroll through synchronized pages with color-coded highlights and inspect the exact change logs.",
    },
];

const FEATURES = [
    {
        icon: IconArrowsLeftRight,
        title: "Side-by-Side Synchronized Scrolling",
        body: "Scroll both versions together in lockstep to immediately identify paragraph shifts and layout revisions.",
    },
    {
        icon: IconEye,
        title: "Color-Coded Visual Highlighting",
        body: "Highlights deleted text in red-tinted bounding boxes and newly added words in green highlights.",
    },
    {
        icon: IconFileDescription,
        title: "Detailed Change Counter",
        body: "Get instant metrics on total added words, deleted phrases, and modified page numbers.",
    },
    {
        icon: IconSparkles,
        title: "100% Free with No Accounts",
        body: "Compare unlimited document revisions with zero monthly subscriptions or paywalls.",
    },
    {
        icon: IconShieldLock,
        title: "Private & Auto-Deleted",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed securely and deleted immediately after your session.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Cross-Platform Diffing",
        body: "Compare PDF documents smoothly in any modern web browser on Mac, Windows, Linux, and iPad.",
    },
];

const USE_CASES = [
    {
        icon: IconFileDescription,
        title: "Contract Revisions & Redlines",
        body: "Verify that counter-party attorneys didn't sneak in unauthorized clauses or alter payment schedules in legal agreements.",
    },
    {
        icon: IconLayersIntersect,
        title: "Book Manuscripts & Editorial Proofs",
        body: "Check author draft submissions against final typeset proof copies to ensure copyediting fidelity.",
    },
    {
        icon: IconArrowsLeftRight,
        title: "Financial Audits & 10-K Filings",
        body: "Compare quarterly balance sheets and SEC filings to verify disclosures and numbers between quarters.",
    },
    {
        icon: IconDeviceLaptop,
        title: "Engineering Specs & Blueprints",
        body: "Track architectural changes and revision history across blueprint iterations and hardware specs.",
    },
];

const FAQS = [
    {
        q: "How do I compare two PDF files for free?",
        a: "Upload your original PDF into box A and your revised PDF into box B in the tool above, then click 'Compare Documents' to view live side-by-side color-coded differences.",
    },
    {
        q: "What do the different highlight colors mean?",
        a: "Red highlights indicate words or paragraphs deleted from Version A. Green highlights indicate new words or sentences added in Version B.",
    },
    {
        q: "Do the pages scroll together?",
        a: "Yes! Both document viewports are synchronized, so scrolling on either side moves both pages simultaneously for effortless comparison.",
    },
    {
        q: "Are my sensitive business contracts private?",
        a: "Yes. All file uploads are protected with HTTPS encryption. Documents are processed in isolated sandbox environments and deleted immediately after processing.",
    },
    {
        q: "Can I toggle the highlight overlays off to read normally?",
        a: "Yes! Use the 'Highlights' toggle in the top toolbar at any time to hide or reveal the colored bounding boxes.",
    },
    {
        q: "Is there any software installation required?",
        a: "No. PDF Maya's compare tool runs completely inside your web browser without installing Adobe Acrobat or third-party diff plugins.",
    },
];

const RELATED_TOOLS = [
    { label: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDFs into editable Microsoft Word documents.", icon: IconFileWord },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Sign PDF", href: "/sign-pdf", desc: "Add digital signatures and initials to PDFs.", icon: IconPencil },
    { label: "Protect PDF", href: "/protect-pdf", desc: "Encrypt PDF files with strong password protection.", icon: IconShieldLock },
];

export default function ComparePdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Compare PDF Tool - PDF Maya",
        url: "https://pdfmaya.com/compare-pdf",
        description: "Compare two PDF documents side-by-side online for free with visual diffing.",
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
        name: "How to Compare Two PDF Files Online",
        description: "Step-by-step guide to finding differences between two PDF versions with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#7C3AED]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#ede9fe]">
                                <IconArrowsLeftRight size={13} stroke={2.5} />
                            </span>
                            <span>Visual Diff Engine</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Compare PDF Files
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Spot changes, additions, and deletions between two PDF versions instantly with side-by-side synchronized diffing.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <ComparePdfClient />
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
                                How to Compare Two PDF Files Online
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Three simple steps to highlight word-for-word differences between document versions.
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
                                Why Compare PDFs with PDF Maya?
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Accurate text diffing with synchronized side-by-side viewports and instant metrics.
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
                                When to Use the PDF Compare Tool
                            </h2>
                            <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
                                Review contract modifications, audit financial revisions, check editorial proofs, and verify engineering specs.
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
                                Everything you need to know about comparing PDF versions side-by-side.
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
