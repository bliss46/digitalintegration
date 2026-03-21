const services = [
  {
    title: "Applications web sur mesure",
    description:
      "Des outils métiers conçus selon vos besoins réels, vos équipes et vos processus.",
  },
  {
    title: "Automatisation et IA",
    description:
      "Réduction des tâches répétitives, workflows intelligents, génération de contenus et assistance métier.",
  },
  {
    title: "Intégration de vos outils",
    description:
      "Connexion entre ERP, CRM, formulaires, bases de données et systèmes internes.",
  },
];

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="intro">
          <div className="section-label">Nos solutions</div>
          <h2>Ce que nous pouvons concevoir pour vous.</h2>
          <p>
            Chaque projet part de vos contraintes réelles. L'objectif n'est
            pas d'ajouter un outil de plus, mais de créer un système utile.
          </p>
        </div>

        <div className="grid-3">
          {services.map((service) => (
            <div className="card hover-card service-card" key={service.title}>
              <div className="service-dot"></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
