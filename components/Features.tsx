"use client";
import React from "react";
import { motion } from "motion/react";
import {
  IconShieldLock,
  IconDeviceLaptop,
  IconFreeRights,
  IconBolt,
} from "@tabler/icons-react";

const FEATURES = [
  {
    icon: IconShieldLock,
    title: "Your files stay private",
    body: "Every file you upload is processed securely on our backend and discarded immediately after your task completes. We do not read, store, or share your documents.",
  },
  {
    icon: IconDeviceLaptop,
    title: "Works on any device",
    body: "PDF Maya runs entirely in your browser. No downloads, no plugins, no OS restrictions. Works on Mac, Windows, Linux, iPhone, and Android.",
  },
  {
    icon: IconFreeRights,
    title: "Free, with no hidden walls",
    body: "Most tools are completely free to use without creating an account. No watermarks on your output files, no credit card required to get started.",
  },
  {
    icon: IconBolt,
    title: "Fast and straightforward",
    body: "Upload, process, download - that's the whole flow. Our toolset is deliberately simple so you can finish PDF tasks in seconds, not minutes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24 px-5 md:px-8 bg-white border-b border-[#E0DED9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight tracking-tight">
            Why PDF Maya
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Fast, reliable, and thoughtfully designed - so you can get things done without the hassle of heavy software or subscription paywalls.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col justify-between p-7 rounded-2xl border border-[#E0DED9] bg-[#FAFAF9] hover:bg-white hover:border-brand-teal hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex flex-col gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]/60 transition-transform group-hover:scale-105">
                    <Icon size={22} stroke={2} />
                  </span>
                  <h3 className="font-bold text-brand-dark text-lg leading-snug tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
