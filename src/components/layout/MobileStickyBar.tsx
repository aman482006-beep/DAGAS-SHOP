"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, FileText, Phone } from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { trackConversion } from "@/lib/analytics";

export function MobileStickyBar() {
  const handleWhatsApp = () => {
    trackConversion("whatsapp_click", {
      category: "MobileStickyBar",
      label: "sticky_bottom_whatsapp",
    });
  };

  const handleCall = () => {
    trackConversion("phone_call_click", {
      category: "MobileStickyBar",
      label: "sticky_bottom_call",
    });
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Call Icon button */}
        <a
          href={`tel:${COMPANY.phone}`}
          onClick={handleCall}
          aria-label="Call DAGAS SHOP"
          className="col-span-2 flex flex-col items-center justify-center p-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 active:bg-gray-100"
        >
          <Phone className="w-4 h-4 text-gray-800" />
          <span className="text-[10px] font-medium mt-0.5">Call</span>
        </a>

        {/* Request Catalogue */}
        <Link
          href="/request-catalogue"
          className="col-span-4 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg border border-gray-900 text-gray-950 font-semibold text-xs text-center active:bg-gray-50"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Catalogue</span>
        </Link>

        {/* Primary WhatsApp Action */}
        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="col-span-6 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#25D366] text-white font-bold text-xs tracking-wide shadow-md active:bg-[#20ba59]"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp DAGAS</span>
        </a>
      </div>
    </div>
  );
}
