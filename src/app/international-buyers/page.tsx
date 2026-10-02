import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Globe2, 
  Plane, 
  Ship, 
  ShieldCheck, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  FileText,
  MapPin,
  Truck
} from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ManufacturingForm } from "@/components/forms/ManufacturingForm";

export const metadata: Metadata = {
  title: "Wholesale Kidswear from India | Export Shipping to Uganda, Malaysia, Sri Lanka & Worldwide",
  description:
    "Source wholesale kidswear from India through DAGAS SHOP Bangalore. Regular export dispatches to Uganda, Malaysia, Sri Lanka, and worldwide for retailers, boutiques, and bulk importers.",
  alternates: {
    canonical: "/international-buyers",
  },
  keywords: [
    "kidswear wholesale Uganda",
    "kids clothing supplier Malaysia",
    "wholesale kidswear Sri Lanka",
    "wholesale kidswear from India",
    "kids garments exporter Bangalore",
    "children's clothing export India",
  ],
};

export default function InternationalBuyersPage() {
  const globalDestinations = [
    {
      country: "Uganda",
      region: "East Africa",
      details: "Regular consignments dispatched for kidswear stores and boutique resellers in Kampala and across East Africa.",
      freight: "Air Cargo & Ocean Container Consolidation",
      badge: "Active Destination",
    },
    {
      country: "Malaysia",
      region: "Southeast Asia",
      details: "Direct apparel shipments to boutiques, multi-brand outlets, and online fashion brands in Kuala Lumpur, Penang, and across Malaysia.",
      freight: "Door-to-Door Air Express & Sea Freight",
      badge: "Active Destination",
    },
    {
      country: "Sri Lanka",
      region: "South Asia",
      details: "High-frequency textile and kidswear trade routes to Colombo and regional retail distributors with fast customs transit.",
      freight: "Express Sea & Air Logistics",
      badge: "Active Destination",
    },
    {
      country: "Global & Emerging Markets",
      region: "Worldwide",
      details: "Overseas boutiques, importers, and retail chains across the Middle East, Africa, Southeast Asia, Europe, and the Americas.",
      freight: "International Couriers (DHL/FedEx/Aramex) & Cargo",
      badge: "Worldwide Reach",
    },
  ];

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "International Buyers" }]} />

          <div className="mt-4 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
              <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Global Export Sourcing Desk • Bengaluru, India</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Wholesale Kidswear from India
            </h1>

            <p className="text-lg sm:text-xl text-gray-800 font-semibold leading-relaxed">
              Shipping to Uganda, Malaysia, Sri Lanka, and Retailers Worldwide.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              DAGAS SHOP connects international clothing importers, boutique owners, multi-store chains, and online brands with premium children&apos;s knitwear, frocks, ethnic sets, and partywear directly from Bangalore&apos;s wholesale hub. International enquiries are always welcome with dedicated export assistance.
            </p>

            {/* Direct Country Highlight Pills */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-500 font-medium">Regular Shipping Destinations:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold border border-stone-200">
                🇺🇬 Uganda
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold border border-stone-200">
                🇲🇾 Malaysia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold border border-stone-200">
                🇱🇰 Sri Lanka
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dagas-100 text-dagas-900 text-xs font-bold border border-dagas-200">
                🌍 &amp; Many More Worldwide
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.international)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Export Desk (+91 98862 31691)</span>
              </a>

              <a
                href={`mailto:${COMPANY.email}?subject=International%20Kidswear%20Wholesale%20Enquiry`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-800 font-semibold text-xs sm:text-sm hover:bg-stone-50 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-dagas-600" />
                <span>Email: {COMPANY.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* International Shipping Destinations Showcase Grid */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
              Proven Global Dispatches
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
              International Delivery Corridors
            </h2>
            <p className="text-sm text-gray-600">
              We coordinate end-to-end export packaging, commercial documentation, and international shipping to your destination city.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-3xl border border-gray-200/90 shadow-xs hover:border-dagas-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-dagas-600 bg-dagas-50 px-2.5 py-0.5 rounded-md">
                      {dest.region}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {dest.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950">
                    {dest.country}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {dest.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-gray-700">
                  <Plane className="w-3.5 h-3.5 text-dagas-600 flex-shrink-0" />
                  <span className="truncate">{dest.freight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Capabilities & Documentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-dagas-50 flex items-center justify-center text-dagas-600">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-950 text-base">Air &amp; Sea Cargo Options</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Express door-to-door air freight via DHL, FedEx, and Aramex for fast stock replenishment, or consolidated ocean sea cargo for large volume commercial orders.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-dagas-50 flex items-center justify-center text-dagas-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-950 text-base">Export Documentation</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Compliant commercial invoices, itemized packing lists, certificate of origin assistance, and HS code categorization for hassle-free customs clearance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-dagas-50 flex items-center justify-center text-dagas-600">
              <Ship className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-950 text-base">Bulk Manufacturing for Importers</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              For volume international purchasers, DAGAS SHOP supports custom tech-pack manufacturing, private neck tags, and customized international size grading.
            </p>
          </div>
        </div>

        {/* International Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
              Overseas Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
              Submit Your International Wholesale Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Please share your business details, destination country (Uganda, Malaysia, Sri Lanka, or other), product categories of interest, and target quantities. Our international export coordinator will respond with digital linesheets and shipping rates.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-gray-200 text-xs text-gray-700 space-y-3">
              <p className="font-bold text-gray-900 text-sm">International Buyer Support:</p>
              <ul className="space-y-1.5 pl-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Real-time WhatsApp video showroom tours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Transparent per-kg freight estimates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Safe wire transfer &amp; international payment coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Heavy-gauge waterproof export carton packaging</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
            <ManufacturingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
