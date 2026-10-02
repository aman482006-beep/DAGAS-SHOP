"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, FileText, ArrowRight, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { trackConversion } from "@/lib/analytics";

export function Hero() {
  const handleWhatsApp = () => {
    trackConversion("whatsapp_click", {
      category: "Hero",
      label: "hero_whatsapp_cta",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50/50 py-16 lg:py-24 border-b border-gray-100">
      {/* Background architectural grid */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Geo and B2B badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dagas-100/80 border border-dagas-200 text-dagas-900 text-xs sm:text-sm font-medium">
              <MapPin className="w-4 h-4 text-dagas-600" />
              <span>Sultanpete, Bengaluru • B2B Kidswear Supplier</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-[1.12]">
              Wholesale Kidswear from <span className="text-dagas-600 underline decoration-dagas-300 decoration-wavy decoration-1">Bangalore</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kidswear for retailers, boutiques, resellers and bulk buyers.
            </p>

            {/* Additional Supporting Line */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Flexible quantities from <strong className="text-gray-900 font-semibold">{COMPANY.b2b.wholesalePriceRange}</strong> wholesale range, with manufacturing support available for larger requirements.
            </p>

            <p className="text-xs text-gray-500 italic max-w-xl mx-auto lg:mx-0">
              * Indicative wholesale price guide; exact pricing varies by product, fabric composition, and order volume.
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Primary CTA */}
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gray-950 text-white font-semibold text-sm hover:bg-gray-800 transition-all shadow-md active:scale-98"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/request-catalogue"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-900 font-semibold text-sm hover:bg-gray-50 transition-all shadow-sm active:scale-98"
              >
                <FileText className="w-4 h-4 text-dagas-600" />
                <span>Get Wholesale Catalogue</span>
              </Link>

              {/* Third CTA */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp DAGAS</span>
              </a>
            </div>

            {/* Micro Trust Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-600 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>No Fixed MOQ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Ready Stock</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Bulk Production</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Global Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual B2B Showroom Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-xl space-y-6">
              {/* Showroom Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <span className="text-[11px] font-semibold text-dagas-600 tracking-wider uppercase">
                    Wholesale Showroom
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    Sultanpete Supply Hub
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Dispatches
                </span>
              </div>

              {/* Showroom Key Specs */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <span className="text-gray-600 font-medium">Indicative Wholesale Tier</span>
                  <span className="font-bold text-gray-950 font-mono">
                    {COMPANY.b2b.wholesalePriceRange}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <span className="text-gray-600 font-medium">Minimum Order Policy</span>
                  <span className="font-semibold text-emerald-700">
                    Flexible Quantities
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <span className="text-gray-600 font-medium">Showroom Location</span>
                  <span className="font-medium text-gray-900 text-right">
                    Mohana Square, Sultanpete
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <span className="text-gray-600 font-medium">Dispatches</span>
                  <span className="font-medium text-gray-900 text-right">
                    India &amp; Global (Uganda, Malaysia, Sri Lanka...)
                  </span>
                </div>
              </div>

              {/* Quick Action Footer */}
              <div className="pt-2">
                <Link
                  href="/request-catalogue"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dagas-50 hover:bg-dagas-100 text-dagas-900 text-xs sm:text-sm font-semibold border border-dagas-200 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-dagas-600" />
                  <span>Receive Today&apos;s Showroom Availability PDF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
