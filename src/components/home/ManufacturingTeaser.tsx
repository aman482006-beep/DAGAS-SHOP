import React from "react";
import Link from "next/link";
import { Factory, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";

export function ManufacturingTeaser() {
  return (
    <section className="py-16 sm:py-24 bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dagas-900/60 border border-dagas-700 text-dagas-400 text-xs font-semibold">
              <Factory className="w-3.5 h-3.5 text-dagas-400" />
              <span>Bulk Production Support</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Need larger quantities or your own requirements?
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              For sufficiently large requirements, DAGAS SHOP can support manufacturing based on buyer requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dagas-400 flex-shrink-0" />
                <span>Custom fabric composition &amp; GSM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dagas-400 flex-shrink-0" />
                <span>Buyer design specifications &amp; cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dagas-400 flex-shrink-0" />
                <span>Custom size ratios and packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dagas-400 flex-shrink-0" />
                <span>Quality inspection &amp; scheduled dispatch</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/kidswear-manufacturer-bangalore"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-dagas-500 hover:bg-dagas-600 text-white font-semibold text-sm transition-colors shadow-md"
              >
                <span>Discuss a Bulk Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.bulkManufacturing)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-850 text-gray-200 border border-gray-700 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual Process Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dagas-400">
                Bulk Manufacturing Protocol
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950/60 border border-gray-800/80">
                  <span className="font-mono text-dagas-400 font-bold">1</span>
                  <div>
                    <strong className="text-white block">Requirement Submission</strong>
                    <span className="text-gray-400 text-xs">Share tech-pack, target quantity, price expectations, and reference samples.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950/60 border border-gray-800/80">
                  <span className="font-mono text-dagas-400 font-bold">2</span>
                  <div>
                    <strong className="text-white block">Commercial &amp; Production Review</strong>
                    <span className="text-gray-400 text-xs">Feasibility check, fabric procurement planning, and formal costing quotation.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950/60 border border-gray-800/80">
                  <span className="font-mono text-dagas-400 font-bold">3</span>
                  <div>
                    <strong className="text-white block">Scheduled Batch Dispatch</strong>
                    <span className="text-gray-400 text-xs">Thorough garment quality checking, consolidated packing, and freight dispatch.</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 italic pt-2">
                * Note: Manufacturing eligibility applies strictly to volume orders subject to commercial review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
