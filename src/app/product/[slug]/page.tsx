import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  MessageCircle, 
  FileText, 
  ShieldCheck, 
  Truck, 
  Layers, 
  Sparkles, 
  Share2, 
  ArrowLeft,
  CheckCircle2
} from "lucide-react";
import { PRODUCTS, getProductBySlug, getProductsByCategory } from "@/data/products";
import { COMPANY, WHATSAPP_MESSAGES } from "@/data/company";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/shop/ProductCard";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} (${product.sku}) | Wholesale Kidswear Bangalore`,
    description: `Buy wholesale ${product.name} (${product.sku}) in Bangalore from DAGAS SHOP. ${product.description} Fabric: ${product.fabric}.`,
    alternates: {
      canonical: `/product/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} (${product.sku}) - Wholesale Kidswear | DAGAS SHOP`,
      description: product.description,
      url: `https://www.dagasshop.com/product/${product.slug}`,
      images: [product.images[0]],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  // Pre-filled WhatsApp message as explicitly required:
  // "Hi DAGAS SHOP, I'm interested in Product DG-001. Please share wholesale pricing and availability."
  const customWhatsAppMsg = WHATSAPP_MESSAGES.productEnquiry(product.name, product.sku);
  const whatsappUrl = createWhatsAppLink(customWhatsAppMsg);

  // Related products from same category
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // Product JSON-LD schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://www.dagasshop.com${product.images[0]}`,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "DAGAS SHOP",
    },
    category: product.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: product.price || 350,
      lowPrice: 300,
      highPrice: 600,
      offerCount: "100",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "DAGAS SHOP",
      },
    },
  };

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Top Breadcrumb Nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { name: "Wholesale Catalogue", href: "/shop" },
              { name: product.category, href: `/shop/${product.categorySlug}` },
              { name: `${product.name} (${product.sku})` },
            ]}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xs p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-100 border border-gray-200">
                <Image
                  src={product.images[0]}
                  alt={`${product.name} - Wholesale DAGAS SHOP (${product.sku})`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-gray-950 text-white font-mono text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                    SKU: {product.sku}
                  </span>
                  <Badge variant="green" size="md">
                    {product.availability}
                  </Badge>
                </div>
              </div>

              {/* Verified Showroom Disclaimer */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-gray-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-dagas-600 flex-shrink-0" />
                <span>
                  Authentic DAGAS Showroom item. Inspected at Mohana Square, Sultanpete, Bengaluru.
                </span>
              </div>
            </div>

            {/* Right: Product Details & B2B Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Category & Status */}
                <div className="flex items-center justify-between text-xs">
                  <Link
                    href={`/shop/${product.categorySlug}`}
                    className="font-bold text-dagas-600 uppercase tracking-wider hover:underline"
                  >
                    {product.category}
                  </Link>
                  <span className="text-gray-400">Bangalore Ready Stock</span>
                </div>

                {/* Product Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-950">
                  {product.name}
                </h1>

                {/* Wholesale Price Box */}
                <div className="p-4 rounded-2xl bg-dagas-50/80 border border-dagas-200/80 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-dagas-800 block">
                    Indicative Wholesale Tier
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-950 font-mono">
                      {product.priceRange}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      (B2B Trade Pricing)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 pt-1">
                    * Exact pricing quoted based on bundle volume and transport destination.
                  </p>
                </div>

                {/* Description */}
                <div className="text-sm text-gray-700 leading-relaxed pt-1">
                  <p>{product.description}</p>
                </div>

                {/* Technical Specifications Table */}
                <div className="pt-2">
                  <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Wholesale Specifications
                  </h2>
                  <dl className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                      <dt className="text-gray-500 font-medium">Product Code / SKU</dt>
                      <dd className="font-mono font-bold text-gray-900 mt-0.5">{product.sku}</dd>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                      <dt className="text-gray-500 font-medium">Age Group</dt>
                      <dd className="font-semibold text-gray-900 mt-0.5">{product.ageRange}</dd>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                      <dt className="text-gray-500 font-medium">Primary Fabric</dt>
                      <dd className="font-semibold text-gray-900 mt-0.5">{product.fabric}</dd>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                      <dt className="text-gray-500 font-medium">Quantity Guideline</dt>
                      <dd className="font-semibold text-emerald-700 mt-0.5">
                        {product.minQuantityGuideline || "Flexible Bundles"}
                      </dd>
                    </div>

                    {product.sizes && (
                      <div className="col-span-2 p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                        <dt className="text-gray-500 font-medium mb-1">Standard Size Run</dt>
                        <dd className="flex flex-wrap gap-1.5">
                          {product.sizes.map((sz) => (
                            <span
                              key={sz}
                              className="px-2.5 py-1 bg-white border border-gray-200 text-gray-800 text-xs font-medium rounded-md"
                            >
                              {sz}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )}

                    {product.details?.colors && (
                      <div className="col-span-2 p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                        <dt className="text-gray-500 font-medium mb-1">Available Colorways</dt>
                        <dd className="text-xs text-gray-700">
                          {product.details.colors.join(", ")}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>

              {/* Conversion Buttons: Dynamic WhatsApp Enquiry */}
              <div className="pt-6 border-t border-gray-100 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base transition-all shadow-md active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enquire on WhatsApp About {product.sku}</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/request-catalogue"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-950 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <FileText className="w-4 h-4 text-dagas-400" />
                    <span>Get Full Catalogue</span>
                  </Link>

                  {product.manufacturingEligible && (
                    <Link
                      href="/kidswear-manufacturer-bangalore"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-300 hover:bg-stone-50 text-gray-800 text-xs sm:text-sm font-semibold transition-colors text-center"
                    >
                      <span>Custom Bulk Run</span>
                    </Link>
                  )}
                </div>

                <p className="text-[11px] text-gray-500 text-center pt-1">
                  ⚡ Direct sales response from our Sultanpete sales desk within business hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products from Category */}
        {related.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
                  More From {product.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mt-1">
                  Related Wholesale Styles
                </h3>
              </div>

              <Link
                href={`/shop/${product.categorySlug}`}
                className="text-xs sm:text-sm font-semibold text-dagas-600 hover:underline"
              >
                View Category
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
