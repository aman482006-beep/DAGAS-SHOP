"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "floating" | "inline" | "header" | "card";
  className?: string;
  sourceContext?: string;
}

export function WhatsAppButton({
  message = "Hi DAGAS SHOP, I'd like to enquire about wholesale kidswear collection.",
  label = "WhatsApp DAGAS",
  variant = "inline",
  className,
  sourceContext = "general_cta",
}: WhatsAppButtonProps) {
  const url = createWhatsAppLink(message);

  const handleClick = () => {
    trackConversion("whatsapp_click", {
      category: "WhatsApp_Funnel",
      label: sourceContext,
      source_page: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  if (variant === "floating") {
    return (
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 sm:bottom-6 right-5 z-40">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Chat with DAGAS SHOP on WhatsApp"
          className={cn(
            "group flex items-center gap-2.5 bg-[#25D366] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:bg-[#20ba59] active:scale-95 transition-all duration-300",
            className
          )}
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline font-semibold text-sm tracking-wide">
            {label}
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
        </a>
      </aside>
    );
  }

  if (variant === "header") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-1.5 bg-[#25D366]/10 text-emerald-800 hover:bg-[#25D366] hover:text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 border border-emerald-200",
          className
        )}
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current" />
        <span>WhatsApp Quick Chat</span>
      </a>
    );
  }

  if (variant === "card") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-colors shadow-sm",
          className
        )}
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#20ba59] active:scale-98 transition-all shadow-md",
        className
      )}
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span>{label}</span>
    </a>
  );
}
