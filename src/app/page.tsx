import React from "react";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { WhyDagas } from "@/components/home/WhyDagas";
import { ManufacturingTeaser } from "@/components/home/ManufacturingTeaser";
import { LocationStore } from "@/components/home/LocationStore";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { B2bCTA } from "@/components/home/B2bCTA";
import { HomeFAQ } from "@/components/home/HomeFAQ";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* SECTION 1: Trust / Business Snapshot */}
      <ValueProps />

      {/* SECTION 2: Shop by Category */}
      <CategoryGrid />

      {/* SECTION 3: New Arrivals / Featured Collection */}
      <FeaturedCollection />

      {/* SECTION 4: Why DAGAS & 5-Step Order Flow */}
      <WhyDagas />

      {/* SECTION 5: Bulk Kidswear Manufacturing Conversion */}
      <ManufacturingTeaser />

      {/* SECTION 6: Physical Store & Sultanpete Showroom Location */}
      <LocationStore />

      {/* SECTION 7: Verified Google Reviews */}
      <GoogleReviews />

      {/* SECTION 9: B2B Conversion CTA */}
      <B2bCTA />

      {/* SECTION 10: FAQ with FAQPage JSON-LD */}
      <HomeFAQ />
    </>
  );
}
