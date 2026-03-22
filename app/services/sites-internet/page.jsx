import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Création de sites internet professionnels en Suisse | Digital Integration",
  description:
    "Création de sites vitrines et landing pages pour entreprises en Suisse romande. Design moderne, SEO optimisé, performances élevées. Basés à Lausanne.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de sites internet professionnels",
  description:
    "Conception et développement de sites vitrines et landing pages modernes, rapides et optimisés pour le référencement, pour les entreprises de Suisse romande.",
  provider: {
    "@type": "LocalBusiness",
    name: "Digital Integration",
    url: "https://www.digitalintegration.ch",
  },
  areaServed: ["Lausanne", "Suisse romande", "Suisse"],
};

export default function SitesInternetPage() {
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
            <div className="section-label">Sites internet</div>
            <h1 className="page-hero-title">
              Création de sites internet professionnels en Suisse
            </h1>
            <p className="page-hero-sub">
              Un site vitrine ou une landing page qui reflète vraiment votre
              entreprise, se charge vite, se trouve sur Google et convertit vos
              visiteurs en clients.
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
            <h2>Un site qui travaille pour vous</h2>
            <div className="two-cols" style={{ alignItems: "start", marginTop: "24px" }}>
              <div>
                <p style={{ lineHeight: "1.7" }}>
                  Votre site internet est souvent le premier contact qu'un
                  prospect a avec votre entreprise. Il doit inspirer confiance,
                  aller droit au but et inciter à vous contacter. Nous
                  concevons des sites clairs, rapides et convaincants — sans
                  fioritures inutiles.
                </p>
                <p style={{ marginTop: "14px", lineHeight: "1.7" }}>
                  Que vous ayez besoin d'un site vitrine pour présenter votre
                  activité ou d'une landing page focalisée sur la conversion,
                  nous livrons un site que vous pouvez utiliser et faire évoluer
                  en toute autonomie.
                </p>
              </div>
              <div>
                <ul className="service-benefit-list">
                  <li>Design professionnel et cohérent avec votre identité</li>
                  <li>Chargement rapide (score Lighthouse &gt; 90)</li>
                  <li>Adapté mobile, tablette et desktop</li>
                  <li>Formulaire de contact fonctionnel et sécurisé</li>
                  <li>Livré avec accès pour vos modifications futures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="section section-alt">
          <div className="container">
            <h2>Performance et référencement SEO</h2>
            <div className="grid-3" style={{ marginTop: "32px" }}>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>SEO technique</h3>
                <p>
                  Balises meta optimisées, structure HTML sémantique,
                  sitemap, données structurées JSON-LD : votre site est
                  prêt pour Google dès la mise en ligne.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Vitesse de chargement</h3>
                <p>
                  Images optimisées, code minimal, hébergement performant :
                  un site rapide améliore votre référencement et l'expérience
                  de vos visiteurs.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>SEO local Suisse</h3>
                <p>
                  Nous optimisons votre visibilité locale en Suisse romande :
                  balisage LocalBusiness, mots-clés locaux, présence Google
                  Business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section">
          <div className="container">
            <h2>Design moderne, expérience utilisateur soignée</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Nous ne livrons pas des templates modifiés. Chaque site est conçu
              sur mesure selon votre identité visuelle, votre secteur et votre
              cible. L'expérience utilisateur est au cœur de chaque décision :
              navigation claire, hiérarchie visuelle, appels à l'action bien
              placés.
            </p>
            <ul className="service-benefit-list" style={{ marginTop: "24px", maxWidth: "600px" }}>
              <li>Design adapté à votre charte graphique</li>
              <li>Navigation intuitive et conversion optimisée</li>
              <li>Accessibilité (WCAG) prise en compte</li>
              <li>Animations légères et professionnelles</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="section section-alt">
          <div className="container">
            <h2>Livré et optimisé, sans dépendance technique</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px", lineHeight: "1.7" }}>
              Nous livrons votre site avec une documentation claire et un accès
              complet à votre code source et à votre hébergement. Pas de
              dépendance à notre agence pour les mises à jour courantes. Et si
              vous avez besoin d'évolutions, nous sommes là.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link href="/#contact" className="btn btn-dark">
                Obtenir un devis pour mon site
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
