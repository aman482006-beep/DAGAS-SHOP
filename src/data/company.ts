/**
 * DAGAS SHOP - Central Business Information & Configuration
 * 
 * IMPORTANT: DAGAS SHOP is a kidswear wholesale business located in Bengaluru, Karnataka, India.
 * DO NOT confuse it with DAGAS FASHION or any other entity.
 * Information in this file represents verified factual details from the live store & business registration.
 */

import { assetPath } from "@/lib/utils";

export const COMPANY = {
  name: "DAGAS SHOP",
  legalName: "DAGAS SHOP",
  shortName: "DAGAS",
  tagline: "Wholesale Kidswear Supplier in Bangalore, India",
  subtitle: "Kidswear for retailers, boutiques, resellers and bulk buyers.",
  additionalDifferentiator: "For larger requirements, DAGAS SHOP can also manufacture according to buyer requirements.",
  
  // Verified Contact Details
  phone: "+919886231691",
  phoneFormatted: "+91 98862 31691",
  whatsappNumber: "919886231691",
  email: "dagas@live.com",
  
  // Physical Address (Verified from Store Listing & Invoices)
  address: {
    line1: "Shop No. 301, 3rd Floor, Mohana Square",
    line2: "#132/1, Sultanpet Main Road",
    area: "Sultanpet (Chickpet Commercial Wholesale Hub)",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560053",
    country: "India",
    countryCode: "IN",
    landmark: "Near Chickpet Wholesale Market Corridor",
    fullAddress: "#132/1, Mohana Square, Shop No. 301, 3rd Floor, Sultanpet Main Road, Bengaluru, Karnataka 560053, India",
  },

  // Operating Hours
  businessHours: {
    days: "Monday – Saturday",
    hours: "11:00 AM – 8:30 PM IST",
    sunday: "Closed / By Appointment for Bulk Outstation Buyers",
  },

  // Verified Google Review & Map Integration
  google: {
    placeId: "ChIJ47LHNQgWrjsRV0ikmlBQlEY",
    rating: 3.9,
    totalReviews: 28,
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ47LHNQgWrjsRV0ikmlBQlEY",
    writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ47LHNQgWrjsRV0ikmlBQlEY",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.007626915609!2d77.5702283!3d12.9713437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160835c7b2e3%3A0x469450909aa44857!2sDAGAS%20SHOP!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // B2B Pricing & Quantity Guidelines
  b2b: {
    wholesalePriceRange: "₹300 – ₹600+",
    priceNote: "Indicative wholesale range. Pricing varies by product category, fabric specs, and order volume.",
    moq: "No Fixed MOQ",
    moqDescription: "Flexible quantities for small boutiques & growing retailers. Master pack bundling available.",
    manufacturing: "Bulk manufacturing supported for larger requirements according to buyer specifications.",
    leadTime: "Ready wholesale stock dispatched within 24–48 hours; custom production based on agreed schedule.",
    internationalShipping: {
      destinations: ["Uganda", "Malaysia", "Sri Lanka"],
      highlightText: "Worldwide shipping with regular dispatches to Uganda, Malaysia, Sri Lanka, and global markets.",
      freightModes: "Door-to-door air express (DHL/FedEx/Aramex) and consolidated sea cargo.",
    },
  },

  // Brand Assets
  assets: {
    logoOriginal: assetPath("/images/logo/dagas_logo_original.jpg"),
    logoGold: assetPath("/images/logo/dagas_logo_gold_crop.png"),
    logoWhite: assetPath("/images/logo/dagas_logo_white_crop.png"),
    logoTransparent: assetPath("/images/logo/dagas_logo_transparent_crop.png"),
    favicon: assetPath("/favicon.png"),
  },

  // Target Customer Types
  targetAudience: [
    "Kidswear Retailers & Multi-brand Outlets",
    "Independent Children's Clothing Boutiques",
    "Wholesale Distributors & Regional Resellers",
    "Instagram, WhatsApp & Social Commerce Sellers",
    "E-commerce Brands & Online Marketplaces",
    "Export & International Children's Apparel Buyers",
    "Institutional & Bulk Uniform / Event Buyers",
  ],
};

/**
 * Generates an optimized, pre-filled WhatsApp click-to-chat URL
 */
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hi DAGAS SHOP, I am a retailer looking for wholesale kidswear supply. Please share your latest collection details.",
  catalogue: "Hi DAGAS SHOP, I'd like to receive your latest wholesale kidswear catalogue with price guidelines.",
  bulkManufacturing: "Hi DAGAS SHOP, I have a bulk kidswear manufacturing requirement. I'd like to discuss quantities, tech-packs, and production timelines.",
  productEnquiry: (productName: string, sku: string) => 
    `Hi DAGAS SHOP, I'm interested in Product ${productName} (Code: ${sku}). Please share wholesale pricing, available sizes, and order availability.`,
  international: "Hi DAGAS SHOP, I am an international buyer looking to source wholesale kidswear from India (shipping to Uganda / Malaysia / Sri Lanka / worldwide). Please share your export catalogue and freight details.",
  visitStore: "Hi DAGAS SHOP, I would like to visit your wholesale showroom in Sultanpete, Bengaluru. Please share directions and convenient timings.",
};
