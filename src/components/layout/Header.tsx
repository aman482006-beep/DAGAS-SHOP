"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronRight, Phone } from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { cn } from "@/lib/utils";
import { trackConversion } from "@/lib/analytics";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Wholesale", href: "/wholesale-kidswear-bangalore" },
  { name: "Manufacturing", href: "/kidswear-manufacturer-bangalore" },
  { name: "About", href: "/about" },
  { name: "International Buyers", href: "/international-buyers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click", {
      category: "Header_Navigation",
      source_page: pathname,
    });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Real DAGAS SHOP logo asset */}
          <Link href="/" className="flex items-center group py-2">
            <div className="relative w-48 sm:w-56 md:w-64 h-9 sm:h-11">
              <Image
                src={COMPANY.assets.logoGold}
                alt="DAGAS SHOP - Wholesale Kidswear Supplier Bangalore"
                fill
                priority
                className="object-contain object-left group-hover:opacity-90 transition-opacity"
                sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 260px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors py-1 relative",
                    isActive
                      ? "text-dagas-600 font-semibold"
                      : "text-gray-700 hover:text-gray-950"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-dagas-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              aria-label="Chat with DAGAS on WhatsApp"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#25D366]/10 text-emerald-800 hover:bg-[#25D366] hover:text-white transition-all border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/request-catalogue"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-gray-950 text-white hover:bg-gray-800 transition-colors shadow-sm"
            >
              Get Catalogue
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="p-3 bg-dagas-50/60 rounded-xl mb-3 border border-dagas-100">
              <p className="text-xs font-medium text-dagas-900">
                Bengaluru Wholesale Kidswear Supplier
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Flexible Quantities • No Fixed MOQ • Sultanpete Showroom
              </p>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive
                      ? "bg-dagas-50 text-dagas-700 font-semibold"
                      : "text-gray-800 hover:bg-gray-50"
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-gray-100 space-y-2">
              <Link
                href="/request-catalogue"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 px-4 bg-gray-950 text-white rounded-lg text-sm font-semibold shadow-sm"
              >
                Request Wholesale Catalogue
              </Link>
              
              <a
                href={`tel:${COMPANY.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom ({COMPANY.phoneFormatted})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
