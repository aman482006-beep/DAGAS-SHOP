"use client";

import React from "react";
import { MapPin, Navigation, Clock, Phone, Building2, ExternalLink } from "lucide-react";
import { COMPANY } from "@/data/company";
import { trackConversion } from "@/lib/analytics";

export function LocationStore() {
  const handleDirectionsClick = () => {
    trackConversion("directions_click", {
      category: "Location",
      label: "google_maps_directions",
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Store Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5 text-dagas-600" />
                <span>Physical Wholesale Showroom</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950">
                Visit DAGAS SHOP in Bengaluru
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Located in the heart of Sultanpete, Bengaluru&apos;s celebrated wholesale apparel district. Retailers and bulk buyers are invited to inspect fabrics, finishes, and new stock in person.
              </p>
            </div>

            {/* Verified Physical Address Card */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dagas-600 flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-800 space-y-1">
                  <h3 className="font-bold text-gray-950 text-base">DAGAS SHOP</h3>
                  <p className="text-gray-700">Mohana Square, Shop No. 301, 3rd Floor</p>
                  <p className="text-gray-700">#132/1, Sultanpet Main Road</p>
                  <p className="text-gray-700">Bengaluru, Karnataka 560053, India</p>
                  <p className="text-xs text-dagas-700 font-medium pt-1">
                    Landmark: Sultanpete / Chickpet Commercial Wholesale Market
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200/80 space-y-2 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-dagas-600" />
                  <span>{COMPANY.businessHours.days}: {COMPANY.businessHours.hours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-dagas-600" />
                  <a href={`tel:${COMPANY.phone}`} className="hover:text-gray-950 font-medium">
                    {COMPANY.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY.google.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-950 hover:bg-gray-800 text-white font-semibold text-sm transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-dagas-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${COMPANY.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-300 hover:bg-stone-50 text-gray-800 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>

          {/* Right Interactive / Responsive Map Embed Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-stone-100 min-h-[350px] relative flex flex-col">
            <iframe
              title="DAGAS SHOP Sultanpete Bengaluru Google Maps Location"
              src={COMPANY.google.embedMapUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="p-3 bg-white border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
              <span>Google Maps Verified Listing (Place ID: {COMPANY.google.placeId})</span>
              <a
                href={COMPANY.google.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-dagas-600 font-medium hover:underline"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
