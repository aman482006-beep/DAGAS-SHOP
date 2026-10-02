import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/data/company";

export function AnnouncementBar() {
  return (
    <div className="bg-gray-950 text-gray-200 text-xs py-2 px-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1 text-dagas-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>B2B Wholesale Kidswear</span>
          </span>
          <span className="hidden md:inline text-gray-500">•</span>
          <span className="hidden md:inline text-gray-300">
            Flexible Quantities &amp; No Fixed MOQ
          </span>
          <span className="hidden lg:inline text-gray-500">•</span>
          <span className="hidden lg:inline text-dagas-300 font-medium">
            Shipping Across India &amp; to Uganda, Malaysia, Sri Lanka &amp; Worldwide
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <span className="hidden sm:flex items-center gap-1.5 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-dagas-400" />
            <span>Sultanpete, Bengaluru</span>
          </span>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-dagas-400" />
            <span>{COMPANY.phoneFormatted}</span>
          </a>
          <Link
            href="/request-catalogue"
            className="text-dagas-400 hover:text-dagas-300 font-semibold underline underline-offset-2 ml-1"
          >
            Get Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
}
