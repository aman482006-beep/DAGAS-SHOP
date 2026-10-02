/**
 * Formatting, class helper, and asset path utilities for GitHub Pages and Custom Domains
 */

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPriceINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

// When hosted on GitHub Pages repository subdirectory (e.g. /DAGAS-SHOP)
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : (process.env.NODE_ENV === "production" ? "/DAGAS-SHOP" : "");

export function assetPath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("//") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (BASE_PATH && !clean.startsWith(BASE_PATH)) {
    return `${BASE_PATH}${clean}`;
  }
  return clean;
}
