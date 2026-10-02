"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

export function ManufacturingForm() {
  const [formState, setFormState] = useState({
    name: "",
    businessName: "",
    country: "India",
    city: "",
    whatsapp: "",
    email: "",
    productType: "Cotton Frocks & Dresses",
    approxQuantity: "500 - 1000 pcs",
    targetPrice: "",
    customRequirements: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "bulk_manufacturing",
          ...formState,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry. Please try again.");
      }

      setStatus("success");
      trackConversion("manufacturing_enquiry_submit", {
        category: "Manufacturing",
        business_type: formState.productType,
      });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please connect with us directly on WhatsApp.";
      setErrorMessage(message);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          Manufacturing Enquiry Received
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Thank you, <strong>{formState.name}</strong>. Our production team at DAGAS SHOP Bangalore will review your technical specifications and connect on WhatsApp ({formState.whatsapp}) or email within 24 business hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-emerald-800 font-semibold underline underline-offset-4"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Business / Brand Name *
          </label>
          <input
            type="text"
            required
            value={formState.businessName}
            onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
            placeholder="e.g. Little Star Boutiques"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Country *
          </label>
          <input
            type="text"
            required
            value={formState.country}
            onChange={(e) => setFormState({ ...formState, country: e.target.value })}
            placeholder="e.g. India, UAE, UK, Singapore"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            City *
          </label>
          <input
            type="text"
            required
            value={formState.city}
            onChange={(e) => setFormState({ ...formState, city: e.target.value })}
            placeholder="e.g. Bengaluru, Hyderabad, Dubai"
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
            value={formState.whatsapp}
            onChange={(e) => setFormState({ ...formState, whatsapp: e.target.value })}
            placeholder="e.g. +91 98862 31691"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Business Email *
          </label>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="e.g. buyer@company.com"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Product Category *
          </label>
          <select
            value={formState.productType}
            onChange={(e) => setFormState({ ...formState, productType: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          >
            <option>Cotton Frocks &amp; Dresses</option>
            <option>Boys Shirts &amp; Polo Sets</option>
            <option>Babywear &amp; Rompers</option>
            <option>Kids Ethnic &amp; Festive</option>
            <option>Kids Nightwear Sets</option>
            <option>Denim &amp; Dungarees</option>
            <option>Custom Tech-Pack / Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Approximate Quantity *
          </label>
          <select
            value={formState.approxQuantity}
            onChange={(e) => setFormState({ ...formState, approxQuantity: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          >
            <option>200 – 500 pcs</option>
            <option>500 – 1,000 pcs</option>
            <option>1,000 – 3,000 pcs</option>
            <option>3,000+ pcs</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Target Price / pc (Optional)
          </label>
          <input
            type="text"
            value={formState.targetPrice}
            onChange={(e) => setFormState({ ...formState, targetPrice: e.target.value })}
            placeholder="e.g. ₹350 - ₹450 / pc"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Custom Requirements / Tech-Pack Details
        </label>
        <textarea
          rows={3}
          value={formState.customRequirements}
          onChange={(e) => setFormState({ ...formState, customRequirements: e.target.value })}
          placeholder="Specify fabric specifications (e.g. 180 GSM bio-washed cotton), colorways, packaging instructions, or label requirements..."
          className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 px-6 rounded-xl bg-gray-950 hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <span>Submitting Specifications...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Manufacturing Enquiry</span>
            </>
          )}
        </button>
        <p className="text-[11px] text-gray-500 text-center mt-2">
          🔒 Secure submission. Never shared with third parties. Reviewed strictly by DAGAS commercial production desk.
        </p>
      </div>
    </form>
  );
}
