import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Supply | DAGAS SHOP Bangalore",
  description: "Commercial B2B terms of supply, order confirmation, and payment guidelines for DAGAS SHOP.",
  alternates: {
    canonical: "/policies/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
          <Breadcrumbs items={[{ name: "Terms of Supply" }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-950 mt-3">
            Terms of Wholesale Supply
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Commercial Guidelines for B2B Retailers &amp; Bulk Purchasers
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">1. Commercial Sourcing Agreement</h2>
            <p>
              DAGAS SHOP supplies children&apos;s apparel primarily on a business-to-business (B2B) basis to verified retail stores, boutiques, resellers, and institutional purchasers. Prices shown or quoted are wholesale trade rates exclusive of applicable GST and freight charges unless explicitly stated on formal proforma invoices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">2. Order Confirmation &amp; Quotations</h2>
            <p>
              Quotations provided via WhatsApp or email remain valid for the period specified (typically 48 hours for fast-moving ready stock lots). An order is considered confirmed upon commercial mutual agreement and verification of payment according to agreed terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">3. Bundling &amp; Minimum Quantities</h2>
            <p>
              DAGAS SHOP operates without rigid single-item MOQs on ready showroom lines. Products are typically sold in standard size-ratio master packs (e.g. 4 to 12 pieces across sizes) to ensure retailers receive a balanced size distribution for their store.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">4. Custom Bulk Manufacturing</h2>
            <p>
              Custom manufacturing runs are subject to agreed design tech-packs, pre-production approvals, and scheduled manufacturing lead times. Production commences upon receipt of agreed advance deposits.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-950">5. Identity Disclaimer</h2>
            <p>
              DAGAS SHOP is an independent commercial firm in Bengaluru. Transactions, bank details, and consignments are handled strictly under the registered trade name <strong>DAGAS SHOP</strong>. We bear no liability for transactions conducted with unrelated or similarly named third-party businesses.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
