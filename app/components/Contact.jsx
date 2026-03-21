import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="section-label dark-label">Contact</div>
          <h2>Vous avez une idée, un besoin ou un projet à lancer ?</h2>
          <p>
            Echangeons autour de votre besoin. On regarde ensemble ce qui peut
            être simplifié, automatisé ou développé sur mesure.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
