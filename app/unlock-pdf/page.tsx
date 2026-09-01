import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnlockPdfClient from "./UnlockPdfClient";
import Link from "next/link";
import {
    IconUpload,
    IconSettings,
    IconDownload,
    IconLockOpen,
    IconShieldLock,
    IconDeviceLaptop,
    IconSparkles,
    IconKey,
    IconFileDescription,
    IconPrinter,
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
    IconCheck,
    IconUserCheck,
    IconTrash,
    IconSchool,
    IconGavel,
    IconReceipt,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Unlock PDF Online Free – Remove PDF Password & Permissions | PDF Maya",
    description:
        "Remove passwords, printing blocks, and editing restrictions from PDF files online for free. Regain full access to locked documents instantly with 100% privacy.",
    keywords: [
        "unlock pdf",
        "remove pdf password",
        "decrypt pdf online free",
        "remove pdf restrictions",
        "enable pdf printing",
        "unprotect pdf document",
        "free online unlock pdf",
    ],
    alternates: {
        canonical: "/unlock-pdf",
    },
    openGraph: {
        title: "Unlock PDF Online Free – Remove PDF Password & Permissions | PDF Maya",
        description:
            "Remove passwords, printing blocks, and editing restrictions from PDF files online for free.",
        url: "/unlock-pdf",
        siteName: "PDF Maya",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Unlock PDF Online Free | PDF Maya",
        description:
            "Strip password restrictions, copying blocks, and printing locks from any PDF file in seconds.",
    },
};

const HOW_TO_STEPS = [
    {
        step: "1",
        title: "Upload Your Locked PDF",
        body: "Select your password-protected or restricted PDF file and drop it into the unlocker above.",
    },
    {
        step: "2",
        title: "Decrypt Document Stream",
        body: "Enter the file password if required. Our engine strips away owner encryption dictionaries and permission bits.",
    },
    {
        step: "3",
        title: "Download Unlocked PDF",
        body: "Your PDF is ready with all restrictions removed. Print, edit, and copy content freely without prompts.",
    },
];

const FEATURES = [
    {
        icon: IconLockOpen,
        color: "bg-[#e6f4ea] text-[#107C41]",
        title: "Permanent Password Removal",
        body: "Removes owner passwords so you never have to re-enter a password every time you open the document.",
    },
    {
        icon: IconPrinter,
        color: "bg-[#e0ecfc] text-[#185ABD]",
        title: "Enables Printing & Copying",
        body: "Lifts annoying restrictions that prevent highlighting text, copying quotes, or sending pages to a printer.",
    },
    {
        icon: IconShieldLock,
        color: "bg-[#fef3c7] text-[#d97706]",
        title: "Confidential & Safe",
        body: "All transmissions are encrypted via SSL/TLS. Files are processed in private memory and deleted immediately.",
    },
    {
        icon: IconSparkles,
        color: "bg-[#e6f4ef] text-brand-teal",
        title: "100% Free with No Watermarks",
        body: "Unlock unlimited PDF files with zero subscriptions, watermarks, or credit card requirements.",
    },
    {
        icon: IconKey,
        color: "bg-[#eef2ff] text-[#4f46e5]",
        title: "Instant Decryption Engine",
        body: "Decodes 128-bit and 256-bit AES cryptographic wrappers in milliseconds without losing visual layout.",
    },
    {
        icon: IconDeviceLaptop,
        color: "bg-[#e0f2fe] text-[#0284c7]",
        title: "Cross-Platform Access",
        body: "Unlock documents directly in your web browser on Mac, Windows, Linux, iOS, and Android devices.",
    },
];

const USE_CASES = [
    {
        icon: IconPrinter,
        title: "Blocked Printing & Copying Rights",
        desc: "Re-enable printing and text copying on utility bills, research reports, and academic journals.",
    },
    {
        icon: IconArrowsJoin2,
        title: "Archiving & Document Merging",
        desc: "Remove security flags so locked files can be merged, split, compressed, or organized into master portfolios.",
    },
    {
        icon: IconKey,
        title: "Legacy Password Overhead",
        desc: "Remove known passwords from recurring business records so colleagues can access them without delays.",
    },
    {
        icon: IconDeviceLaptop,
        title: "E-Reader & Mobile Compatibility",
        desc: "Strip complex encryption flags that cause PDF reader errors on older e-readers and mobile devices.",
    },
];

