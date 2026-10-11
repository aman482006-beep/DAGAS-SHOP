"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, FileText, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { CATEGORIES } from "@/data/categories";
import { trackConversion } from "@/lib/analytics";

export function Hero() {
  const handleWhatsApp = () => {
    trackConversion("whatsapp_click", { category: "Hero", label: "hero_whatsapp_cta" });
  };

  return (
    <section className="relative isolate overflow-hidden border-b border-stone-200 bg-[#fbfaf7]">
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(#d6c6a7_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      <div aria-hidden="true" className="absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-6 dagas-enter">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-3.5 py-2 text-xs font-semibold text-stone-700 shadow-sm sm:text-sm">
            <MapPin className="h-4 w-4 text-dagas-600" />
            Sultanpete, Bengaluru <span className="text-stone-300">/</span> B2B Kidswear
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight text-stone-950 sm:text-5xl lg:text-[3.65rem]">
            Wholesale kidswear for <span className="text-dagas-600">retailers, boutiques</span> and growing brands.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
            Explore ready-stock styles across kidswear categories, with flexible quantities and bulk manufacturing support for larger requirements.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-stone-800">
            <span className="rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-stone-200">{COMPANY.b2b.wholesalePriceRange} wholesale guide</span>
            <span className="rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-stone-200">No fixed MOQ</span>
            <span className="rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-stone-200">Ready stock + bulk production</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-stone-500">{COMPANY.b2b.priceNote}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/shop" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-stone-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-dagas-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dagas-500 focus-visible:ring-offset-2">
              Browse wholesale collection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/request-catalogue" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:border-dagas-400 hover:bg-amber-50">
              <FileText className="h-4 w-4 text-dagas-600" /> Request catalogue
            </Link>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" onClick={handleWhatsApp} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 py-3.5 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-stone-200 pt-5 text-xs font-medium text-stone-600 sm:text-sm">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Retailer-friendly quantities</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Bengaluru showroom</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> International enquiries</span>
          </div>
        </div>

        <div className="lg:col-span-6 dagas-enter dagas-enter--delay">
          <div className="relative mx-auto max-w-xl">
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              <div className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-lg ring-1 ring-black/5">
                <Image src={CATEGORIES[0].image} alt="DAGAS SHOP wholesale girlswear collection" fill priority sizes="(max-width: 640px) 58vw, (max-width: 1024px) 42vw, 320px" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent p-4 pt-16 text-white sm:p-5 sm:pt-20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200 sm:text-xs">Wholesale showroom</p>
                  <p className="mt-1 text-lg font-bold sm:text-xl">Kidswear, all in one place</p>
                </div>
              </div>

              <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-stone-200 shadow-md ring-1 ring-black/5">
                  <Image src={CATEGORIES[1].image} alt="DAGAS SHOP wholesale boyswear" fill sizes="(max-width: 640px) 35vw, (max-width: 1024px) 25vw, 210px" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
                </div>
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-stone-200 shadow-md ring-1 ring-black/5">
                  <Image src={CATEGORIES[4].image} alt="DAGAS SHOP kids ethnic and festive wear" fill sizes="(max-width: 640px) 35vw, (max-width: 1024px) 25vw, 210px" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
                </div>
              </div>
            </div>

            <div className="relative mx-3 -mt-5 rounded-2xl border border-stone-200 bg-white p-4 shadow-xl sm:mx-5 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-dagas-600 sm:text-xs">Your sourcing partner</p>
                  <p className="mt-1 text-sm font-bold text-stone-950 sm:text-base">DAGAS SHOP · {COMPANY.address.city}</p>
                  <p className="mt-1 text-xs leading-5 text-stone-500">Wholesale supply with manufacturing support for larger orders.</p>
                </div>
                <Link href="/wholesale-kidswear-bangalore" aria-label="Learn about wholesale supply" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-dagas-700 transition-colors hover:bg-amber-100">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
