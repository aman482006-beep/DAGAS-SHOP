import React from "react";
import { Metadata } from "next";
import { Truck, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Shipping & Logistics Information | DAGAS SHOP Bangalore",
  description: "Wholesale kidswear dispatch, transport carriers, and delivery guidelines across India from DAGAS SHOP Bengaluru.",
  alternates: {
    canonical: "/policies/shipping",
  },
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
          <Breadcrumbs items={[{ name: "Shipping & Logistics" }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-950 mt-3">
            Shipping &amp; Logistics Information
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Dispatch Guidelines for Wholesale Consignments from Bangalore
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-6 text-sm text-gray-700 leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-gray-100">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
              <Clock className="w-5 h-5 text-dagas-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">24–48h Dispatch</h3>
              <p className="text-xs text-gray-500">Ready warehouse stock shipped promptly upon order confirmation.</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
              <Truck className="w-5 h-5 text-dagas-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Pan-India Transport</h3>
              <p className="text-xs text-gray-500">Connected with major South India &amp; National road logistics carriers.</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
              <ShieldCheck className="w-5 h-5 text-dagas-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Secure B2B Packing</h3>
              <p className="text-xs text-gray-500">Individual polybagged units packed in reinforced woven master sacks.</p>
            </div>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">1. Transport Carriers &amp; Modes</h2>
            <p>
              Depending on the buyer&apos;s location and parcel volume, dispatches are routed through:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Road Transports:</strong> VRL Logistics, Navata Road Transport, ARC, KPN, Sharma Transports, and regional parcel services.</li>
              <li><strong>Express Air / Surface Couriers:</strong> Blue Dart, DTDC, Delhivery, Professional Couriers for urgent smaller cartons.</li>
              <li><strong>Buyer-Nominated Transports:</strong> Outstation buyers may specify their preferred transport office in Bangalore for drop-off.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">2. Tracking &amp; LR Copy</h2>
            <p>
              Once your consignment is handed over to the transport agency, our dispatch desk immediately shares the Lorry Receipt (LR / Bilty) or courier tracking number with you via WhatsApp for effortless consignment tracking and delivery collection at your destination hub.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">3. Freight Charges</h2>
            <p>
              Freight is typically billed on a &ldquo;To-Pay&rdquo; basis (paid directly to the carrier upon parcel pickup) unless pre-arranged on your formal invoice.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">4. International Export Dispatches (Uganda, Malaysia, Sri Lanka &amp; Worldwide)</h2>
            <p>
              DAGAS SHOP regularly fulfills and dispatches international kidswear consignments to overseas retailers, boutique chains, and importers. Active export corridors include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Uganda &amp; East Africa:</strong> Air cargo and sea freight consolidation with export invoices and packing lists.</li>
              <li><strong>Malaysia &amp; Southeast Asia:</strong> Door-to-door express courier and commercial air freight for fast fashion turnarounds.</li>
              <li><strong>Sri Lanka &amp; South Asia:</strong> Direct regional cargo routes for rapid customs clearance and store delivery.</li>
              <li><strong>Other Global Destinations:</strong> Overseas boutiques and distributors across the Middle East, UK, Europe, and worldwide.</li>
            </ul>
            <p className="text-xs text-gray-500 pt-1">
              International orders are packed in heavy-duty waterproof export cartons with itemized packing slips and HS code documentation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
