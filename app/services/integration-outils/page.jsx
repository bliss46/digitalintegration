import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Intégration d'outils digitaux ERP CRM en Suisse | Digital Integration",
  description:
    "Connectez vos outils digitaux entre eux — ERP, CRM, formulaires, bases de données. Éliminez les doubles saisies et synchronisez vos systèmes. PME en Suisse romande.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Intégration d'outils digitaux",
  description:
    "Connexion entre systèmes existants, APIs, ERP, CRM et outils métier pour éliminer les doubles saisies et synchroniser les données des PME suisses.",
  provider: {
    "@type": "LocalBusiness",
    name: "Digital Integration",
    url: "https://www.digitalintegration.ch",
  },
  areaServed: ["Lausanne", "Suisse romande", "Suisse"],
};

export default function IntegrationOutilsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        {/* Hero de page */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Intégration d'outils</div>
            <h1 className="page-hero-title">
              Intégration de vos outils digitaux — ERP, CRM et systèmes métier
            </h1>
            <p className="page-hero-sub">
              Vos outils ne se parlent pas entre eux ? Chaque outil fonctionne
              en silos, les données sont dupliquées, vos équipes perdent du
              temps à ressaisir. Nous connectons tout ça.
            </p>
            <div style={{ marginTop: "32px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn btn-dark">
                Parler de votre projet
              </Link>
              <Link href="/#services" className="btn btn-light">
                Voir tous nos services
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="section">
          <div className="container">
            <h2>Vos outils ne se parlent pas encore ?</h2>
            <div className="two-cols" style={{ alignItems: "start", marginTop: "24px" }}>
              <div>
                <p style={{ lineHeight: "1.7" }}>
                  La plupart des PME utilisent 5 à 15 outils différents :
                  CRM, ERP, logiciel de facturation, outils de gestion de
                  projet, formulaires en ligne, bases de données internes...
                  Le problème ? Ces outils ne communiquent pas entre eux. Ce
                  qui génère des doubles saisies, des incohérences et une perte
                  de temps considérable.
                </p>
                <p style={{ marginTop: "14px", lineHeight: "1.7" }}>
                  Nous créons des ponts fiables entre vos systèmes existants —
                  sans tout refaire, sans migration risquée. Vos données
                  circulent automatiquement là où elles sont nécessaires.
                </p>
              </div>
              <div>
                <ul className="service-benefit-list">
                  <li>Élimination des doubles saisies</li>
                  <li>Données cohérentes dans tous vos outils</li>
                  <li>Moins d'erreurs et d'oublis</li>
                  <li>Gain de temps immédiat pour vos équipes</li>
                  <li>Visibilité unifiée sur votre activité</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="section section-alt">
          <div className="container">
            <h2>Ce que nous connectons</h2>
            <div className="grid-3" style={{ marginTop: "32px" }}>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>ERP & CRM</h3>
                <p>
                  SAP, Odoo, Salesforce, HubSpot, Dynamics... Nous créons des
                  flux de données bidirectionnels entre vos systèmes cœurs
                  de métier.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Formulaires & bases de données</h3>
                <p>
                  Typeform, Google Forms, formulaires personnalisés, Airtable,
                  Notion : chaque soumission peut déclencher des actions dans
                  vos autres outils.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Outils métier sur mesure</h3>
                <p>
                  Logiciels internes, APIs propriétaires, fichiers Excel ou
                  CSV : nous construisons les connecteurs adaptés à votre
                  réalité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section">
          <div className="container">
            <h2>Une synchronisation fiable et maintenable</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Nous ne faisons pas que connecter des APIs — nous concevons des
              intégrations robustes avec gestion des erreurs, journalisation des
              flux et monitoring. Vous savez à tout moment ce qui se passe
              entre vos systèmes.
            </p>
            <ul className="service-benefit-list" style={{ marginTop: "24px", maxWidth: "600px" }}>
              <li>Gestion des erreurs et alertes en cas de problème</li>
              <li>Logs complets des transferts de données</li>
              <li>Synchronisation en temps réel ou planifiée</li>
              <li>Documentation technique livrée avec le projet</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="section section-alt">
          <div className="container">
            <h2>Nous travaillons avec votre stack existante</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Pas besoin de tout changer pour que vos outils fonctionnent
              ensemble. Nous partons de ce que vous avez déjà et construisons
              les connexions manquantes. Une approche pragmatique, adaptée aux
              contraintes réelles des PME romandes.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link href="/#contact" className="btn btn-dark">
                Cartographier mes intégrations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
