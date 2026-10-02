import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MessageCircle, FileText, ArrowLeft } from "lucide-react";
import { WhatsAppLinks } from "@/lib/whatsapp";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.name} Wholesale Bangalore | ${cat.title}`,
    description: cat.seoDesc,
    alternates: {
      canonical: `/shop/${cat.slug}`,
    },
    openGraph: {
      title: `${cat.name} Wholesale Kidswear | DAGAS SHOP Bangalore`,
      description: cat.seoDesc,
      url: `https://www.dagasshop.com/shop/${cat.slug}`,
      images: [cat.image],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
          <Breadcrumbs
            items={[
              { name: "Wholesale Catalogue", href: "/shop" },
              { name: category.name },
            ]}
          />

          <div className="mt-4 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              Wholesale Category • Bengaluru Stock
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-950">
              {category.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {category.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="bg-dagas-100 text-dagas-900 font-semibold px-3 py-1 rounded-full border border-dagas-200">
                Indicative Tier: {category.indicativePrice}
              </span>
              <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-medium">
                {category.targetBuyerNote}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Categories</span>
            </Link>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500 font-medium">
              {products.length} Items Available
            </span>
          </div>

          <Link
            href="/request-catalogue"
            className="text-xs font-semibold text-dagas-600 hover:underline flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download PDF Sheet</span>
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              New Designs Arriving
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Our {category.name} showroom stock updates frequently. Connect with our Sultanpete sales desk directly on WhatsApp for fresh arrival photos.
            </p>
            <a
              href={WhatsAppLinks.catalogue()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Showroom for {category.name}</span>
            </a>
          </div>
        )}

        {/* Category Information Drawer / Wholesale note */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-gray-200/90 shadow-xs space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-950">
            About Sourcing {category.name} from DAGAS SHOP
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {category.seoDesc} All consignments are packed in protective master bundles with clear age-group indicators, size stickers, and individual polybags suitable for immediate boutique display. For custom labeling or bulk batch manufacturing, connect with our commercial team.
          </p>
        </div>
      </div>
    </div>
  );
}
