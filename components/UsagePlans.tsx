"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
    IconSchool,
    IconCheck,
    IconPencil,
    IconInfinity,
    IconAlertTriangle,
    IconArrowRight,
} from "@tabler/icons-react";

export default function UsagePlans() {
    return (
        <section id="usage-plans" className="py-20 md:py-24 px-5 md:px-8 bg-[#F7F6F3] border-b border-[#E0DED9]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="max-w-2xl mb-14 mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
                        Almost everything is free.
                    </h2>
                    <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
                        The vast majority of our tools are completely unlimited. We only cap the{" "}
                        <strong className="text-brand-dark font-semibold">Edit PDF</strong> tool to keep processing fast for everyone.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {/* 1. Unlimited Tools Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E0DED9] shadow-2xs"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#e6f4ef] text-brand-teal">
                                    <IconInfinity size={22} stroke={2} />
                                </span>
                                <div>
                                    <h3 className="font-bold text-brand-dark text-lg">All Other Tools</h3>
                                    <p className="text-xs text-neutral-500">No limits, ever.</p>
                                </div>
                            </div>

                            <div className="bg-[#e6f4ef] rounded-xl p-4 flex items-center gap-3 mb-5 border border-[#bce0d5]">
                                <span className="text-2xl font-black text-brand-teal leading-none">∞</span>
                                <p className="text-sm font-semibold text-brand-teal">Unlimited usage for everyone</p>
                            </div>

                            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                                <strong className="text-brand-dark font-semibold">Every single tool</strong> in our suite, except for the main PDF Editor, is completely unrestricted.
                            </p>

                            <ul className="flex flex-col gap-2.5">
                                <li className="flex items-start gap-2 text-sm text-neutral-600">
                                    <IconCheck size={16} className="text-brand-teal shrink-0 mt-0.5" />
                                    <span>No file size or page count restrictions</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-600">
                                    <IconCheck size={16} className="text-brand-teal shrink-0 mt-0.5" />
                                    <span>No daily or hourly usage limits</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-600">
                                    <IconCheck size={16} className="text-brand-teal shrink-0 mt-0.5" />
                                    <span>No sign-up or credit card required</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#E0DED9]">
                            <a
                                href="#services"
                                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FAFAF9] border border-[#E0DED9] text-brand-dark font-semibold text-sm hover:border-brand-teal hover:text-brand-teal transition-colors"
                            >
                                Explore All Tools
                            </a>
                        </div>
                    </motion.div>

                    {/* 2. Edit PDF Limit Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E0DED9] shadow-2xs"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#f0ede4] text-brand-dark">
                                    <IconPencil size={20} stroke={2} />
                                </span>
                                <div>
                                    <h3 className="font-bold text-brand-dark text-lg">Edit PDF Limit</h3>
                                    <p className="text-xs text-neutral-500">Applies to the editor only.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-5">
                                <div className="bg-[#FAFAF9] rounded-xl p-3.5 flex flex-col border border-[#E0DED9]">
                                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">No Login</p>
                                    <p className="text-2xl font-black text-brand-dark leading-none">3 <span className="text-xs font-normal text-neutral-500">/ hr</span></p>
                                </div>
                                <div className="bg-[#e6f4ef] rounded-xl p-3.5 flex flex-col border border-[#bce0d5]">
                                    <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider mb-1">Logged In</p>
                                    <p className="text-2xl font-black text-brand-teal leading-none">10 <span className="text-xs font-normal text-brand-teal/80">/ hr</span></p>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-2.5">
                                <li className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed">
                                    <IconAlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                                    <span>Limit resets 1 hour after your last edit.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed">
                                    <IconCheck size={16} className="text-brand-teal shrink-0 mt-0.5" />
                                    <span>Login to increase your hourly allowance to 10 edits.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#E0DED9]">
                            <Link
                                href="/login"
                                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-brand-teal text-brand-teal font-semibold text-sm hover:bg-[#e6f4ef] transition-colors"
                            >
                                Login to Free Account
                            </Link>
                        </div>
                    </motion.div>

                    {/* 3. Education / Students Card (Aligned with App Theme) */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="flex flex-col justify-between p-7 rounded-2xl bg-white border-2 border-brand-teal shadow-sm"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-teal text-white">
                                    <IconSchool size={22} stroke={2} />
                                </span>
                                <div>
                                    <h3 className="font-bold text-brand-dark text-lg">Education is Free</h3>
                                    <p className="text-xs text-brand-teal font-semibold">For students &amp; educators</p>
                                </div>
                            </div>

                            <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                                We believe students and teachers shouldn&apos;t pay to get basic academic tasks done.
                            </p>

                            <div className="bg-[#FAFAF9] border border-[#E0DED9] rounded-xl p-4 mb-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                                    Unlock unlimited Edit PDF:
                                </p>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-start gap-2 text-xs text-neutral-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5" />
                                        <span>Register with an <strong className="text-brand-dark">.edu</strong> email, or verify via school ID.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-xs text-neutral-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5" />
                                        <span>Your account will immediately be completely unlimited.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#E0DED9]">
                            <Link
                                href="/login"
                                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-teal text-white font-semibold text-sm hover:bg-[#036649] transition-all shadow-xs active:scale-[0.98]"
                            >
                                Login with .edu Email
                                <IconArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
