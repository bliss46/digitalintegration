import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Automatisation de processus métier en Suisse | Digital Integration",
  description:
    "Automatisez vos tâches répétitives et gagnez du temps. Workflows intelligents, connexion entre outils, génération de documents et IA intégrée pour PME en Suisse romande.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatisation de processus métier",
  description:
    "Réduction des tâches manuelles répétitives grâce à des workflows automatisés, des connexions entre outils et l'intégration de l'IA pour les PME en Suisse.",
  provider: {
    "@type": "LocalBusiness",
    name: "Digital Integration",
    url: "https://www.digitalintegration.ch",
  },
  areaServed: ["Lausanne", "Suisse romande", "Suisse"],
};

export default function AutomatisationPage() {
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
            <div className="section-label">Automatisation de processus</div>
            <h1 className="page-hero-title">
              Automatisation de processus métier — Gagnez du temps sur vos
              tâches répétitives
            </h1>
            <p className="page-hero-sub">
              Chaque heure passée à copier-coller, relancer manuellement ou
              ressaisir des données est une heure perdue. Nous construisons les
              automatisations qui font ce travail à votre place.
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
            <h2>Vos équipes méritent mieux que la ressaisie manuelle</h2>
            <div className="two-cols" style={{ alignItems: "start", marginTop: "24px" }}>
              <div>
                <p style={{ lineHeight: "1.7" }}>
                  Dans la plupart des PME, une part significative du temps de
                  travail est absorbée par des tâches sans vraie valeur ajoutée
                  : relances, transferts de données entre systèmes, génération
                  de documents, validations en chaîne. Ce temps pourrait être
                  consacré à ce qui compte vraiment.
                </p>
                <p style={{ marginTop: "14px", lineHeight: "1.7" }}>
                  Nous analysons vos processus, identifions les points de
                  friction et mettons en place des automatisations robustes qui
                  s'exécutent sans intervention humaine — fiablement, 24h/24.
                </p>
              </div>
              <div>
                <ul className="service-benefit-list">
                  <li>Jusqu'à 80 % de temps gagné sur les tâches répétitives</li>
                  <li>Moins d'erreurs humaines</li>
                  <li>Traçabilité complète des actions automatisées</li>
                  <li>Notifications et alertes intelligentes</li>
                  <li>Déclenchement en temps réel ou sur planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="section section-alt">
          <div className="container">
            <h2>Ce que nous automatisons concrètement</h2>
            <div className="grid-2" style={{ marginTop: "32px" }}>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Génération de documents</h3>
                <p>
                  Rapports PDF, offres commerciales, factures, contrats : créés
                  automatiquement à partir de vos données, envoyés aux bonnes
                  personnes au bon moment.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Workflows de validation</h3>
                <p>
                  Demandes de congés, approbations d'achats, validations de
                  commandes : automatisées avec notifications, relances et
                  traçabilité.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Synchronisation de données</h3>
                <p>
                  Transfert automatique entre vos formulaires, CRM, ERP ou
                  bases de données — sans intervention manuelle, sans erreur.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Notifications intelligentes</h3>
                <p>
                  Alertes par email, SMS ou Slack déclenchées par des
                  événements métier : nouvelle commande, délai dépassé, seuil
                  atteint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section">
          <div className="container">
            <h2>L'IA au service de vos processus</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Au-delà de l'automatisation classique, nous intégrons des modèles
              d'IA pour aller encore plus loin : classification automatique de
              documents, génération de contenus, extraction d'informations,
              assistants internes. Des solutions pragmatiques, pas des gadgets.
            </p>
            <ul className="service-benefit-list" style={{ marginTop: "24px", maxWidth: "600px" }}>
              <li>Résumé et classification automatique de documents</li>
              <li>Assistant IA interne pour vos équipes</li>
              <li>Génération de contenus (emails, rapports, fiches)</li>
              <li>Extraction de données depuis des sources non structurées</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="section section-alt">
          <div className="container">
            <h2>Des gains mesurables dès les premières semaines</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Nos projets d'automatisation sont calibrés pour produire des
              résultats rapides et visibles. Nous commençons par les processus
              à fort impact et livrons des solutions fonctionnelles en 2 à 4
              semaines. Le ROI est mesurable dès le premier mois.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link href="/#contact" className="btn btn-dark">
                Identifier mes automatisations prioritaires
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
