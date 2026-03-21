"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Tous les champs sont obligatoires." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Adresse email invalide." };
  }

  if (message.length < 10) {
    return {
      success: false,
      error: "Votre message doit contenir au moins 10 caractères.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || "info@digitalintegration.ch",
      subject: `Nouveau message de ${name} via le site`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <br/>
        <p><strong>Message :</strong></p>
        <p style="white-space:pre-line">${message}</p>
      `,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Une erreur est survenue lors de l'envoi. Réessayez plus tard.",
    };
  }
}
