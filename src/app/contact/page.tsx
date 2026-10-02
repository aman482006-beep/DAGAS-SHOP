import React from "react";
import { Metadata } from "next";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Building2, 
  ExternalLink 
} from "lucide-react";
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact DAGAS SHOP | Sultanpete Bangalore Wholesale Showroom",
  description:
    "Contact DAGAS SHOP kidswear wholesale supplier in Bangalore. Address: Shop No. 301, Mohana Square, Sultanpete Main Road. Phone & WhatsApp: +91 98862 31691.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-24">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "Contact DAGAS SHOP" }]} />

          <div className="mt-4 max-w-4xl space-y-4">
            <span className="text-xs font-bold text-dagas-600 tracking-wider uppercase">
              Showroom Inquiries &amp; Visit Coordination
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
              Contact DAGAS SHOP
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              Connect with our Sultanpete sales desk or schedule a physical showroom visit in Bengaluru.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Verified Business Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  Visit DAGAS SHOP
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Commercial wholesale showroom for retailers and bulk purchasers.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dagas-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">Showroom Address:</strong>
                    <p className="text-gray-700 font-medium">{COMPANY.name}</p>
                    <p className="text-gray-600">Shop No. 301, 3rd Floor, Mohana Square</p>
                    <p className="text-gray-600">#132/1, Sultanpet Main Road</p>
                    <p className="text-gray-600">Bengaluru, Karnataka 560053, India</p>
                    <span className="text-[11px] text-dagas-700 block mt-1 font-medium">
                      Commercial Wholesale Corridor (Near Chickpet Market)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                  <Phone className="w-4 h-4 text-dagas-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">Phone:</strong>
                    <a href={`tel:${COMPANY.phone}`} className="text-gray-700 hover:text-dagas-600">
                      {COMPANY.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">WhatsApp:</strong>
                    <a
                      href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      {COMPANY.phoneFormatted} (Direct Sales Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                  <Mail className="w-4 h-4 text-dagas-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">Business Email:</strong>
                    <a href={`mailto:${COMPANY.email}`} className="text-gray-700 hover:text-dagas-600">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                  <Clock className="w-4 h-4 text-dagas-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">Business Hours:</strong>
                    <p className="text-gray-600">{COMPANY.businessHours.days}: {COMPANY.businessHours.hours}</p>
                    <p className="text-gray-500 text-xs">{COMPANY.businessHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY.google.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-950 hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  <Navigation className="w-4 h-4 text-dagas-400" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.visitStore)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Visit Notice</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send Your Requirement Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
            <div>
              <span className="text-xs font-bold text-dagas-600 uppercase tracking-wider">
                Direct Inquiry
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mt-1">
                Send Your Requirement
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Let us know what categories or quantities you are sourcing for your retail shop.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <div className="p-4 sm:p-5 bg-stone-50 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-dagas-600" />
              <span className="font-semibold text-xs sm:text-sm text-gray-900">
                DAGAS SHOP Sultanpete Google Maps Location
              </span>
            </div>
            <a
              href={COMPANY.google.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-dagas-600 hover:underline flex items-center gap-1"
            >
              <span>Open in Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="h-[400px] w-full bg-stone-100">
            <iframe
              title="DAGAS SHOP Google Maps Location"
              src={COMPANY.google.embedMapUrl}
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
