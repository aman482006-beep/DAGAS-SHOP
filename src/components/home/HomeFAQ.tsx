import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";

export function HomeFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const accordionItems = FAQS.map((f) => ({
    id: f.id,
    title: f.question,
    content: f.answer,
  }));

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-dagas-600" />
            <span>Buyer Questions &amp; Clear Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Everything you need to know about purchasing wholesale kidswear from DAGAS SHOP Bangalore.
          </p>
        </div>

        <Accordion items={accordionItems} />

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-dagas-600 hover:text-dagas-700 underline underline-offset-4"
          >
            <span>Have more questions? View Complete Sourcing &amp; Delivery FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
