import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Package, 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "About DAGAS SHOP | Wholesale Kidswear Supplier in Bangalore",
  description:
    "Learn about DAGAS SHOP, kidswear wholesale supplier and bulk manufacturer located in Mohana Square, Sultanpete, Bengaluru. Flexible quantities for retailers and boutiques.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "About DAGAS SHOP" }]} />

          <div className="mt-4 max-w-4xl space-y-4">
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              Business Profile &amp; Core Positioning
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Wholesale Kidswear Supplier in Bangalore, India
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              Kidswear for retailers, boutiques, resellers and bulk buyers.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              Operating from the historic commercial garment corridor of Sultanpete in Bengaluru, DAGAS SHOP is dedicated to bridging the supply chain gap for children&apos;s apparel retailers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Company Identity Notice Card */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Identity &amp; Independence Verification</span>
          </div>
          <p className="leading-relaxed">
            <strong>DAGAS SHOP</strong> is an independent wholesale kidswear establishment located at Shop No. 301, 3rd Floor, Mohana Square, #132/1 Sultanpet Main Road, Bengaluru. DAGAS SHOP is NOT connected, affiliated, or associated with DAGAS FASHION or any other identically or similarly titled commercial entity.
          </p>
        </div>

        {/* Core Business Model & Differentiator */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-950">
            Our Business Model &amp; Buyer Focus
          </h2>

          <div className="prose prose-stone text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
            <p>
              The children&apos;s clothing market requires regular style updates, skin-friendly fabrics, and adaptable order quantities. Traditional wholesale setups often force retailers into enormous minimum order quantities that strain working capital.
            </p>
            <p>
              At <strong>DAGAS SHOP</strong>, we operate with a merchant-first philosophy:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-gray-900 text-base">Wholesale Ready Stock</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct access to ready showroom collections across girlswear, boyswear, babywear, frocks, ethnic wear, and nightwear in the approximate <strong>₹300–₹600+</strong> wholesale range with <strong>no fixed MOQ</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-gray-900 text-base">Bulk Manufacturing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                For larger requirements, DAGAS SHOP can also manufacture according to buyer requirements, covering custom tech-packs, specific fabric GSMs, and tailored packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Physical Showroom Location */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-dagas-600">
            <MapPin className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Physical Hub</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-950">
            Sultanpete, Bengaluru Wholesale Showroom
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            Our showroom is situated on Sultanpet Main Road, adjacent to Chickpet, the nerve center of textile and apparel commerce in Karnataka. Retailers visiting Bengaluru can inspect physical lots, test stitch elasticity, feel fabric hand-feel, and finalize orders directly with our showroom team.
          </p>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-mono text-gray-800 space-y-1">
            <p className="font-bold text-gray-950">{COMPANY.legalName}</p>
            <p>{COMPANY.address.fullAddress}</p>
            <p className="text-dagas-700">Phone: {COMPANY.phoneFormatted} • Email: {COMPANY.email}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={COMPANY.google.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-950 text-white text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <span>View Location on Google Maps</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.visitStore)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Schedule Showroom Visit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
