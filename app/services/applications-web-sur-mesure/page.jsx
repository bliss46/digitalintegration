import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Applications web sur mesure pour PME en Suisse | Digital Integration",
  description:
    "Développement d'applications web sur mesure pour PME en Suisse romande. Portails clients, outils internes, dashboards et formulaires intelligents conçus à Lausanne.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement d'applications web sur mesure",
  description:
    "Conception et développement d'applications web métier adaptées aux besoins spécifiques des PME suisses : portails clients, outils internes, dashboards et formulaires intelligents.",
  provider: {
    "@type": "LocalBusiness",
    name: "Digital Integration",
    url: "https://www.digitalintegration.ch",
  },
  areaServed: ["Lausanne", "Suisse romande", "Suisse"],
};

export default function ApplicationsWebPage() {
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
            <div className="section-label">Applications web sur mesure</div>
            <h1 className="page-hero-title">
              Applications web sur mesure pour PME en Suisse
            </h1>
            <p className="page-hero-sub">
              Nous concevons des outils web qui correspondent exactement à votre
              façon de travailler — pas l'inverse. Lausanne et toute la Suisse
              romande.
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
            <div className="two-cols" style={{ alignItems: "start" }}>
              <div>
                <h2>Des outils qui correspondent à votre réalité métier</h2>
                <p style={{ marginTop: "16px", lineHeight: "1.7" }}>
                  Les logiciels génériques sont conçus pour tout le monde — ce
                  qui signifie qu'ils ne conviennent parfaitement à personne.
                  Votre façon de travailler, vos processus, votre terminologie
                  : tout cela est unique. Une application web sur mesure
                  s'adapte à votre entreprise, et non le contraire.
                </p>
                <p style={{ marginTop: "14px", lineHeight: "1.7" }}>
                  Nous développons des portails clients, des espaces
                  collaborateurs, des outils de suivi internes, des formulaires
                  intelligents et des dashboards métier. Chaque projet part
                  d'un besoin concret identifié avec vous.
                </p>
              </div>
              <div>
                <ul className="service-benefit-list">
                  <li>Interface pensée pour vos utilisateurs réels</li>
                  <li>Intégration dans vos flux de travail existants</li>
                  <li>Accès web ou mobile selon les besoins</li>
                  <li>Pas de licence mensuelle sur un logiciel générique</li>
                  <li>Évolutions possibles à tout moment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="section section-alt">
          <div className="container">
            <h2>Pourquoi une application sur mesure plutôt qu'un logiciel générique ?</h2>
            <div className="grid-3" style={{ marginTop: "32px" }}>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Vous gagnez en efficacité</h3>
                <p>
                  Fini les contournements, les exports CSV et les
                  copier-coller. Votre outil fait exactement ce dont vous avez
                  besoin.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Vous gardez le contrôle</h3>
                <p>
                  Pas de dépendance à un éditeur tiers. Votre application vous
                  appartient, les données aussi.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Vous investissez une seule fois</h3>
                <p>
                  Un développement sur mesure, c'est un actif durable — sans
                  abonnement croissant ni fonctionnalités inutiles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section">
          <div className="container">
            <h2>Notre stack technique, pensée pour la durée</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Nous utilisons des technologies modernes et éprouvées — Next.js,
              React, Node.js — qui garantissent des performances élevées, une
              bonne maintenabilité et une évolutivité réelle. Le choix
              technologique est toujours guidé par ce qui est le plus adapté à
              votre besoin, pas par la mode.
            </p>
            <ul className="service-benefit-list" style={{ marginTop: "24px", maxWidth: "600px" }}>
              <li>Applications rapides et optimisées SEO (Next.js)</li>
              <li>Code propre, documenté et maintenable</li>
              <li>Hébergement cloud fiable (Vercel, Infomaniak, etc.)</li>
              <li>Sécurité et conformité RGPD / LPD suisse</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="section section-alt">
          <div className="container">
            <h2>De l'idée à la mise en ligne, en toute transparence</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Nous travaillons en quatre étapes claires : cadrage du besoin,
              devis fixe, développement par itérations avec vos retours, puis
              mise en ligne et support. Vous savez à chaque moment où en est
              votre projet — et ce qu'il vous en coûte.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link href="/#contact" className="btn btn-dark">
                Démarrer avec un échange gratuit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
