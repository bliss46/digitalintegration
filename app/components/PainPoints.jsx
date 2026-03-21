const painPoints = [
  "Tâches manuelles répétitives",
  "Outils qui ne communiquent pas entre eux",
  "Fichiers dispersés et manque de visibilité",
  "Processus internes lourds ou fragiles",
];

export default function PainPoints() {
  return (
    <section className="section">
      <div className="container two-cols">
        <div>
          <div className="section-label">Le constat</div>
          <h2>
            Vos outils actuels ne suivent plus vraiment votre façon de
            travailler.
          </h2>
        </div>

        <div className="grid-2">
          {painPoints.map((item) => (
            <div className="card hover-card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
