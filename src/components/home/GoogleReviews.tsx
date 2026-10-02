import React from "react";
import { Star, ExternalLink, ShieldCheck, Quote } from "lucide-react";
import { GOOGLE_REVIEWS_META, GENUINE_REVIEWS } from "@/data/reviews";

export function GoogleReviews() {
  return (
    <section className="py-16 sm:py-24 bg-stone-50/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold mb-2 border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Google Profile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950">
              Customer Feedback &amp; Ratings
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Authentic reviews from verified visitors on Google Maps for DAGAS SHOP (Place ID: {GOOGLE_REVIEWS_META.placeId}).
            </p>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200/90 shadow-xs self-start sm:self-auto">
            <div className="text-center pr-4 border-r border-gray-100">
              <span className="text-3xl font-bold text-gray-950 font-mono leading-none">
                {GOOGLE_REVIEWS_META.averageRating}
              </span>
              <span className="text-[10px] text-gray-400 block mt-1 font-medium">OUT OF 5.0</span>
            </div>

            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(GOOGLE_REVIEWS_META.averageRating)
                        ? "fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600 font-medium block mt-1">
                {GOOGLE_REVIEWS_META.totalReviews} Total Google Ratings
              </span>
            </div>
          </div>
        </div>

        {/* Genuine Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GENUINE_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-gray-400">
                    {rev.readableDate}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-5 h-5 text-gray-200 absolute -top-1 -left-1 opacity-70" />
                  <p className="text-sm text-gray-700 italic pl-5 leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-900">
                  {rev.authorName}
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                  Verified Reviewer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Profile */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={GOOGLE_REVIEWS_META.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-300 hover:bg-stone-50 text-gray-900 font-semibold text-xs sm:text-sm transition-colors shadow-xs"
          >
            <span>Read More Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>

          <a
            href={GOOGLE_REVIEWS_META.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-dagas-600 hover:text-dagas-700 underline underline-offset-4"
          >
            <span>Leave a Review on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
