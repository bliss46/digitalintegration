import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Politique de confidentialité – Digital Integration",
  description:
    "Politique de confidentialité et traitement des données personnelles de Digital Integration.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <Header />
      <section className="section legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Politique de confidentialité</h1>
            <p className="legal-updated">Dernière mise à jour : mars 2025</p>

            <h2>1. Responsable du traitement</h2>
            <p>
              <strong>Digital Integration</strong><br />
              Lausanne, Suisse<br />
              Email : <a href="mailto:contact@digitalintegration.ch">contact@digitalintegration.ch</a>
            </p>

            <h2>2. Données collectées</h2>
            <p>
              Nous collectons uniquement les données que vous nous transmettez volontairement via le
              formulaire de contact présent sur notre site :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Contenu de votre message</li>
            </ul>
            <p>
              Nous ne collectons pas de données sensibles et n'utilisons pas de cookies de tracking
              ou de profilage publicitaire.
            </p>

            <h2>3. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Vous informer sur nos services si vous en avez fait la demande</li>
            </ul>

            <h2>4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre consentement explicite lors de l'envoi du
              formulaire de contact, conformément à la Loi fédérale suisse sur la protection des
              données (LPD).
            </p>

            <h2>5. Conservation des données</h2>
            <p>
              Vos données sont conservées uniquement le temps nécessaire au traitement de votre
              demande, et au maximum pendant 12 mois, sauf obligation légale contraire.
            </p>

            <h2>6. Partage des données</h2>
            <p>
              Vos données personnelles ne sont ni vendues, ni louées, ni transmises à des tiers, sauf
              dans les cas suivants :
            </p>
            <ul>
              <li>Prestataires techniques nécessaires au fonctionnement du site (hébergement, envoi d'e-mails)</li>
              <li>Obligation légale ou réquisition d'une autorité compétente</li>
            </ul>

            <h2>7. Vos droits</h2>
            <p>
              Conformément à la LPD, vous disposez des droits suivants concernant vos données
              personnelles :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@digitalintegration.ch">contact@digitalintegration.ch</a>
            </p>

            <h2>8. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, perte ou divulgation.
            </p>

            <h2>9. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique à tout moment. La version en
              vigueur est celle publiée sur cette page.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité :{" "}
              <a href="mailto:contact@digitalintegration.ch">contact@digitalintegration.ch</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
