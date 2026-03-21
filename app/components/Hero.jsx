export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="container hero-grid">
        <div>
          <div className="badge">
            Développement sur mesure - Automatisation - Intégration digitale
          </div>

          <h1>
            Des solutions digitales <span>sur mesure</span> pour faire avancer
            votre entreprise.
          </h1>

          <p className="hero-text">
            Nous concevons des applications web, des automatisations et des
            intégrations qui simplifient vos processus, réduisent les tâches
            manuelles et créent de la vraie valeur.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-dark">
              Demander un échange
            </a>
            <a href="#services" className="btn btn-light">
              Voir les solutions
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">Approche pragmatique</div>
            <div className="trust-item">Solutions sur mesure</div>
            <div className="trust-item">Pensé pour PME et équipes métier</div>
          </div>

          <div className="stats">
            <div className="card small-card accent-card">
              <h3>Sur mesure</h3>
              <p>
                Pensé selon vos besoins métier, pas selon un logiciel
                générique.
              </p>
            </div>
            <div className="card small-card">
              <h3>Pragmatique</h3>
              <p>Objectif simple : gagner du temps et améliorer l'efficacité.</p>
            </div>
            <div className="card small-card">
              <h3>Evolutif</h3>
              <p>Une base propre qui peut grandir avec vos futurs projets.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card case-card">
            <div className="case-header">
              <div>
                <div className="eyebrow">Exemple de mission</div>
                <h2>Automatiser un processus métier</h2>
              </div>
              <span className="pill">Cas concret</span>
            </div>

            <div className="case-block case-before">
              <strong>Avant</strong>
              <p>
                Emails, fichiers Excel, ressaisie manuelle, informations
                dispersées et manque de visibilité.
              </p>
            </div>

            <div className="case-block case-after">
              <strong>Après</strong>
              <p>
                Une interface simple, un workflow automatisé, des données
                centralisées et des actions plus rapides.
              </p>
            </div>

            <div className="mini-grid">
              <div className="mini-card">
                <strong>Applications web</strong>
                <p>Portails, formulaires, dashboards, outils internes</p>
              </div>
              <div className="mini-card">
                <strong>Automatisation</strong>
                <p>Connexions entre outils, notifications, documents et IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
