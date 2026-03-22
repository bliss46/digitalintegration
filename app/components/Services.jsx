const services = [
  {
    title: "Applications web sur mesure",
    description:
      "Des outils métiers conçus selon vos besoins réels, vos équipes et vos processus.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Automatisation et IA",
    description:
      "Réduction des tâches répétitives, workflows intelligents, génération de contenus et assistance métier.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Intégration de vos outils",
    description:
      "Connexion entre ERP, CRM, formulaires, bases de données et systèmes internes.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sites internet",
    description:
      "Création de sites vitrines et de landing pages modernes, rapides et optimisés pour le référencement.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
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

        <div className="grid-2">
          {services.map((service) => (
            <div className="card hover-card service-card" key={service.title}>
              <div className="service-img-wrap">
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-img"
                />
              </div>
              <div className="service-content">
                <div className="service-dot"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
