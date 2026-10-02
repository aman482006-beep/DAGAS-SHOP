import React from "react";
import { Metadata } from "next";
import { FileText, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CatalogueForm } from "@/components/forms/CatalogueForm";

export const metadata: Metadata = {
  title: "Get the DAGAS Wholesale Catalogue | Kidswear Bangalore",
  description:
    "Request the latest DAGAS SHOP wholesale kidswear digital catalogue with price tiers and ready stock assortments for retail shops and boutiques.",
  alternates: {
    canonical: "/request-catalogue",
  },
};

export default function RequestCataloguePage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "Request Catalogue" }]} />

          <div className="mt-4 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              Digital B2B Line Sheet
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Get the DAGAS Wholesale Catalogue
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Complete the quick form below to receive our latest children&apos;s apparel catalogue, wholesale price tiers, and bundle guidelines.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* WhatsApp Alternative Conversion Box */}
        <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h2 className="text-base font-bold text-gray-900">
              Prefer WhatsApp? Message DAGAS directly.
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Get instant showroom photos and stock PDFs delivered straight to your WhatsApp chat.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.catalogue)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-md flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Clean Form Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold text-gray-950">
              Buyer Information
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Strictly for wholesale communication. No spam guaranteed.
            </p>
          </div>

          <CatalogueForm />
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-gray-500 pt-4">
          <div className="p-3 bg-white rounded-xl border border-gray-100">
            <span className="font-semibold text-gray-800 block">Indicative Pricing</span>
            <span>₹300 – ₹600+ range</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-gray-100">
            <span className="font-semibold text-gray-800 block">Flexible Bundling</span>
            <span>No rigid fixed MOQ</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-gray-100">
            <span className="font-semibold text-gray-800 block">Direct Showroom</span>
            <span>Sultanpete, Bengaluru</span>
          </div>
        </div>
      </div>
    </div>
  );
}
