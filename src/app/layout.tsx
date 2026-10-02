import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { COMPANY } from "@/data/company";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#8F6116",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dagasshop.com"),
  title: {
    default: "DAGAS SHOP | Wholesale Kidswear Supplier in Bangalore, India",
    template: "%s | DAGAS SHOP Bangalore",
  },
  description:
    "Wholesale kidswear supplier located in Sultanpete, Bengaluru. Quality children's clothing from ₹300–₹600+ range with flexible quantities, no fixed MOQ, and bulk manufacturing support.",
  keywords: [
    "kidswear wholesaler Bangalore",
    "wholesale kidswear Bangalore",
    "kids clothing wholesale Bangalore",
    "kids clothing supplier Bangalore",
    "kids garments wholesale Bangalore",
    "children's clothing wholesaler Bangalore",
    "DAGAS SHOP",
    "DAGAS SHOP Bangalore",
    "kidswear Sultanpete",
    "Chickpet kids clothing wholesale",
    "kidswear manufacturer Bangalore",
  ],
  authors: [{ name: "DAGAS SHOP" }],
  creator: "DAGAS SHOP",
  publisher: "DAGAS SHOP",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DAGAS SHOP | Wholesale Kidswear Supplier in Bangalore",
    description:
      "Wholesale children's clothing supplier in Bengaluru. Flexible quantities, no fixed MOQ, wholesale catalogue from ₹300–₹600+, and bulk manufacturing support.",
    url: "https://www.dagasshop.com",
    siteName: "DAGAS SHOP",
    images: [
      {
        url: "/images/hero/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "DAGAS SHOP - Wholesale Kidswear Supplier Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAGAS SHOP | Wholesale Kidswear Bangalore",
    description:
      "Kidswear wholesale supplier and bulk manufacturer in Sultanpete, Bengaluru. Flexible quantities & ready catalogue.",
    images: ["/images/hero/hero-banner.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppButton variant="floating" sourceContext="global_floating_button" />
      </body>
    </html>
  );
}
