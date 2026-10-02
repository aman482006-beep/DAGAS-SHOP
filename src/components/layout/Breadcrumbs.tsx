import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dagasshop.com/",
    },
    ...items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: it.name,
      ...(it.href ? { item: `https://www.dagasshop.com${it.href}` } : {}),
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaItems,
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0 text-xs text-gray-500">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.name} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-gray-400" />
                {isLast || !item.href ? (
                  <span className="font-semibold text-gray-800" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
