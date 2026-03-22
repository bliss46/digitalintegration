"use client";

import { useState, useRef, useEffect } from "react";
import { sendContactEmail } from "../actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const msg = params.get("message");
    if (msg) setMessage(msg);
  }, []);

  function validate(name, email, msg) {
    const errors = {};
    if (!name.trim()) errors.name = "Votre nom est requis.";
    if (!email.trim()) {
      errors.email = "Votre email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email invalide.";
    }
    if (!msg.trim()) {
      errors.message = "Votre message est requis.";
    } else if (msg.trim().length < 10) {
      errors.message = "Minimum 10 caractères.";
    }
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const msg = message;

    const errors = validate(name, email, msg);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    // include controlled message value in FormData
    data.set("message", msg);

    setFieldErrors({});
    setStatus("loading");

    const result = await sendContactEmail(data);

    if (result.success) {
      setStatus("success");
      setMessage("");
      formRef.current.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        <div className="contact-success-icon">✓</div>
        <h3>Message envoyé !</h3>
        <p>Merci, nous vous répondrons dans les plus brefs délais.</p>
        <button
          className="btn btn-outline-white"
          onClick={() => setStatus("idle")}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Nom</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Votre nom"
            autoComplete="name"
            aria-describedby={fieldErrors.name ? "error-name" : undefined}
          />
          {fieldErrors.name && (
            <span id="error-name" className="form-error">
              {fieldErrors.name}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            autoComplete="email"
            aria-describedby={fieldErrors.email ? "error-email" : undefined}
          />
          {fieldErrors.email && (
            <span id="error-email" className="form-error">
              {fieldErrors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Décrivez votre besoin ou votre projet..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={fieldErrors.message ? "error-message" : undefined}
        />
        {fieldErrors.message && (
          <span id="error-message" className="form-error">
            {fieldErrors.message}
          </span>
        )}
      </div>

      {status === "error" && (
        <div className="form-error-banner">{errorMsg}</div>
      )}

      <button
        type="submit"
        className="btn btn-white"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
