import Header from "../components/Header";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "FAQ – Digital Integration",
  description:
    "Réponses aux questions fréquentes sur nos services de développement sur mesure, automatisation et intégration digitale.",
};

export default function FAQPage() {
  return (
    <main>
      <Header />
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Questions fréquentes</p>
          <h1 className="page-hero-title">Tout ce que vous voulez savoir</h1>
          <p className="page-hero-sub">
            Vous hésitez à nous contacter ? Consultez d'abord nos réponses aux
            questions les plus courantes sur nos services, notre façon de
            travailler et nos tarifs.
          </p>
        </div>
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
