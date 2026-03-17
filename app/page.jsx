export default function HomePage() {
  const services = [
    {
      title: "Applications web sur mesure",
      description:
        "Des outils métiers pensés pour vos équipes, vos processus et vos contraintes réelles.",
    },
    {
      title: "Automatisation et IA",
      description:
        "Réduction des tâches répétitives, génération de contenus, workflows intelligents et assistants internes.",
    },
    {
      title: "Intégration de vos outils",
      description:
        "Connexion entre ERP, CRM, formulaires, bases de données, emails et systèmes internes.",
    },
  ];

  const useCases = [
    "Portail client ou espace collaborateur",
    "Saisie terrain avec génération automatique de PDF",
    "Centralisation des données entre plusieurs outils",
    "Automatisation de demandes internes et validations",
    "Tableaux de bord métiers sur mesure",
    "Assistant IA interne pour retrouver l'information utile",
  ];

  const steps = [
    {
      number: "01",
      title: "Cadrage rapide",
      text: "On clarifie votre besoin, vos irritants et la valeur attendue.",
    },
    {
      number: "02",
      title: "Prototype concret",
      text: "On formalise une approche simple, visible et chiffrée.",
    },
    {
      number: "03",
      title: "Développement",
      text: "On construit une solution sur mesure, propre et évolutive.",
    },
    {
      number: "04",
      title: "Mise en ligne",
      text: "On déploie, on ajuste et on accompagne la prise en main.",
    },
  ];

  const benefits = [
    "Moins de ressaisie",
    "Moins d'erreurs manuelles",
    "Des processus plus fluides",
    "Une meilleure visibilité sur l'activité",
    "Des outils adaptés à votre façon de travailler",
    "Un vrai gain de temps pour vos équipes",
  ];

  return (
    <main>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">digitalintegration.ch</div>
          <a href="#contact" className="btn btn-outline">
            Parler de votre projet
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">
              Développement sur mesure - Automatisation - IA appliquée
            </div>
            <h1>
              Des solutions digitales sur mesure pour faire avancer votre
              entreprise.
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

            <div className="stats">
              <div className="card small-card">
                <h3>Sur mesure</h3>
                <p>Pensé selon vos besoins métier, pas selon un logiciel générique.</p>
              </div>
              <div className="card small-card">
                <h3>Pragmatique</h3>
                <p>Objectif simple: gagner du temps et améliorer l'efficacité.</p>
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
                  Emails, fichiers Excel, ressaisie manuelle, documents
                  dispersés et manque de visibilité.
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
                  <p>Connexions entre outils, notifications, documents, IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-cols">
          <div>
            <div className="section-label">Le constat</div>
            <h2>Vos outils actuels ne suivent plus vraiment votre façon de travailler.</h2>
          </div>

          <div className="grid-2">
            {[
              "Tâches manuelles répétitives",
              "Outils qui ne communiquent pas entre eux",
              "Fichiers dispersés et manque de visibilité",
              "Processus internes lourds ou fragiles",
            ].map((item) => (
              <div className="card" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="services">
        <div className="container">
          <div className="intro">
            <div className="section-label">Nos solutions</div>
            <h2>Ce que nous pouvons concevoir pour vous.</h2>
            <p>
              Chaque projet part de vos contraintes réelles. L'objectif n'est pas
              de rajouter un outil de plus, mais de créer un système utile.
            </p>
          </div>

          <div className="grid-3">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-cols">
          <div>
            <div className="section-label">Cas d'usage</div>
            <h2>Des projets concrets, ancrés dans le quotidien de l'entreprise.</h2>
            <p>
              L'idée n'est pas de vendre de la techno pour la techno. Le but,
              c'est de résoudre un vrai problème.
            </p>
          </div>

          <div className="grid-2">
            {useCases.map((item) => (
              <div className="card" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="intro dark-intro">
            <div className="section-label dark-label">Méthode</div>
            <h2>Une approche simple, rapide et orientée résultat.</h2>
          </div>

          <div className="grid-4">
            {steps.map((step) => (
              <div className="card dark-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-cols">
          <div>
            <div className="section-label">Pourquoi Digital Integration</div>
            <h2>Une logique business avant la logique technique.</h2>
            <p>
              Nous cherchons d'abord ce qui fera gagner du temps, fluidifiera vos
              opérations et améliorera votre pilotage.
            </p>
          </div>

          <div className="grid-2">
            {benefits.map((item) => (
              <div className="card soft-card" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-box">
            <div className="section-label dark-label">Contact</div>
            <h2>Vous avez une idée, un irritant métier ou un projet à lancer ?</h2>
            <p>
              Echangeons autour de votre besoin. On regarde ensemble ce qui peut
              être simplifié, automatisé ou développé sur mesure.
            </p>

            <div className="hero-actions">
              <a href="mailto:contact@digitalintegration.ch" className="btn btn-white">
                contact@digitalintegration.ch
              </a>
              <a href="tel:+41000000000" className="btn btn-outline-white">
                Planifier un échange
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
