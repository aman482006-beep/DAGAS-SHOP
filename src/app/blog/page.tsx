import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kidswear Wholesale Guides & Retail Insights | DAGAS SHOP Bangalore",
  description:
    "Expert sourcing guides for children's clothing retailers, boutique owners, and bulk buyers in India from DAGAS SHOP Bengaluru.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListingPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "Retail Guides & Insights" }]} />

          <div className="mt-4 max-w-4xl space-y-4">
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              B2B Merchant Advisory
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Kidswear Wholesale Buying Guides
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Practical guides on inventory ratios, supplier selection in Bangalore, and wholesale sourcing for growing children&apos;s boutiques.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-md hover:border-dagas-300 transition-all flex flex-col justify-between p-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="text-dagas-600 font-bold uppercase tracking-wider text-[11px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-950 leading-snug hover:text-dagas-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-dagas-600">
                <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 hover:underline">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-gray-400 font-normal">{post.publishedDate}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
