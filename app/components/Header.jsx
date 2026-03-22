import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a href="/" className="brand" aria-label="Retour à l'accueil">
          <Image
            src="/logo.png"
            alt="Digital Integration"
            className="logo"
            width={120}
            height={34}
            priority
          />
        </a>

        <nav className="topbar-nav">
          <div className="nav-dropdown">
            <span className="nav-dropdown-trigger">
              Services
              <svg
                className="nav-dropdown-arrow"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="nav-dropdown-menu" role="menu">
              <Link
                href="/services/applications-web-sur-mesure"
                className="nav-dropdown-item"
                role="menuitem"
              >
                <span className="nav-dropdown-icon">⬡</span>
                Applications web sur mesure
              </Link>
              <Link
                href="/services/automatisation-processus"
                className="nav-dropdown-item"
                role="menuitem"
              >
                <span className="nav-dropdown-icon">⬡</span>
                Automatisation de processus
              </Link>
              <Link
                href="/services/integration-outils"
                className="nav-dropdown-item"
                role="menuitem"
              >
                <span className="nav-dropdown-icon">⬡</span>
                Intégration d&apos;outils
              </Link>
              <Link
                href="/services/sites-internet"
                className="nav-dropdown-item"
                role="menuitem"
              >
                <span className="nav-dropdown-icon">⬡</span>
                Sites internet
              </Link>
            </div>
          </div>
          <a href="/#cas-usage">Cas d&apos;usage</a>
          <a href="/faq">FAQ</a>
          <a href="/#contact">Contact</a>
        </nav>

        <a href="/#contact" className="btn btn-outline">
          Parler de votre projet
        </a>
      </div>
    </header>
  );
}
