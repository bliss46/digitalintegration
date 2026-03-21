const useCases = [
  "Portail client ou espace collaborateur",
  "Saisie terrain avec génération automatique de PDF",
  "Centralisation de données entre plusieurs outils",
  "Automatisation de validations et demandes internes",
  "Tableaux de bord métiers sur mesure",
  "Assistant IA interne pour retrouver l'information utile",
];

export default function UseCases() {
  return (
    <section className="section">
      <div className="container two-cols">
        <div>
          <div className="section-label">Cas d'usage</div>
          <h2>
            Des projets concrets, ancrés dans le quotidien de l'entreprise.
          </h2>
          <p>
            L'idée n'est pas de vendre de la techno pour la techno. Le but,
            c'est de résoudre un vrai problème.
          </p>
        </div>

        <div className="grid-2">
          {useCases.map((item) => (
            <div className="card hover-card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
