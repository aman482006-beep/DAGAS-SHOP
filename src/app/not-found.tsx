import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, FileText, ShoppingBag } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-stone-50/50 px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xs text-center space-y-6">
        <span className="text-4xl font-mono font-bold text-dagas-600 block">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-950">
            Showroom Page Not Found
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            The page you are looking for might have been moved or updated in our new wholesale catalogue structure.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/shop"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gray-950 hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
          >
            <ShoppingBag className="w-4 h-4 text-dagas-400" />
            <span>Browse Wholesale Catalogue</span>
          </Link>

          <Link
            href="/request-catalogue"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-stone-100 hover:bg-stone-200 text-gray-800 font-semibold text-xs transition-colors"
          >
            <FileText className="w-4 h-4 text-gray-500" />
            <span>Request Digital Catalogue</span>
          </Link>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to DAGAS SHOP Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
