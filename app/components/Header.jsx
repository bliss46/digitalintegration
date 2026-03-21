import Image from "next/image";

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
          <a href="/#services">Services</a>
          <a href="/#cas-usage">Cas d'usage</a>
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
