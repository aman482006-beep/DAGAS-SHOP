import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  MapPin, 
  Package, 
  TrendingUp, 
  Truck, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Building2,
  Users
} from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { CATEGORIES } from "@/data/categories";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Wholesale Kidswear Supplier in Bangalore | DAGAS SHOP Sultanpete",
  description:
    "Leading wholesale kidswear supplier in Bangalore located in Sultanpete. Kidswear for retailers, boutiques, resellers, and bulk buyers with flexible quantities and ₹300–₹600+ range.",
  alternates: {
    canonical: "/wholesale-kidswear-bangalore",
  },
  keywords: [
    "kidswear wholesaler Bangalore",
    "kids clothing wholesale Bangalore",
    "wholesale kidswear Bangalore",
    "kids clothing supplier Bangalore",
    "kids garments wholesale Bangalore",
    "children's clothing wholesaler Bangalore",
    "Sultanpete kidswear wholesale",
  ],
};

export default function WholesaleBangalorePage() {
  const buyerTypes = [
    {
      title: "Retail Clothing Stores",
      desc: "Independent shops and multi-brand showrooms looking for fast-moving daily casuals and occasion wear.",
    },
    {
      title: "Boutiques & Premium Outlets",
      desc: "Curated children's fashion boutiques seeking stylish frocks, coordinated sets, and comfortable bio-washed fabrics.",
    },
    {
      title: "Online & Instagram Sellers",
      desc: "E-commerce entrepreneurs and social sellers who need agile, low-risk inventory replenishment with flexible bundles.",
    },
    {
      title: "Regional Resellers & Wholesalers",
      desc: "Tier-2 and tier-3 city distributors sourcing bulk consignments directly from the Bangalore wholesale market.",
    },
    {
      title: "Bulk & Institutional Buyers",
      desc: "Organizers, schools, and event coordinators requiring standardized children's outfits in volume.",
    },
    {
      title: "Importers & Overseas Sourcing",
      desc: "International buyers looking to import quality Indian knitwear and ethnic garments with export packing.",
    },
  ];

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "Wholesale Kidswear Bangalore" }]} />

          <div className="mt-4 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dagas-100 text-dagas-900 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-dagas-600" />
              <span>Bengaluru Apparel Wholesale District • Sultanpete</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Wholesale Kidswear Supplier in Bangalore
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              Kidswear for retailers, boutiques, resellers and bulk buyers.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              Based in Mohana Square on Sultanpet Main Road, DAGAS SHOP connects retailers across India with quality children&apos;s apparel at transparent wholesale price tiers, flexible ordering quantities, and dependable freight dispatch.
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Link
                href="/request-catalogue"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-950 text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-gray-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-dagas-400" />
                <span>Request Wholesale Catalogue</span>
              </Link>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Bangalore Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Sourcing Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-dagas-50 flex items-center justify-center text-dagas-600">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-950 text-base">Wholesale Price Range</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our core wholesale catalog ranges from <strong>₹300 to ₹600+</strong> per item or set, leaving healthy retail margins of 50% to 100%+ for boutique shopfronts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-dagas-50 flex items-center justify-center text-dagas-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-950 text-base">No Rigid Fixed MOQ</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We provide flexible bundle ratios (packs of 4–12 pcs) so small retailers can test multiple colorways and styles without freezing large working capital.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-dagas-50 flex items-center justify-center text-dagas-600">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-950 text-base">Pan-India Freight Dispatches</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Consignments are packed and dispatched via trusted transport carriers within 24 to 48 hours of order confirmation across all states.
            </p>
          </div>
        </div>

        {/* Who We Serve Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
              Wholesale Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
              Who DAGAS SHOP Serves
            </h2>
            <p className="text-sm text-gray-600">
              We cater to diverse retail commercial formats across the children&apos;s apparel ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerTypes.map((buyer, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:border-dagas-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 text-sm">{buyer.title}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-6">
                  {buyer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Range Overview */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
              Stock Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
              Comprehensive Children&apos;s Wear Assortment
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              From everyday breathable cotton basics to grand celebration wear, browse our wholesale departments:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={`/shop/${c.slug}`}
                className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:bg-dagas-50/60 hover:border-dagas-300 transition-colors"
              >
                <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                <span className="text-[11px] text-dagas-700 font-semibold block mt-1">
                  Tier: {c.indicativePrice}
                </span>
                <span className="text-[10px] text-gray-500 block mt-0.5">
                  View Styles →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Physical Showroom Callout */}
        <div className="p-8 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-dagas-400 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Bangalore Wholesale Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Visit our Showroom on Sultanpet Main Road
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Touch the fabrics, review the stitching, and discuss immediate lot purchases in person at Shop No. 301, 3rd Floor, Mohana Square, Sultanpete, Bengaluru.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={COMPANY.google.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-dagas-500 hover:bg-dagas-600 text-white font-bold text-xs sm:text-sm text-center transition-colors"
            >
              Get Showroom Directions
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs sm:text-sm text-center transition-colors border border-stone-700"
            >
              Showroom Hours &amp; Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
