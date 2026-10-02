"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    city: "",
    requirement: "",
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
          type: "contact_enquiry",
          ...formData,
        }),
      });

      if (!res.ok) throw new Error("Could not submit. Please try again.");

      setStatus("success");
      trackConversion("contact_form_submit", {
        category: "Contact",
        label: formData.businessName,
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
        <h3 className="text-xl font-bold text-gray-900">Requirement Received</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our Sultanpete showroom desk will respond to your requirement via WhatsApp or email promptly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-emerald-800 font-semibold underline underline-offset-4"
        >
          Send another message
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
            placeholder="e.g. Anand Sharma"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Store / Business Name *
          </label>
          <input
            type="text"
            required
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="e.g. Little Angels Kids Store"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98862 31691"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            City &amp; State *
          </label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Mysuru, Karnataka"
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Business Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. shopowner@email.com"
          className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Send Your Requirement *
        </label>
        <textarea
          rows={3}
          required
          value={formData.requirement}
          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
          placeholder="Tell us what categories (girlswear, boyswear, babywear), price range, or quantities you need..."
          className="w-full px-3.5 py-2.5 bg-stone-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-dagas-500 focus:bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 px-6 rounded-xl bg-gray-950 hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <span>Sending...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Your Requirement</span>
          </>
        )}
      </button>
    </form>
  );
}
