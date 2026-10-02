import React from "react";
import { Metadata } from "next";
import { Factory, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ManufacturingForm } from "@/components/forms/ManufacturingForm";

export const metadata: Metadata = {
  title: "Bulk Kidswear Manufacturing for Larger Requirements | DAGAS SHOP Bangalore",
  description:
    "Custom kidswear manufacturing in Bangalore for qualified bulk orders. Production according to buyer tech-packs, custom fabrics, and quality checks.",
  alternates: {
    canonical: "/kidswear-manufacturer-bangalore",
  },
  keywords: [
    "kidswear manufacturer Bangalore",
    "bulk kidswear manufacturing",
    "children's clothing manufacturer Bangalore",
    "custom kidswear production India",
    "kidswear factory Bangalore",
  ],
};

export default function ManufacturingPage() {
  const steps = [
    {
      num: "1",
      title: "Share Your Requirements",
      desc: "Submit your tech-pack, preferred fabrics, target quantities, and sample images via our enquiry form.",
    },
    {
      num: "2",
      title: "Discuss Designs & Specifications",
      desc: "Our production specialists review fabric GSM, fit patterns, trims, color shades, and packaging details.",
    },
    {
      num: "3",
      title: "Confirm Quantities & Costing",
      desc: "Receive a transparent per-piece quotation, payment schedule, and committed production timeline.",
    },
    {
      num: "4",
      title: "Sampling (If Applicable)",
      desc: "Approval sample produced for buyer physical review to verify drape, stitching quality, and measurements.",
    },
    {
      num: "5",
      title: "Production Batch Run",
      desc: "Sourcing certified yarns, precision fabric cutting, tailored sewing, and finishing under active supervision.",
    },
    {
      num: "6",
      title: "Quality Check & Ironing",
      desc: "Individual garment thread-trimming, defect inspection, needle checks, and clean polybag packaging.",
    },
    {
      num: "7",
      title: "Consolidated Dispatch",
      desc: "Bales or cartons dispatched via registered transport or export logistics to your destination warehouse.",
    },
  ];

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "Bulk Manufacturing" }]} />

          <div className="mt-4 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold">
              <Factory className="w-3.5 h-3.5 text-dagas-600" />
              <span>Bangalore Production Support</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Bulk Kidswear Manufacturing for Larger Requirements
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              For sufficiently large requirements, DAGAS SHOP can support manufacturing based on buyer requirements.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              Whether you are an established multi-store retail chain, private-label boutique brand, or regional distributor needing standardized children&apos;s apparel collections, our production desk in Bengaluru manages your manufacturing cycle with transparent timelines and stringent quality audits.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* 7-Step Process Timeline */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
              Standard Operating Procedure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
              The 7-Step Manufacturing Process
            </h2>
            <p className="text-sm text-gray-600">
              Clear milestone progression from initial design consultation to final warehouse dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-5 bg-white rounded-2xl border border-gray-200/90 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="w-8 h-8 rounded-lg bg-dagas-100 text-dagas-800 font-bold font-mono text-sm flex items-center justify-center">
                    {step.num}
                  </span>
                  <h3 className="font-bold text-gray-950 text-sm sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Note box */}
            <div className="p-5 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col justify-center text-xs text-stone-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-dagas-600" />
              <strong className="block font-bold text-stone-900">Custom Manufacturing Policy</strong>
              <p className="text-[11px] leading-relaxed">
                Production runs are evaluated strictly based on minimum batch viability and buyer technical specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Manufacturing Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
                Production Intake
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
                Submit Your Tech-Pack or Production Requirement
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Provide as much detail as possible regarding your target style, desired fabric, expected lot size, and delivery city. Our production team will contact you to discuss technical feasibility.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>NDA &amp; Buyer Design Confidentiality Respected</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Direct Showroom Consultation Available in Sultanpete</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Assistance with Labeling &amp; Custom Sizing Charts</span>
              </div>
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
