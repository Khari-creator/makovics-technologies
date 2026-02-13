import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export function OPTIONS(req: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(req),
  });
}

export async function POST(req: Request) {
  const corsHeaders = getCorsHeaders(req);
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400, headers: corsHeaders }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_RECEIVER,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER) {
      const isDev = process.env.NODE_ENV !== "production";
      if (isDev) {
        console.warn("Email service is not configured. Skipping send in dev.");
        return NextResponse.json(
          { success: true, warning: "Email not configured" },
          { headers: corsHeaders }
        );
      }
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500, headers: corsHeaders }
      );
    }

    const port = Number(SMTP_PORT);
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.verify(); 

    const serviceLabel = service || "General";
    const subject = `New Contact Request - ${serviceLabel}`;
    const text = `New Contact Message\n\nName: ${name}\nEmail: ${email}\nService: ${serviceLabel}\n\nMessage:\n${message}\n`;

    await transporter.sendMail({
      from: `"Makovics" <${SMTP_USER}>`,
      sender: SMTP_USER,
      to: CONTACT_RECEIVER,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      envelope: {
        from: SMTP_USER,
        to: CONTACT_RECEIVER,
      },
    });

    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      { error: isDev ? String(error) : "Failed to send message" },
      { status: 500, headers: corsHeaders }
    );
  }
}
