"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Eye, Tag } from "lucide-react";
import { Product } from "@/data/products";
import { WhatsAppLinks } from "@/lib/whatsapp";
import { trackConversion } from "@/lib/analytics";
import { Badge } from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const whatsappUrl = WhatsAppLinks.product(product.name, product.sku);

  const handleEnquiryClick = () => {
    trackConversion("product_enquiry_click", {
      category: "ProductCard",
      product_name: product.name,
      sku: product.sku,
    });
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-dagas-300 transition-all duration-300">
      {/* Product Image Frame - 4:5 ratio */}
      <div className="relative aspect-[4/5] w-full bg-stone-100 overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={`${product.name} - Wholesale Kidswear Bangalore (${product.sku})`}
            fill
            priority={priority}
            className="object-cover group-hover:scale-102 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10 pointer-events-none">
          <span className="bg-gray-950/90 text-white font-mono text-[11px] font-semibold px-2 py-0.5 rounded shadow-xs">
            {product.sku}
          </span>
          {product.newArrival && (
            <Badge variant="gold" size="sm">
              New Arrival
            </Badge>
          )}
        </div>

        {/* Quick View Link overlay */}
        <Link
          href={`/product/${product.slug}`}
          className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none"
        >
          <span className="bg-white/95 text-gray-900 px-3.5 py-2 rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </span>
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>{product.category}</span>
            <span className="font-medium text-gray-700">{product.ageRange}</span>
          </div>

          <h3 className="font-bold text-gray-950 text-base group-hover:text-dagas-600 transition-colors line-clamp-1">
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Wholesale Price Guideline */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-gray-500 font-medium">Wholesale Guide:</span>
            <span className="text-sm font-bold text-dagas-700 font-mono">
              {product.priceRange}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-0.5">
            {product.minQuantityGuideline || "Flexible wholesale bundle"}
          </p>
        </div>

        {/* Action Buttons: Default is Enquire */}
        <div className="pt-1 grid grid-cols-2 gap-2">
          <Link
            href={`/product/${product.slug}`}
            className="w-full inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-semibold transition-colors text-center"
          >
            <span>Specs</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleEnquiryClick}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
