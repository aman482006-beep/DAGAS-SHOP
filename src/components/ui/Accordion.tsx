"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: string | React.ReactNode;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(items.length > 0 ? [items[0].id] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-gray-200 border-y border-gray-200", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4 sm:py-5">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left group gap-4"
            >
              <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-dagas-600 transition-colors">
                {item.title}
              </span>
              <span
                className={cn(
                  "p-1.5 rounded-full bg-gray-50 text-gray-500 group-hover:bg-dagas-50 group-hover:text-dagas-600 transition-transform duration-200 flex-shrink-0",
                  isOpen && "transform rotate-180 bg-dagas-100 text-dagas-700"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed pr-6 animate-fadeIn">
                {typeof item.content === "string" ? (
                  <p>{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
