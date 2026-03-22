const plans = [
  {
    name: "Starter",
    price: "dès CHF 2'500",
    subtitle: "L'essentiel pour démarrer",
    features: [
      "Application web simple ou formulaire intelligent",
      "1 automatisation de processus",
      "Livraison en 2 à 3 semaines",
      "Support 30 jours inclus",
    ],
    cta: "Démarrer un projet",
    featured: false,
  },
  {
    name: "Business",
    price: "dès CHF 6'000",
    subtitle: "Pour aller plus loin",
    features: [
      "Application web sur mesure multi-fonctions",
      "Intégrations entre vos outils (ERP, CRM, etc.)",
      "Automatisations avancées",
      "Livraison en 4 à 6 semaines",
      "Support 60 jours inclus",
    ],
    cta: "Nous contacter",
    featured: true,
  },
  {
    name: "Sur mesure",
    price: "Sur devis",
    subtitle: "Projet complexe ou multi-modules",
    features: [
      "Projet complexe ou multi-modules",
      "Architecture évolutive",
      "Accompagnement long terme",
      "Délai selon cahier des charges",
    ],
    cta: "Demander un devis",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="tarifs">
      <div className="container">
        <div className="intro">
          <div className="section-label">Tarifs</div>
          <h2>Des formules claires, sans surprise.</h2>
          <p>
            Chaque projet est unique — ces formules donnent un cadre de
            référence. Nous établissons toujours un devis précis avant de
            démarrer.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card pricing-card${plan.featured ? " pricing-featured" : ""}`}
            >
              <div className="pricing-top">
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">{plan.price}</div>
                <div className="pricing-subtitle">{plan.subtitle}</div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`btn ${plan.featured ? "btn-white" : "btn-dark"}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          Tous nos projets sont réalisés en Suisse. Nos tarifs sont exprimés en
          CHF, TVA non applicable.
        </p>
      </div>
    </section>
  );
}
