const steps = [
  {
    number: "01",
    title: "Compréhension du besoin",
    text: "On clarifie votre contexte, vos irritants et la valeur attendue.",
  },
  {
    number: "02",
    title: "Cadrage de la solution",
    text: "On définit une approche simple, réaliste et adaptée à votre entreprise.",
  },
  {
    number: "03",
    title: "Développement",
    text: "On construit une solution propre, évolutive et centrée sur l'usage.",
  },
  {
    number: "04",
    title: "Mise en ligne",
    text: "On déploie, on ajuste et on accompagne la prise en main.",
  },
];

export default function Methodology() {
  return (
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
  );
}
