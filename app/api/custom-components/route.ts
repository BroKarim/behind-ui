import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function POST(request: Request) {
  console.log("Received request");
  try {
    // Parse request body
    const body = await request.json();
    console.log("Request body:", body);
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "brokariim@gmail.com",
      subject: "Anonymous Message from Website",
      text: message,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email fremm be" }, { status: 500 });
  }
}
