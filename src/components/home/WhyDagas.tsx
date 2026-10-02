import React from "react";
import { Search, CheckSquare, MessageCircle, FileCheck, Truck, ShieldCheck, Check } from "lucide-react";
import { COMPANY } from "@/data/company";

export function WhyDagas() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5 text-dagas-600" />,
      title: "Browse",
      desc: "Explore our online showroom or request our digital PDF catalogue with price guidelines.",
    },
    {
      num: "02",
      icon: <CheckSquare className="w-5 h-5 text-dagas-600" />,
      title: "Select",
      desc: "Shortlist product SKUs, size ratios, and quantities that match your store's customer base.",
    },
    {
      num: "03",
      icon: <MessageCircle className="w-5 h-5 text-dagas-600" />,
      title: "Enquire",
      desc: "Connect directly with our Bengaluru sales desk via WhatsApp or our instant enquiry form.",
    },
    {
      num: "04",
      icon: <FileCheck className="w-5 h-5 text-dagas-600" />,
      title: "Quote",
      desc: "Receive an itemized commercial quotation confirming exact ready stock, lot pricing, and freight.",
    },
    {
      num: "05",
      icon: <Truck className="w-5 h-5 text-dagas-600" />,
      title: "Order & Dispatch",
      desc: "Order confirmed and dispatched within 24–48 hours via leading transport carriers across India.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
            B2B Commercial Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950">
            Why Source From DAGAS SHOP
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            DAGAS SHOP supplies kidswear to retailers, resellers, boutiques and bulk buyers from Bengaluru.
          </p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            We eliminate unnecessary intermediary layers so you get competitive pricing, consistent fabric standards, and dependable fulfillment.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-5 bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:border-dagas-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-dagas-600 bg-dagas-50 px-2.5 py-1 rounded-md">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-100">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-dagas-100 border border-dagas-200 text-dagas-800 flex items-center justify-center text-[10px] font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Commercial Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Capital-Friendly Quantities</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Order flexible bundle packs per style without being forced into rigid hundreds of pieces.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Commercial Price Positioning</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Our wholesale range of ₹300–₹600 allows comfortable retail markups of 50% to 100%+ for your store.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Physical Sultanpete Presence</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Visit our showroom in Bangalore&apos;s leading garment wholesale hub to touch, feel, and inspect stock in person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
