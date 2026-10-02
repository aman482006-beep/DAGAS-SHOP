export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Ordering & MOQ" | "Pricing & Products" | "Shipping & Store" | "Manufacturing";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Ordering & MOQ",
    question: "Do you sell wholesale?",
    answer: "Yes. DAGAS SHOP operates primarily as a B2B wholesale kidswear supplier based in Bengaluru. We supply children's clothing stores, independent boutiques, regional resellers, e-commerce brands, and bulk apparel buyers.",
  },
  {
    id: "faq-2",
    category: "Ordering & MOQ",
    question: "What is the minimum order quantity? Do you have a fixed MOQ?",
    answer: "DAGAS SHOP has NO rigid fixed MOQ for standard ready stock. We understand that new retailers and boutique owners require flexibility to test varieties without heavy capital lockup. Quantities are flexible, usually bundled in standard size-ratio sets (e.g., packs of 4 to 12 pieces per design).",
  },
  {
    id: "faq-3",
    category: "Pricing & Products",
    question: "What is the wholesale price range?",
    answer: "Our core wholesale kidswear catalog ranges approximately from ₹300 to ₹600+ per piece/set. Exact pricing depends on fabric specifications, detailing, set components (2-piece/3-piece), and your order volume. For exact itemized pricing, please request our digital catalogue or connect with us on WhatsApp.",
  },
  {
    id: "faq-4",
    category: "Ordering & MOQ",
    question: "Can small retailers and online/Instagram sellers purchase?",
    answer: "Absolutely. We actively support small retailers, boutique entrepreneurs, and social commerce / Instagram sellers across India with flexible order quantities and fast dispatch.",
  },
  {
    id: "faq-5",
    category: "Shipping & Store",
    question: "Do you ship outside Bangalore?",
    answer: "Yes, we dispatch wholesale consignments nationwide across India through established logistics and transport partners (such as VRL, Navata, ARC, Blue Dart, DTDC, and state transport carriers). Dispatches occur within 24 to 48 hours of order confirmation.",
  },
  {
    id: "faq-6",
    category: "Manufacturing",
    question: "Can DAGAS SHOP supply bulk orders or manufacture custom requirements?",
    answer: "Yes. For sufficiently large requirements, DAGAS SHOP can support manufacturing according to buyer requirements, including specific fabric blends, colorways, labeling, and custom tech-packs. Contact us via our bulk manufacturing funnel to discuss your volume and production lead times.",
  },
  {
    id: "faq-7",
    category: "Ordering & MOQ",
    question: "How can I get the latest wholesale catalogue?",
    answer: "You can request our catalogue directly through our 'Request Catalogue' page on this website, or message us on WhatsApp at +91 98862 31691 with your shop details. We regularly share fresh design PDF sheets and real showroom videos with registered buyers.",
  },
  {
    id: "faq-8",
    category: "Shipping & Store",
    question: "Can I visit your physical showroom in Sultanpete, Bangalore?",
    answer: "Yes! Retailers and buyers are always welcome to inspect fabrics and collections in person at our wholesale showroom: Shop No. 301, 3rd Floor, Mohana Square, #132/1 Sultanpet Main Road, Bengaluru - 560053 (Chickpet commercial wholesale market corridor). We are open Monday to Saturday, 11:00 AM – 8:30 PM.",
  },
  {
    id: "faq-9",
    category: "Shipping & Store",
    question: "Do you supply and ship to international buyers?",
    answer: "Yes, DAGAS SHOP regularly ships wholesale kidswear internationally to destinations including Uganda, Malaysia, Sri Lanka, and many more countries worldwide. We assist overseas boutiques, clothing chains, and importers with export packaging, customs invoices, documentation, and reliable international air courier or consolidated sea freight. Please visit our International Buyers section or connect on WhatsApp for global shipping rates.",
  },
  {
    id: "faq-10",
    category: "Pricing & Products",
    question: "How do you ensure kidswear quality and skin safety?",
    answer: "All our children's clothing lines prioritize skin-friendly, breathable cotton and bio-washed knits, gentle seams, nickel-safe closures for infants, and azo-free dyeing suitable for delicate children's skin.",
  },
];
