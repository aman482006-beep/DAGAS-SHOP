import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              Showroom Taxonomy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 mt-1">
              Shop Wholesale by Category
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Curated kidswear lines engineered for high retail turnover, comfortable fits, and dependable quality.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-dagas-600 hover:text-dagas-700 hover:underline"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md hover:border-dagas-300 transition-all"
            >
              {/* Category Image - 4:5 ratio */}
              <div className="relative aspect-[4/5] w-full bg-stone-100 overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.name} Wholesale Kidswear Bangalore`}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-gray-800 shadow-xs">
                  {category.indicativePrice}
                </div>
              </div>

              {/* Category Text Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-dagas-600 transition-colors text-base sm:text-lg">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {category.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-dagas-700">
                  <span>Browse Category</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
