import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function textField(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request) {
  let submitted;

  try {
    submitted = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid form submission." },
      { status: 400 },
    );
  }

  if (!submitted || typeof submitted !== "object" || Array.isArray(submitted)) {
    return Response.json(
      { error: "Invalid form submission." },
      { status: 400 },
    );
  }

  const name = textField(submitted.name, 120);
  const company = textField(submitted.company, 160);
  const email = textField(submitted.email, 254);
  const phone = textField(submitted.phone, 50);
  const product = textField(submitted.product, 160);
  const quantity = textField(submitted.quantity, 100);
  const message = textField(submitted.message, 5000);

  if (
    !name ||
    !company ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json(
      { error: "Please provide a valid name, company, email, and message." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD } = process.env;
  const port = Number(process.env.SMTP_PORT || 587);

  if (
    !SMTP_HOST ||
    !SMTP_USER ||
    !SMTP_PASSWORD ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    console.error(
      "Contact email is not configured: check SMTP environment variables.",
    );
    return Response.json(
      {
        error:
          "Enquiry email is temporarily unavailable. Please contact us directly.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const fields = [
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Product", product || "Not specified"],
    ["Quantity", quantity || "Not specified"],
    ["Message", message],
  ];

  try {
    await transporter.sendMail({
      from: { name: `${siteConfig.name} website`, address: SMTP_USER },
      to: siteConfig.contact.email,
      replyTo: email,
      subject: "New website enquiry - vinbioTECH",
      text: fields.map(([label, value]) => `${label}:\n${value}`).join("\n\n"),
      html: `<h2>New website enquiry</h2><dl>${fields
        .map(
          ([label, value]) =>
            `<dt><strong>${escapeHtml(label)}</strong></dt><dd>${escapeHtml(value).replace(/\n/g, "<br>")}</dd>`,
        )
        .join("")}</dl>`,
    });

    return Response.json({ message: "Enquiry sent." });
  } catch (error) {
    console.error("Contact enquiry email failed:", error);
    return Response.json(
      { error: "Unable to send your enquiry. Please try again later." },
      { status: 502 },
    );
  }
}
