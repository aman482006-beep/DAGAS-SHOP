"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, HelpCircle, MessageCircle, FileText, Phone } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Ordering & MOQ", "Pricing & Products", "Shipping & Store", "Manufacturing"];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((f) => {
      if (selectedCategory !== "All" && f.category !== selectedCategory) return false;
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [searchTerm, selectedCategory]);

  const accordionItems = filteredFaqs.map((f) => ({
    id: f.id,
    title: f.question,
    content: f.answer,
  }));

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "Frequently Asked Questions" }]} />

          <div className="mt-4 max-w-4xl space-y-4">
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              Buyer Knowledge Base
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              Transparent answers about wholesale ordering, MOQ, Bangalore showroom visits, and bulk manufacturing.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. MOQ, price range, shipping, visit store)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-dagas-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-dagas-600 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-stone-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          {filteredFaqs.length > 0 ? (
            <Accordion items={accordionItems} allowMultiple />
          ) : (
            <div className="text-center py-12 space-y-3">
              <p className="text-gray-500 text-sm">
                No matching questions found for &ldquo;{searchTerm}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="text-xs text-dagas-600 font-semibold underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 rounded-3xl bg-dagas-50/80 border border-dagas-200 text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-950">
            Have a specific retail or wholesale requirement?
          </h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Our Sultanpete showroom sales desk is available on WhatsApp and phone for immediate consultations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#20ba59]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>

            <Link
              href="/request-catalogue"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-950 text-white text-xs sm:text-sm font-semibold hover:bg-gray-800"
            >
              <FileText className="w-4 h-4 text-dagas-400" />
              <span>Request Full Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
