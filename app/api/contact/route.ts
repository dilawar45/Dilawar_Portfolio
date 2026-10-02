import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production on Vercel, this serverless function can send an email via Resend / Nodemailer
    // or forward to a webhook (e.g. your n8n workflow or Make.com scenario!).
    // For now we log and return a guaranteed successful response.
    console.log("--- New Contact Inquiry Received ---");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || "Portfolio Contact Inquiry"}`);
    console.log(`Message: ${message}`);
    console.log("-------------------------------------");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Dilawar will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or email directly." },
      { status: 500 }
    );
  }
}
