/**
 * B2B Lead & Conversion Analytics Helper
 * Tracks high-intent interactions: WhatsApp chats, catalogue requests,
 * manufacturing enquiries, phone calls, directions, and email clicks.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export type ConversionEvent = 
  | 'whatsapp_click'
  | 'catalogue_request_submit'
  | 'manufacturing_enquiry_submit'
  | 'contact_form_submit'
  | 'product_enquiry_click'
  | 'phone_call_click'
  | 'directions_click'
  | 'email_click'
  | 'view_item_details';

export interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  product_name?: string;
  sku?: string;
  source_page?: string;
  business_type?: string;
  [key: string]: unknown;
}

export function trackConversion(event: ConversionEvent, params: EventParams = {}) {
  try {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (typeof window.gtag === 'function') {
        window.gtag('event', event, {
          event_category: params.category || 'B2B_Conversion',
          event_label: params.label,
          value: params.value,
          ...params,
        });
      }

      // Meta Pixel (if loaded)
      if (typeof window.fbq === 'function') {
        if (event === 'catalogue_request_submit' || event === 'manufacturing_enquiry_submit') {
          window.fbq('track', 'Lead', {
            content_name: event,
            content_category: params.category,
          });
        } else if (event === 'whatsapp_click') {
          window.fbq('trackCustom', 'WhatsAppInitiate', params);
        }
      }

      // Console logging for verification during development
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[DAGAS Analytics] ${event}`, params);
      }
    }
  } catch (err) {
    console.warn('[DAGAS Analytics] Tracking error:', err);
  }
}
