import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "gray" | "green" | "blue" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({ children, variant = "gold", className, size = "sm" }: BadgeProps) {
  const variantStyles = {
    gold: "bg-dagas-100 text-dagas-900 border border-dagas-200",
    gray: "bg-gray-100 text-gray-800 border border-gray-200",
    green: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    blue: "bg-blue-50 text-blue-800 border border-blue-200",
    outline: "bg-transparent text-gray-700 border border-gray-300",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium rounded-full",
    md: "text-sm px-3 py-1 font-medium rounded-full",
  };

  return (
    <span className={cn("inline-flex items-center gap-1 tracking-wide", variantStyles[variant], sizeStyles[size], className)}>
      {children}
    </span>
  );
}
