const benefits = [
  "Moins de ressaisie",
  "Moins d'erreurs manuelles",
  "Des processus plus fluides",
  "Une meilleure visibilité sur l'activité",
  "Des outils adaptés à votre façon de travailler",
  "Un vrai gain de temps pour vos équipes",
];

export default function Benefits() {
  return (
    <section className="section">
      <div className="container two-cols">
        <div>
          <div className="section-label">Pourquoi Digital Integration</div>
          <h2>Une logique business avant la logique technique.</h2>
          <p>
            Nous cherchons d'abord ce qui fera gagner du temps, fluidifiera
            vos opérations et améliorera votre pilotage.
          </p>
        </div>

        <div className="grid-2">
          {benefits.map((item) => (
            <div className="card soft-card hover-card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
