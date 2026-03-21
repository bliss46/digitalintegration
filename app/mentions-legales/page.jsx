import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mentions légales – Digital Integration",
  description: "Mentions légales de Digital Integration, société basée à Lausanne, Suisse.",
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <Header />
      <section className="section legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Mentions légales</h1>

            <h2>Éditeur du site</h2>
            <p>
              <strong>Digital Integration</strong><br />
              Lausanne, Suisse<br />
              Email : <a href="mailto:info@digitalintegration.ch">info@digitalintegration.ch</a><br />
              Site web : <a href="https://www.digitalintegration.ch">www.digitalintegration.ch</a>
            </p>

            <h2>Responsable de la publication</h2>
            <p>
              Le responsable de la publication est le représentant légal de Digital Integration.
            </p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par des prestataires tiers. Pour toute question relative à
              l'hébergement, veuillez nous contacter à l'adresse indiquée ci-dessus.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu présent sur ce site (textes, images, logos, éléments graphiques)
              est la propriété exclusive de Digital Integration ou de ses partenaires, et est protégé
              par les lois suisses et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation, totale ou partielle,
              du contenu de ce site est interdite sans l'autorisation préalable écrite de Digital Integration.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              Digital Integration s'efforce d'assurer l'exactitude et la mise à jour des informations
              diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou
              l'exhaustivité des informations mises à disposition.
            </p>
            <p>
              Digital Integration décline toute responsabilité pour tout dommage résultant d'une
              intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises
              à disposition sur ce site.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Le présent site et ses mentions légales sont soumis au droit suisse. Tout litige sera
              soumis à la juridiction compétente du canton de Vaud, Suisse.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter
              à l'adresse suivante :{" "}
              <a href="mailto:info@digitalintegration.ch">info@digitalintegration.ch</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
