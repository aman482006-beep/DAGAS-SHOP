import { assetPath } from "@/lib/utils";
export interface Category {
  id: string;
  slug: string;
  name: string;
  title: string;
  shortDesc: string;
  seoDesc: string;
  image: string;
  itemCountText: string;
  indicativePrice: string;
  targetBuyerNote: string;
  popularItems: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-gw",
    slug: "girlswear",
    name: "Girlswear",
    title: "Wholesale Girlswear Collection",
    shortDesc: "Casual tops, skirts, frocks, dungarees, and curated outfits for girls aged 1 to 14 years.",
    seoDesc: "Browse wholesale girlswear in Bangalore from DAGAS SHOP. Quality cotton frocks, tops, sets, and fashion styles for retail stores and boutiques.",
    image: assetPath("/images/categories/girlswear.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹300 – ₹550",
    targetBuyerNote: "High-repeat daily wear and trend collections for boutiques.",
    popularItems: ["A-Line Frocks", "Tee & Skirt Sets", "Cotton Dungarees", "Floral Tunics"],
  },
  {
    id: "cat-bw",
    slug: "boyswear",
    name: "Boyswear",
    title: "Wholesale Boyswear Collection",
    shortDesc: "Polo tees, woven casual shirts, cargo shorts, denim sets, and athletic co-ords for boys.",
    seoDesc: "Wholesale boyswear supplier in Sultanpete Bangalore. Durable, trend-driven shirts, tees, and bottoms tailored for kidswear retailers.",
    image: assetPath("/images/categories/boyswear.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹320 – ₹580",
    targetBuyerNote: "Everyday durable casuals with high commercial sell-through.",
    popularItems: ["Pique Polo Sets", "Check Casual Shirts", "Chino Shorts", "Activewear Track Sets"],
  },
  {
    id: "cat-inf",
    slug: "babywear",
    name: "Babywear & Infants",
    title: "Wholesale Infant & Babywear",
    shortDesc: "Bio-washed 100% combed cotton rompers, sleepsuits, jablas, and gentle newborn gift sets.",
    seoDesc: "Wholesale infant and baby clothing supplier Bangalore. Safe, hypoallergenic baby rompers and sets for children's stores.",
    image: assetPath("/images/categories/babywear.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹280 – ₹480",
    targetBuyerNote: "Ultra-soft bio-washed newborn and infant essentials.",
    popularItems: ["Snap-Button Rompers", "Cotton Sleepsuits", "Printed Bodysuits", "Infant Gift Sets"],
  },
  {
    id: "cat-df",
    slug: "dresses-frocks",
    name: "Dresses & Frocks",
    title: "Wholesale Dresses & Frocks",
    shortDesc: "Flared cotton frocks, pastel tiered sundresses, and premium woven occasion dresses.",
    seoDesc: "Wholesale frocks and dresses supplier in Bangalore. Ready wholesale stock with flexible quantities for boutiques and clothing stores.",
    image: assetPath("/images/categories/dresses-frocks.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹340 – ₹620",
    targetBuyerNote: "Boutique-favorite floral prints and designer occasion silhouettes.",
    popularItems: ["Smocked Summer Frocks", "Chiffon Tiered Frocks", "Embroidered Cotton Dresses"],
  },
  {
    id: "cat-ew",
    slug: "ethnic-wear",
    name: "Ethnic & Festive",
    title: "Wholesale Kids Ethnic Wear",
    shortDesc: "Boys kurta-pyjama sets, jackets, girls lehenga-cholis, and festive occasion ensembles.",
    seoDesc: "Kids ethnic wear wholesale in Bangalore Sultanpete. Traditional festive outfits with comfortable kid-safe linings for retail stores.",
    image: assetPath("/images/categories/ethnic-wear.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹380 – ₹680",
    targetBuyerNote: "High-margin festive and wedding collection essentials.",
    popularItems: ["Silk-Blend Kurta Sets", "Flared Lehenga Cholis", "Nehru Jacket Combos"],
  },
  {
    id: "cat-sc",
    slug: "sets-coords",
    name: "Sets & Co-ords",
    title: "Wholesale Kids Sets & Co-ords",
    shortDesc: "Pre-coordinated matching top and bottom pairs for effortless merchandising and fast sales.",
    seoDesc: "Wholesale kidswear sets and co-ords in Bangalore. Coordinated two-piece and three-piece sets offering high value to retailers.",
    image: assetPath("/images/categories/sets-coords.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹320 – ₹590",
    targetBuyerNote: "Best-selling bundle units with high basket value for shops.",
    popularItems: ["Dungaree Sets", "Resort Collar Co-ords", "Hoodie & Jogger Sets"],
  },
  {
    id: "cat-nw",
    slug: "nightwear",
    name: "Nightwear & Loungewear",
    title: "Wholesale Kids Sleepwear & Loungewear",
    shortDesc: "Breathable 100% cotton printed pajama sets, night suits, and all-day lounge co-ords.",
    seoDesc: "Wholesale kids nightwear supplier in Bangalore. Super-soft pure cotton night suits with fun child-friendly motifs.",
    image: assetPath("/images/categories/nightwear.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹300 – ₹480",
    targetBuyerNote: "Consistent year-round demand for kids loungewear.",
    popularItems: ["Animal Print Night Suits", "Button-Down Pajama Sets", "Shorts Loungewear"],
  },
  {
    id: "cat-pw",
    slug: "partywear",
    name: "Party & Occasion Wear",
    title: "Wholesale Kids Partywear",
    shortDesc: "Elaborate birthday gowns, sequins, tuxedo sets, waistcoats, and formal celebrations wear.",
    seoDesc: "Wholesale kids partywear in Bangalore. Dazzling, comfortable party dresses and boys formal suits for multi-brand boutiques.",
    image: assetPath("/images/categories/partywear.jpg"),
    itemCountText: "Showroom Selection",
    indicativePrice: "₹420 – ₹750",
    targetBuyerNote: "Premium visual appeal with lucrative retail markups.",
    popularItems: ["Tulle Gowns with Cans", "3-Piece Waistcoat Suits", "Sequin Birthday Dresses"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}
