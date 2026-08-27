"use client";
import React from "react";
import Link from "next/link";
import { IconFileText, IconShieldCheck, IconBolt, IconLock } from "@tabler/icons-react";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: "Popular Tools",
        links: [
            { label: "Merge PDF", href: "/merge-pdf" },
            { label: "Split PDF", href: "/split-pdf" },
            { label: "Compress PDF", href: "/compress-pdf" },
            { label: "Edit PDF", href: "/edit-pdf" },
            { label: "Sign PDF", href: "/sign-pdf" },
            { label: "OCR PDF", href: "/ocr-pdf" },
            { label: "Organise PDF", href: "/organise-pdf" },
            { label: "Protect PDF", href: "/protect-pdf" },
            { label: "Unlock PDF", href: "/unlock-pdf" },
        ],
    },
    {
        title: "Convert PDF",
        links: [
            { label: "PDF to Word", href: "/pdf-to-word" },
            { label: "Word to PDF", href: "/word-to-pdf" },
            { label: "PDF to Excel", href: "/pdf-to-excel" },
            { label: "Excel to PDF", href: "/excel-to-pdf" },
            { label: "PDF to JPG", href: "/pdf-to-jpg" },
            { label: "JPG to PDF", href: "/jpg-to-pdf" },
            { label: "PowerPoint to PDF", href: "/pptx-to-pdf" },
            { label: "PDF to PowerPoint", href: "/pdf-to-pptx" },
            { label: "HTML to PDF", href: "/html-to-pdf" },
        ],
    },
    {
        title: "Navigation",
        links: [
            { label: "All Tools", href: "/#services" },
            { label: "Features", href: "/#features" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Usage Plans", href: "/#usage-plans" },
            { label: "FAQ", href: "/#faq" },
            { label: "Blog", href: "/blog" },
            { label: "Contact Support", href: "mailto:legal@pdfmaya.com" },
        ],
    },
    {
        title: "Legal & Policies",
        links: [
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Disclaimer", href: "/disclaimer" },
            { label: "Copyright & DMCA", href: "/dmca" },
            { label: "Acceptable Use", href: "/acceptable-use" },
            { label: "Accessibility", href: "/accessibility" },
        ],
    },
];

export default function Footer() {
    return (
        <footer
            id="footer"
            className="border-t border-[#E0DED9] pt-16 pb-10 px-5 md:px-8 bg-[#F7F6F3] text-foreground"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b border-[#E0DED9]">
                    {/* Brand block */}
                    <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-3 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 w-fit group">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-teal text-white shadow-sm transition-transform group-hover:scale-105">
                                <IconFileText size={18} stroke={2} />
                            </span>
                            <span className="font-bold text-lg tracking-tight text-brand-dark">
                                PDF <span className="text-brand-teal">Maya</span>
                            </span>
                        </Link>

                        <p className="text-sm leading-relaxed max-w-sm text-neutral-600">
                            A fast, private, and straightforward online tool suite for editing, converting, and managing PDF files directly in your browser.
                        </p>

                        {/* Trust highlights */}
                        <div className="flex flex-col gap-2 mt-2 pt-2 text-xs text-neutral-600 font-medium">
                            <div className="flex items-center gap-2">
                                <IconShieldCheck size={16} className="text-brand-teal shrink-0" />
                                <span>100% Free &amp; Private file processing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconLock size={16} className="text-brand-teal shrink-0" />
                                <span>SSL 256-bit encrypted file transfers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconBolt size={16} className="text-brand-teal shrink-0" />
                                <span>Fast browser-based conversion engine</span>
                            </div>
                        </div>
                    </div>

                    {/* Link columns */}
                    {FOOTER_SECTIONS.map((section) => (
                        <div key={section.title} className="flex flex-col">
                            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-4">
                                {section.title}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-neutral-600 hover:text-brand-teal transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-brand-sage">
                    <p>© {new Date().getFullYear()} PDF Maya. All rights reserved.</p>
                    <p className="text-center sm:text-right">
                        Made with care for PDF lovers everywhere.
                    </p>
                </div>
            </div>
        </footer>
    );
}
