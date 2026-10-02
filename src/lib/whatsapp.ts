import { COMPANY, WHATSAPP_MESSAGES } from "@/data/company";

/**
 * Creates pre-filled WhatsApp click-to-chat links
 */
export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encoded}`;
}

export const WhatsAppLinks = {
  general: () => createWhatsAppLink(WHATSAPP_MESSAGES.general),
  catalogue: () => createWhatsAppLink(WHATSAPP_MESSAGES.catalogue),
  manufacturing: () => createWhatsAppLink(WHATSAPP_MESSAGES.bulkManufacturing),
  product: (productName: string, sku: string) => 
    createWhatsAppLink(WHATSAPP_MESSAGES.productEnquiry(productName, sku)),
  international: () => createWhatsAppLink(WHATSAPP_MESSAGES.international),
  storeVisit: () => createWhatsAppLink(WHATSAPP_MESSAGES.visitStore),
};
