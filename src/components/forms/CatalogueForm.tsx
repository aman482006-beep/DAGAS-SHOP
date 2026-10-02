"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

export function CatalogueForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    city: "",
    country: "India",
    whatsapp: "",
    email: "",
    businessType: "Kidswear Retail Store",
    productsInterestedIn: "Girlswear & Dresses",
    approxQuantity: "Initial Trial Bundle (20 - 50 pcs)",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "catalogue_request",
          ...formData,
        }),
      });

      if (!res.ok) throw new Error("Could not submit request. Please try again.");

      setStatus("success");
      trackConversion("catalogue_request_submit", {
        category: "Catalogue",
        business_type: formData.businessType,
        source_page: "/request-catalogue",
      });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please connect with us directly on WhatsApp.";
      setErrorMsg(message);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Catalogue Request Confirmed</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our Bangalore team will send the latest PDF catalogue and line sheets to your WhatsApp (<strong>{formData.whatsapp}</strong>) and email shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-emerald-800 font-semibold underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Priya Sharma"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Business / Store Name *
          </label>
          <input
            type="text"
            required
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="e.g. Tiny Toes Boutique"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            City *
          </label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Bengaluru, Kochi, Pune"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Country *
          </label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. India"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            WhatsApp Number (with Country Code) *
          </label>
          <input
            type="tel"
            required
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            placeholder="e.g. +91 98862 31691"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. owner@boutique.com"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Business Type *
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          >
            <option>Kidswear Retail Store</option>
            <option>Children&apos;s Boutique</option>
            <option>Clothing Wholesaler / Distributor</option>
            <option>Online / Instagram Seller</option>
            <option>E-commerce Brand</option>
            <option>International Importer</option>
            <option>Other Bulk Buyer</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Products Interested In *
          </label>
          <select
            value={formData.productsInterestedIn}
            onChange={(e) => setFormData({ ...formData, productsInterestedIn: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          >
            <option>All Showroom Collections</option>
            <option>Girlswear &amp; Dresses</option>
            <option>Boyswear &amp; Polo Sets</option>
            <option>Babywear &amp; Rompers</option>
            <option>Ethnic &amp; Festive Wear</option>
            <option>Nightwear &amp; Loungewear</option>
            <option>Partywear &amp; Occasion</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Approximate Quantity *
          </label>
          <select
            value={formData.approxQuantity}
            onChange={(e) => setFormData({ ...formData, approxQuantity: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          >
            <option>Initial Trial Bundle (20 - 50 pcs)</option>
            <option>Small Wholesale Lot (50 - 150 pcs)</option>
            <option>Medium Stock Run (150 - 500 pcs)</option>
            <option>Bulk Sourcing (500+ pcs)</option>
          </select>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 px-6 rounded-xl bg-gray-950 hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <span>Sending Request...</span>
          ) : (
            <>
              <FileText className="w-5 h-5 text-dagas-400" />
              <span>Send Catalogue</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