const FAQS = [
    {
        q: "How do I remove a password from a PDF for free?",
        a: "Upload your PDF to the tool above, enter the password if the document is encrypted, and click 'Unlock PDF Permanently'. Your unrestricted document will download instantly.",
    },
    {
        q: "Can I unlock a PDF if I don't know the password?",
        a: "If the PDF only has permission restrictions (e.g. printing or editing blocked), it can be unlocked without a password. If it is strongly encrypted with an open password, the correct password must be entered once to decrypt the file.",
    },
    {
        q: "Will the formatting or content of my PDF change?",
        a: "No. The unlock process only modifies the security dictionary headers of the PDF, keeping 100% of your text, images, and layout identical.",
    },
    {
        q: "Are my confidential files secure during unlocking?",
        a: "Yes. All transmissions are protected with end-to-end 256-bit SSL encryption. Uploaded documents and decrypted PDFs are deleted automatically right after processing.",
    },
    {
        q: "Do I need to install desktop software to unlock PDFs?",
        a: "No. PDF Maya decrypts and unlocks PDF files 100% online in your web browser without desktop installations.",
    },
    {
        q: "Are there any watermarks added after unlocking?",
        a: "No. Output PDF documents remain 100% clean and free of watermarks or branding stamps.",
    },
];

const RELATED_TOOLS = [
    { label: "Protect PDF", href: "/protect-pdf", desc: "Encrypt PDF files with AES passwords.", icon: IconShieldLock },
    { label: "Sign PDF", href: "/sign-pdf", desc: "Add verifiable signatures to contracts and forms.", icon: IconPencil },
    { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into a single file.", icon: IconArrowsJoin2 },
    { label: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without quality loss.", icon: IconLayersSubtract },
    { label: "Edit PDF", href: "/edit-pdf", desc: "Add text, annotations, and shapes directly to PDFs.", icon: IconPencil },
    { label: "Split PDF", href: "/split-pdf", desc: "Extract specific pages or page ranges from a PDF.", icon: IconArrowsJoin2 },
];

export default function UnlockPdfPage() {
    const jsonLdSoftware = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "PDF Decryption & Unlock Tool - PDF Maya",
        url: "https://pdfmaya.com/unlock-pdf",
        description: "Remove passwords, printing blocks, and editing restrictions from PDF files online for free.",
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
        name: "How to Unlock PDF Files Online",
        description: "Step-by-step guide to removing passwords and permission restrictions from PDF files with PDF Maya.",
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
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#107C41]">
                            <span className="w-5 h-5 rounded flex items-center justify-center bg-[#e6f4ea]">
                                <IconLockOpen size={13} stroke={2.5} />
                            </span>
                            <span>Document Security</span>
                        </div>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                        Unlock PDF Online Free
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Remove passwords, printing restrictions, and editing blocks from PDF files in seconds. 100% free and private.
                    </p>

                    {/* Full-Width File Upload Card */}
                    <div className="mt-10">
                        <UnlockPdfClient />
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
                                How to Unlock a PDF Document
                            </h2>
                            <p className="text-base text-neutral-600">
                                Remove passwords and editing permissions in 3 simple steps.
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
                                The Best Online PDF Unlocker
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                Strip away restrictive permission flags, re-enable copying and printing, and decrypt AES password streams in seconds.
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
                                Header Decryption &amp; Permission Flag Removal
                            </h2>
                            <p className="text-base text-neutral-600 leading-relaxed">
                                PDF Maya cleanses security trailer dictionaries to restore full native PDF access without degrading page vectors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Removal of Owner Permissions
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Resets permission flags that disable printing, high-resolution rasterization, form field editing, and mouse text selections.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Lossless Content Stream Preservation
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Internal text layers, embedded typography, links, and high-resolution images remain completely untouched and unaltered.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Unlocks Batch Tool Operations
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Enables previously locked documents to be merged into master archives, split into ranges, compressed, or organized.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#e6f4ea] text-[#107C41] flex items-center justify-center shrink-0">
                                        <IconCheck size={16} stroke={3} />
                                    </span>
                                    <h3 className="text-base font-bold text-brand-dark">
                                        Universal Reader Compatibility
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed pl-11">
                                    Produces clean, unrestricted ISO PDF files that open effortlessly across Chrome, Acrobat, Safari, and mobile viewers.
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
                                Practical PDF Unlocking Use Cases
                            </h2>
                            <p className="text-base text-neutral-600">
                                Restore full productivity across business, academic, and administrative tasks.
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
                                We prioritize document confidentiality and data privacy across all decryption operations.
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
                                    Uploaded PDFs and unlocked files are purged automatically from memory.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3.5">
                                <div className="w-13 h-13 rounded-2xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5] flex items-center justify-center shadow-2xs">
                                    <IconUserCheck size={24} stroke={2} />
                                </div>
                                <h3 className="text-base font-bold text-brand-dark">No Account Needed</h3>
                                <p className="text-xs text-neutral-600 leading-relaxed max-w-[220px]">
                                    Unlock unlimited files without registration, emails, or paywalls.
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
                                Everything you need to know about unlocking and decrypting PDF files.
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
