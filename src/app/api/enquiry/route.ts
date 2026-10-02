import { NextRequest, NextResponse } from "next/server";

// Simple sanitization helper to strip dangerous tags/scripts
function sanitize(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "") // Strip brackets
    .trim()
    .slice(0, 1500); // Prevent buffer injection
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check (anti-bot)
    if (body.website_url || body._gotcha) {
      return NextResponse.json({ success: true, message: "Processed" }, { status: 200 });
    }

    const name = sanitize(body.name);
    const businessName = sanitize(body.businessName);
    const phone = sanitize(body.phone || body.whatsapp);
    const email = sanitize(body.email);
    const city = sanitize(body.city);
    const country = sanitize(body.country || "India");
    const requirement = sanitize(body.requirement || body.customRequirements || body.productsInterestedIn);
    const enquiryType = sanitize(body.type || "general_enquiry");
    const timestamp = new Date().toISOString();

    // Basic Validation
    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: "Name and contact number/email are required." },
        { status: 400 }
      );
    }

    const leadRecord = {
      enquiryType,
      name,
      businessName,
      phone,
      email,
      city,
      country,
      requirement,
      approxQuantity: sanitize(body.approxQuantity),
      productType: sanitize(body.productType),
      timestamp,
      userAgent: req.headers.get("user-agent") || "unknown",
      ip: req.headers.get("x-forwarded-for") || "unknown",
    };

    // Log the lead record for business capture
    console.log("[DAGAS B2B LEAD CAPTURED]:", JSON.stringify(leadRecord, null, 2));

    // Optional webhook forwarding (e.g., Slack, CRM, or Zapier webhook if configured in env)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
        });
      } catch (webhookErr) {
        console.warn("[DAGAS Webhook] Forwarding failed:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[DAGAS API Error]:", error);
    return NextResponse.json(
      { error: "Internal server error. Please connect via WhatsApp." },
      { status: 500 }
    );
  }
}
