import React from "react";
import { Package, Layers, Sparkles, Factory } from "lucide-react";
import { COMPANY } from "@/data/company";

export function ValueProps() {
  const props = [
    {
      icon: <Package className="w-6 h-6 text-dagas-600" />,
      title: "Wholesale Kidswear",
      description: "Direct B2B supply of children's everyday casuals, occasion wear, and festive garments from Bangalore.",
    },
    {
      icon: <Layers className="w-6 h-6 text-dagas-600" />,
      title: "Flexible Quantities",
      description: "No rigid monolithic MOQ. We supply convenient size-ratio bundles suited for growing shops and boutiques.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-dagas-600" />,
      title: "Wide Product Range",
      description: "Carefully curated girlswear, boyswear, infant babywear, frocks, ethnic sets, and partywear in one place.",
    },
    {
      icon: <Factory className="w-6 h-6 text-dagas-600" />,
      title: "Bulk Manufacturing Available",
      description: "For sufficiently large requirements, DAGAS SHOP supports custom production to buyer specifications.",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {props.map((prop, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-50/70 border border-stone-200/80 hover:border-dagas-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-stone-200 flex items-center justify-center mb-4">
                {prop.icon}
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
