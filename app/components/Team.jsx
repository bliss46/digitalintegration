const members = [
  {
    initials: "NF",
    name: "Nicolas Favre",
    title: "Co-fondateur & Responsable développement commercial",
    bio: "Avec 20 ans d'expérience dans l'IT en Suisse, Nicolas accompagne les PME dans leur transformation digitale avec pragmatisme et exigence. Après avoir travaillé pour plusieurs grands comptes helvétiques, il co-fonde Digital Integration pour mettre cette expertise au service des entreprises romandes.",
    tags: ["Développement commercial", "Transformation digitale PME", "Relation client"],
  },
  {
    initials: "SR",
    name: "Sébastien Rouiller",
    title: "Co-fondateur & Directeur technique",
    bio: "Fort de 15 ans d'expérience en architecture de solutions, Sébastien cadre et conçoit des projets complexes avec rigueur. Certifié sur plusieurs technologies cloud et d'intégration, il garantit des livraisons solides, évolutives et adaptées à la réalité des équipes métier.",
    tags: ["Architecture solution", "Intégration API & cloud", "Expert automatisation"],
  },
];

export default function Team() {
  return (
    <section className="section section-alt" id="equipe">
      <div className="container">
        <div className="intro">
          <div className="section-label">L'équipe</div>
          <h2>Des professionnels ancrés dans le tissu économique suisse.</h2>
          <p>
            Deux co-fondateurs, une même conviction : la technologie doit
            simplifier votre quotidien, pas le compliquer.
          </p>
        </div>

        <div className="team-grid">
          {members.map((m) => (
            <div className="card team-card" key={m.name}>
              <div className="team-avatar" aria-hidden="true">
                {m.initials}
              </div>
              <div className="team-info">
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.title}</div>
                <p className="team-bio">{m.bio}</p>
                <div className="team-tags">
                  {m.tags.map((tag) => (
                    <span className="team-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
