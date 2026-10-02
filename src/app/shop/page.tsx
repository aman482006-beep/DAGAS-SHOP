"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, SlidersHorizontal, RefreshCcw, FileText } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/shop/ProductCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedAge, setSelectedAge] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.categorySlug !== selectedCategory) {
        return false;
      }

      // Age filter
      if (selectedAge !== "all") {
        if (selectedAge === "infant" && !item.ageRange.includes("Month")) return false;
        if (selectedAge === "toddler" && !item.ageRange.includes("1 to") && !item.ageRange.includes("2 to")) return false;
        if (selectedAge === "kids" && !item.ageRange.includes("12") && !item.ageRange.includes("10")) return false;
      }

      // Search query
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesSku = item.sku.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesFabric = item.fabric.toLowerCase().includes(query);
        if (!matchesName && !matchesSku && !matchesCat && !matchesFabric) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "newest") {
        return b.newArrival === a.newArrival ? 0 : b.newArrival ? 1 : -1;
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [searchTerm, selectedCategory, selectedAge, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedAge("all");
    setSortBy("newest");
  };

  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
          <Breadcrumbs items={[{ name: "Wholesale Catalogue" }]} />

          <div className="mt-3 max-w-3xl space-y-2">
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              B2B Showroom Catalogue
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-950">
              Wholesale Kidswear Collection
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Browse our latest kidswear collection and contact us for wholesale availability and pricing. Direct supply from Sultanpete, Bengaluru.
            </p>
          </div>

          {/* Quick Catalogue Action Banner */}
          <div className="mt-6 p-4 rounded-xl bg-dagas-50/80 border border-dagas-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-dagas-950 font-medium">
              Are you a bulk buyer or retailer needing customized assortment sheets?
            </div>
            <Link
              href="/request-catalogue"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-dagas-600 hover:bg-dagas-700 text-white text-xs font-semibold whitespace-nowrap shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Digital Catalogue PDF</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search style, SKU (e.g. DG-001), fabric..."
                className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
              />
            </div>

            {/* Category Select */}
            <div className="lg:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
              >
                <option value="all">All Categories ({PRODUCTS.length})</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Range Filter */}
            <div className="lg:col-span-3">
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
              >
                <option value="all">All Age Groups</option>
                <option value="infant">Infant (0 to 12 Months)</option>
                <option value="toddler">Toddlers (1 to 4 Years)</option>
                <option value="kids">Kids &amp; Pre-teens (4 to 12+ Years)</option>
              </select>
            </div>

            {/* Sort Select */}
            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
              >
                <option value="newest">Sort: Newest First</option>
                <option value="name">Sort: Product Name</option>
              </select>
            </div>
          </div>

          {/* Active Filter Indicators & Reset */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500">
            <span>
              Showing <strong className="text-gray-900 font-semibold">{filteredProducts.length}</strong> wholesale items
            </span>

            {(searchTerm || selectedCategory !== "all" || selectedAge !== "all" || sortBy !== "newest") && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-dagas-600 hover:text-dagas-800 font-semibold cursor-pointer"
              >
                <RefreshCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              No matching products found
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              We update fresh design lots frequently. Please connect with our Bangalore showroom sales desk directly to enquire about specific fabrics or requirements.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
