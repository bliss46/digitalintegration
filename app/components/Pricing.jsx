const services = [
  {
    icon: "🌐",
    title: "Site internet",
    items: [
      { label: "Landing page", price: "dès CHF 1'500" },
      { label: "Site vitrine 5–10 pages", price: "CHF 3'000 – 6'000" },
      { label: "Site avec espace client / formulaires avancés", price: "CHF 6'000 – 12'000" },
    ],
    delay: "Délai : 2 à 4 semaines",
  },
  {
    icon: "⚙️",
    title: "Application web sur mesure",
    items: [
      { label: "Outil interne simple (formulaire, dashboard)", price: "CHF 4'000 – 8'000" },
      { label: "Application métier multi-fonctions", price: "CHF 8'000 – 20'000" },
      { label: "Plateforme complexe", price: "Sur devis" },
    ],
    delay: "Délai : 4 à 10 semaines",
  },
  {
    icon: "🔄",
    title: "Automatisation",
    items: [
      { label: "Workflow simple (2–3 outils)", price: "dès CHF 1'500" },
      { label: "Automatisation avancée multi-étapes", price: "CHF 3'000 – 7'000" },
      { label: "Assistant IA métier", price: "CHF 4'000 – 10'000" },
    ],
    delay: "Délai : 1 à 3 semaines",
  },
  {
    icon: "🔗",
    title: "Intégration d'outils",
    items: [
      { label: "Connexion entre 2 systèmes (API)", price: "dès CHF 1'200" },
      { label: "Intégration ERP/CRM avec synchro de données", price: "CHF 3'000 – 8'000" },
      { label: "Architecture multi-systèmes", price: "Sur devis" },
    ],
    delay: "Délai : 1 à 4 semaines",
  },
];

export default function Pricing() {
  return (
    <section className="section" id="tarifs">
      <div className="container">
        <div className="intro">
          <div className="section-label">Tarifs</div>
          <h2>Des tarifs clairs, par type de projet</h2>
          <p>
            Chaque besoin est différent. Voici nos fourchettes indicatives selon
            le type de mission — nous établissons toujours un devis précis avant
            de démarrer.
          </p>
        </div>

        <div className="pricing-grid">
          {services.map((s) => (
            <div className="card pricing-card" key={s.title}>
              <div className="pricing-icon">{s.icon}</div>
              <div className="pricing-title">{s.title}</div>

              <ul className="pricing-items">
                {s.items.map((item) => (
                  <li key={item.label}>
                    <span className="pricing-item-label">{item.label}</span>
                    <span className="pricing-item-price">{item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-delay">{s.delay}</div>

              <a href="/#contact" className="btn btn-dark pricing-cta">
                Demander un devis
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
