import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, interest, brief } = body;
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeInterest = escapeHtml(interest || "Not specified");
        const safeBrief = escapeHtml(brief);

        // Basic validation
        if (!name || !email || !brief) {
            return NextResponse.json(
                { error: "Name, email, and project brief are required." },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = Number(process.env.SMTP_PORT || "587");
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const mailTo = process.env.CONTACT_TO_EMAIL || "suparnnayak56@gmail.com";
        const mailFrom = process.env.CONTACT_FROM_EMAIL || smtpUser;
        const fromName = process.env.CONTACT_FROM_NAME || "Suparn Nayak Portfolio";

        if (!smtpHost || !smtpUser || !smtpPass || !mailFrom) {
            return NextResponse.json(
                {
                    error: "Contact form is not configured yet. Add your SMTP settings to enable direct email from the website.",
                    manualEmail: "suparnnayak56@gmail.com",
                },
                { status: 503 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        await transporter.sendMail({
            from: `"${fromName}" <${mailFrom}>`,
            to: mailTo,
            replyTo: email,
            subject: `New Portfolio Inquiry from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Interest: ${interest || "Not specified"}`,
                "",
                "Message:",
                brief,
            ].join("\n"),
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
                    <h2>New Portfolio Inquiry</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Interest:</strong> ${safeInterest}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${safeBrief}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Check your SMTP settings or try again later." },
            { status: 500 }
        );
    }
}
