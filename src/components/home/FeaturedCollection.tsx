import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function FeaturedCollection() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dagas-100 text-dagas-900 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-dagas-600" />
              <span>Bangalore Showroom Dispatch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950">
              New Arrivals &amp; Featured Collection
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Representative styles from our active wholesale inventory. Direct B2B order bundles available.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm self-start sm:self-auto"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-dagas-50/70 border border-dagas-200/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-dagas-950">
              Need custom styles or personalized assortments?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              We update fresh design lots weekly. Contact our Bangalore showroom on WhatsApp for real-time video tours and inventory sheets.
            </p>
          </div>

          <Link
            href="/request-catalogue"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-dagas-600 hover:bg-dagas-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Request Weekly Catalogue PDF
          </Link>
        </div>
      </div>
    </section>
  );
}
