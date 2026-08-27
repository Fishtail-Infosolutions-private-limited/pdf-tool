import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Features from "@/components/Features";
import HomeContent from "@/components/HomeContent";
import UsagePlans from "@/components/UsagePlans";
import Footer from "@/components/Footer";
import { getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free Online PDF Converter, Editor & PDF Tools | PDF Maya",
  description: "Work with your documents faster using PDF Maya, an all-in-one pdf converter, pdf editor, and online pdf tool suite. Convert, edit, merge, split, compress, organize, sign, and secure PDF files directly in your browser.",
  keywords: "free online pdf converter, pdf editor, pdf tools, merge pdf, split pdf, compress pdf, convert pdf to word, word to pdf, sign pdf, pdf maya, free pdf tool",
  openGraph: {
    title: "Free Online PDF Converter, Editor & PDF Tools | PDF Maya",
    description: "Work with your documents faster using PDF Maya, an all-in-one pdf converter, pdf editor, and online pdf tool suite. Convert, edit, merge, split, compress, organize, sign, and secure PDF files directly in your browser.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Free Online PDF Converter, Editor & PDF Tools | PDF Maya",
    description: "Work with your documents faster using PDF Maya, an all-in-one pdf converter, pdf editor, and online pdf tool suite. Convert, edit, merge, split, compress, organize, sign, and secure PDF files directly in your browser.",
    images: ["/og-image.png"],
  },
  other: {
    "title": "Free Online PDF Converter, Editor & PDF Tools | PDF Maya",
  }
};

const FAQS = [
  {
    q: "What can I do with PDF Maya?",
    a: "PDF Maya brings together a wide range of online PDF utilities for different document workflows. You can use the platform for tasks such as changing document formats, managing pages, preparing files for sharing, and handling other common PDF requirements.",
  },
  {
    q: "Do Pdf Maya add watermarks to my files?",
    a: "That's correct, PDF Maya doesn't put any watermarks on your output documents and they remain clean and professional.",
  },
  {
    q: "Do I need to install software to use PDF Maya?",
    a: "No. PDF Maya is designed to work directly in your web browser, so you can access its online tools without installing a separate desktop application.",
  },
  {
    q: "Can I use PDF Maya on a mobile phone?",
    a: "Yes. PDF Maya can be accessed through a modern mobile web browser, allowing you to work with documents when you are away from your computer.",
  },
  {
    q: "Does PDF Maya support image files?",
    a: "Yes. Several PDF workflows can involve image files, making it possible to work between PDFs and common image formats when preparing documents for different purposes.",
  },
  {
    q: "Can PDF Maya help with large PDF files?",
    a: "Yes. PDF Maya includes tools designed for working with documents of different sizes and for handling common file-management requirements. The available options depend on the particular task and file.",
  },
  {
    q: "Is PDF Maya free?",
    a: "Yes, most of our tools are totally free and have no limits, the PDF Editor has a limit of 3 edits per hour not logged in and 10 edits per hour logged in, but with .edu email, students and educators can unlock editor access.",
  },
  {
    q: "Do I need to create an account?",
    a: "NO - Most of our tools do not require you to register, only to increase your editor limits.",
  },
  {
    q: "Do my files get lost or are they compromised?",
    a: "Yes, all your files are treated securely, automatically deleted as soon as you finish your task, and we don't read, store, or share any of your files.",
  },
  {
    q: "Is PDF Maya compatible with mobile?",
    a: "Yes. PDF Maya is browser based and available on any device – Mac, Windows, Linux, iPhone, and Android.",
  },
];

export default function Home() {
  const faqSchema = getFAQSchema(FAQS);

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesGrid />
        <Features />
        <UsagePlans />
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}
