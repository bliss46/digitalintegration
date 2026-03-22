const members = [
  {
    initials: "C",
    title: "Responsable développement & relation client",
    role: "Co-fondateur",
    bio: "20 ans d'expérience dans l'IT en Suisse romande, dont de nombreuses années d'accompagnement de PME dans leur transformation digitale. Une approche business avant tout, pour comprendre vos contraintes avant de parler technologie.",
    tags: ["Développement commercial", "Transformation digitale PME", "Relation client"],
  },
  {
    initials: "T",
    title: "Responsable technique & avant-vente",
    role: "Co-fondateur",
    bio: "15 ans d'expérience en architecture de solutions IT. Spécialiste du cadrage de projets complexes, il traduit vos besoins métier en solutions concrètes, maintenables et évolutives.",
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
            <div className="card team-card" key={m.title}>
              <div className="team-avatar" aria-hidden="true">
                {m.initials}
              </div>
              <div className="team-info">
                <div className="team-name">{m.title}</div>
                <div className="team-role">{m.role}</div>
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
