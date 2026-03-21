export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-col">
            <img
              src="/logo.png"
              alt="Digital Integration"
              style={{ height: '34px', width: 'auto', display: 'block' }}
            />
            <p className="footer-tagline">
              Développement sur mesure · Automatisation · Intégration digitale
            </p>
            <p className="footer-address">
              📍 Lausanne, Suisse
            </p>
            <a href="mailto:info@digitalintegration.ch" className="footer-email">
              info@digitalintegration.ch
            </a>
          </div>

          <div className="footer-links-col">
            <p className="footer-links-title">Navigation</p>
            <nav className="footer-links">
              <a href="/">Accueil</a>
              <a href="/#services">Services</a>
              <a href="/#cas-usage">Cas d'usage</a>
              <a href="/faq">FAQ</a>
              <a href="/#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-links-col">
            <p className="footer-links-title">Informations légales</p>
            <nav className="footer-links">
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/politique-de-confidentialite">Politique de confidentialité</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Digital Integration. Tous droits réservés.</p>
          <p>Lausanne, Suisse · digitalintegration.ch</p>
        </div>
      </div>
    </footer>
  );
}
