import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | DAGAS SHOP Bangalore",
  description: "Privacy policy for DAGAS SHOP wholesale kidswear supplier in Bengaluru, India.",
  alternates: {
    canonical: "/policies/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
          <Breadcrumbs items={[{ name: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-950 mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Last Updated: September 2026 • DAGAS SHOP Bengaluru
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">1. Overview</h2>
            <p>
              DAGAS SHOP (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the website https://www.dagasshop.com to facilitate B2B discovery, catalog sharing, wholesale quotations, and customer support for kidswear retailers and commercial buyers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">2. Information We Collect</h2>
            <p>
              When you submit an inquiry form, request our catalogue, or connect with our sales team via WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Contact details: Name, phone/WhatsApp number, and business email address.</li>
              <li>Business data: Store name, city, state, country, and commercial purchasing preferences.</li>
              <li>Communication history: Product inquiries, quotation requests, and design specifications.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">3. How We Use Your Information</h2>
            <p>
              Your information is used strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Process wholesale quotation inquiries and send requested PDF catalogues.</li>
              <li>Coordinate store visits and dispatch logistics from our Bengaluru showroom.</li>
              <li>Communicate updates regarding fresh design arrivals and seasonal collections.</li>
              <li>We never sell, lease, or monetize your contact information with external marketing agencies.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">4. Third-Party Integrations</h2>
            <p>
              Our website uses privacy-conscious analytics tools (e.g. Google Analytics) to improve user navigation and monitor site health. WhatsApp click-to-chat features open directly in the official WhatsApp application governed by Meta&apos;s privacy practices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">5. Contact &amp; Grievances</h2>
            <p>
              If you have any questions or wish to update or delete your contact records, contact us directly:
            </p>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono text-gray-800">
              <p><strong>DAGAS SHOP</strong></p>
              <p>{COMPANY.address.fullAddress}</p>
              <p>Phone: {COMPANY.phoneFormatted} • Email: {COMPANY.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
