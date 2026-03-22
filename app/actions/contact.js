"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    await resend.emails.send({
      from: "Digital Integration <contact@digitalintegration.ch>",
      replyTo: email,
      to: process.env.CONTACT_EMAIL || "info@digitalintegration.ch",
      subject: `Nouveau message de ${name} via le site`,
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
