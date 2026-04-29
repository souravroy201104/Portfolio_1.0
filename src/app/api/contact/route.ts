// src/app/api/contact/route.ts
// Wire up a real email provider here.
// By default it just validates the payload and returns success.
// To use Resend: `npm i resend` and set RESEND_API_KEY + CONTACT_TO_EMAIL in .env.local

import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── Optional: send via Resend ──────────────────────────────────────────
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio <noreply@yourdomain.com>",
    //   to: process.env.CONTACT_TO_EMAIL!,
    //   subject: body.subject ?? `New message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });
    // ────────────────────────────────────────────────────────────────────────

    console.log("[Contact Form]", { name, email, subject: body.subject, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
