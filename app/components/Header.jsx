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

        <a href="#contact" className="btn btn-outline">
          Parler de votre projet
        </a>
      </div>
    </header>
  );
}
