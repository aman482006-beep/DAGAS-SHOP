import React from "react";
import { COMPANY } from "@/data/company";
import { GOOGLE_REVIEWS_META } from "@/data/reviews";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ClothingStore", "WholesaleStore"],
    "@id": "https://www.dagasshop.com/#organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: "https://www.dagasshop.com/",
    logo: "https://www.dagasshop.com/images/logo/dagas_logo_gold_crop.png",
    image: "https://www.dagasshop.com/images/hero/hero-banner.jpg",
    description: "Wholesale kidswear supplier and bulk children's clothing manufacturer in Bangalore, India. Supplying retailers, boutiques, and bulk buyers.",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "₹₹ (₹300 - ₹600+)",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, UPI, Cash",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: COMPANY.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9713437",
      longitude: "77.5702283",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:00",
        closes: "20:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_REVIEWS_META.averageRating.toString(),
      reviewCount: GOOGLE_REVIEWS_META.totalReviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    hasMap: GOOGLE_REVIEWS_META.googleMapsUrl,
    sameAs: [
      GOOGLE_REVIEWS_META.googleMapsUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.dagasshop.com/#website",
    url: "https://www.dagasshop.com/",
    name: "DAGAS SHOP",
    description: "Wholesale Kidswear Supplier in Bangalore, India",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.dagasshop.com/shop?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
