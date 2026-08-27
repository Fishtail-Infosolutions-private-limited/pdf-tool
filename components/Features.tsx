"use client";
import React from "react";
import { motion } from "motion/react";
import {
  IconShieldLock,
  IconDeviceLaptop,
  IconFreeRights,
  IconBolt,
  IconUserCheck,
  IconDropletOff,
  IconBrowser,
  IconUsers,
} from "@tabler/icons-react";

const FEATURES = [
  {
    icon: IconFreeRights,
    title: "No limits",
    body: "Most of our tools use no time limits, no time caps, and are 100% free. No hidden charges and no credit card needed.",
  },
  {
    icon: IconUserCheck,
    title: "No need of Registration",
    body: "Begin editing your PDF files right away without registering.",
  },
  {
    icon: IconDropletOff,
    title: "No Watermarks",
    body: "Your output files are clean and professional – NO watermarks added.",
  },
  {
    icon: IconBrowser,
    title: "No Installation",
    body: "Works completely in your Browser. No downloads, no plugins and no operating system restrictions!",
  },
  {
    icon: IconShieldLock,
    title: "Secure & Private",
    body: "All files uploaded are processed securely, and automatically removed once your task is finished.",
  },
  {
    icon: IconDeviceLaptop,
    title: "Works on Any Device",
    body: "Mac, Windows, Linux, iPhone and Android.",
  },
  {
    icon: IconBolt,
    title: "Fast Processing",
    body: "Upload, Process, download – most tasks in seconds.",
  },
  {
    icon: IconUsers,
    title: "Used by 50K+ Users",
    body: "Thousands of happy users all over the world.",
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
            Why Choose Our Free Online PDF Tool?
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            As you can see there are a lot of PDF tools out there, and PDF Maya is so much more than this:
          </p>
        </motion.div>

        {/* Feature cards (8 clean cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="flex flex-col justify-between p-7 rounded-2xl border border-[#E0DED9] bg-[#FAFAF9] hover:bg-white hover:border-brand-teal/60 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex flex-col gap-3.5">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#e6f4ef] text-brand-teal border border-[#bce0d5]/60 transition-transform group-hover:scale-105">
                    <Icon size={20} stroke={2} />
                  </span>
                  <h3 className="font-bold text-brand-dark text-base leading-snug tracking-tight">
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
