export default function ConsultationCTA() {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div className="section-label" style={{ textAlign: "center" }}>
          Premier échange gratuit
        </div>
        <h2>Parlons de votre projet — gratuitement</h2>
        <p>
          Nous offrons un premier échange de 30 minutes sans engagement pour
          comprendre votre besoin et vous dire honnêtement si on peut vous
          aider. Pas de présentation commerciale, pas de jargon technique —
          juste une conversation utile.
        </p>
        <a
          href="/?message=Je%20souhaite%20r%C3%A9server%20un%20%C3%A9change%20gratuit%20de%2030%20minutes.#contact"
          className="btn btn-dark"
        >
          Réserver mon échange gratuit
        </a>
      </div>
    </section>
  );
}
