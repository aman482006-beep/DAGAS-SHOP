"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, FileText, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { trackConversion } from "@/lib/analytics";

export function B2bCTA() {
  const handleWhatsApp = () => {
    trackConversion("whatsapp_click", {
      category: "B2B_CTA",
      label: "bottom_b2b_cta_whatsapp",
    });
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-stone-900 via-gray-950 to-stone-950 text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-dagas-600/15 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-dagas-400 bg-dagas-950/80 px-3.5 py-1.5 rounded-full border border-dagas-800">
          Partner With DAGAS SHOP
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Looking for a reliable kidswear wholesale supplier?
        </h2>

        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Send us your requirements and we&apos;ll help you find the right collection.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/request-catalogue"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-stone-100 text-gray-950 font-bold text-sm sm:text-base transition-all shadow-lg active:scale-98"
          >
            <FileText className="w-5 h-5 text-dagas-600" />
            <span>Request Catalogue</span>
          </Link>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base transition-all shadow-lg active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp DAGAS</span>
          </a>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          Bengaluru Showroom Dispatch • Ready Stock • Fast Nationwide Freight
        </p>
      </div>
    </section>
  );
}
