import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blogPosts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | DAGAS SHOP Bangalore`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.dagasshop.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs
            items={[
              { name: "Retail Guides", href: "/blog" },
              { name: post.title },
            ]}
          />

          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="font-bold text-dagas-600 uppercase tracking-wider">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
              <span>•</span>
              <span>{post.publishedDate}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-gray-950 leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
              {post.summary}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-8">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
              {sec.bulletPoints && (
                <ul className="space-y-2 pt-2">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-dagas-600 flex-shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Author & DAGAS Box */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-stone-50 border border-stone-200">
            <div>
              <span className="text-xs text-gray-500 font-medium">Published by:</span>
              <h3 className="font-bold text-gray-900 text-sm mt-0.5">{post.author}</h3>
              <p className="text-xs text-gray-500">Sultanpete Main Road, Bengaluru, Karnataka</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/request-catalogue"
                className="px-4 py-2.5 rounded-xl bg-gray-950 text-white font-semibold text-xs hover:bg-gray-800 transition-colors shadow-xs"
              >
                Request Catalogue
              </Link>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-colors shadow-xs"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-950"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Buying Guides</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
