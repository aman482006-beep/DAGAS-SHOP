import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Star, ExternalLink, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/data/company";
import { GOOGLE_REVIEWS_META } from "@/data/reviews";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-24 sm:pb-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-56 h-10">
                <Image
                  src={COMPANY.assets.logoWhite}
                  alt="DAGAS SHOP - Wholesale Kidswear Supplier Bangalore"
                  fill
                  className="object-contain object-left"
                  sizes="224px"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {COMPANY.tagline}. Supplying retailers, independent boutiques, online sellers, and bulk buyers across India with flexible order quantities and bulk manufacturing support.
            </p>

            {/* Google Rating Badge */}
            <div className="pt-2">
              <a
                href={GOOGLE_REVIEWS_META.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 bg-gray-900 hover:bg-gray-850 rounded-xl border border-gray-800 transition-colors group"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-white text-sm">
                    {GOOGLE_REVIEWS_META.averageRating}
                  </span>
                </div>
                <div className="text-left text-xs">
                  <span className="text-gray-300 font-medium block group-hover:text-white">
                    Verified Google Rating
                  </span>
                  <span className="text-gray-500 text-[11px]">
                    Based on {GOOGLE_REVIEWS_META.totalReviews} genuine customer ratings
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-300 ml-1" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">
              Wholesale Sourcing
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Full Catalogue
                </Link>
              </li>
              <li>
                <Link href="/wholesale-kidswear-bangalore" className="hover:text-white transition-colors">
                  Wholesale Kidswear
                </Link>
              </li>
              <li>
                <Link href="/kidswear-manufacturer-bangalore" className="hover:text-white transition-colors">
                  Bulk Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/international-buyers" className="hover:text-white transition-colors">
                  International Buyers
                </Link>
              </li>
              <li>
                <Link href="/request-catalogue" className="hover:text-white transition-colors text-dagas-400 font-medium">
                  Request PDF Catalogue
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  B2B Buying Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">
              Key Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop/girlswear" className="hover:text-white transition-colors">
                  Girlswear Collection
                </Link>
              </li>
              <li>
                <Link href="/shop/boyswear" className="hover:text-white transition-colors">
                  Boyswear Collection
                </Link>
              </li>
              <li>
                <Link href="/shop/babywear" className="hover:text-white transition-colors">
                  Babywear &amp; Infants
                </Link>
              </li>
              <li>
                <Link href="/shop/dresses-frocks" className="hover:text-white transition-colors">
                  Dresses &amp; Frocks
                </Link>
              </li>
              <li>
                <Link href="/shop/ethnic-wear" className="hover:text-white transition-colors">
                  Kids Ethnic Wear
                </Link>
              </li>
              <li>
                <Link href="/shop/partywear" className="hover:text-white transition-colors">
                  Partywear &amp; Occasion
                </Link>
              </li>
            </ul>
          </div>

          {/* Sultanpete Showroom Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">
              Bangalore Showroom
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-dagas-400 flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.city} - {COMPANY.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-dagas-400 flex-shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-dagas-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-dagas-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY.businessHours.days}: {COMPANY.businessHours.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Identity & Disclaimer */}
        <div className="py-6 border-b border-gray-800 text-xs text-gray-400 leading-relaxed">
          <div className="flex items-start gap-2 p-3 bg-gray-900/60 rounded-lg border border-gray-800">
            <ShieldCheck className="w-4 h-4 text-dagas-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-gray-300">Identity Notice: </strong>
              DAGAS SHOP is an independent kidswear wholesale supplier and bulk manufacturer located in Mohana Square, Sultanpete, Bengaluru, Karnataka. We are NOT associated or affiliated with DAGAS FASHION or any other identically or similarly named business. All brand assets, contact details, and reviews on this website belong strictly to DAGAS SHOP.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} DAGAS SHOP. All rights reserved. Registered wholesale business in Bengaluru, India.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link href="/policies/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies/terms" className="hover:text-gray-300 transition-colors">
              Terms of Supply
            </Link>
            <Link href="/policies/shipping" className="hover:text-gray-300 transition-colors">
              Shipping &amp; Logistics
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
