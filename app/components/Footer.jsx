import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image
            src="/logo.png"
            alt="Digital Integration"
            className="logo logo-footer"
            width={110}
            height={30}
          />
        </div>
        <div className="footer-text">
          <p>Digital Integration</p>
          <p>Développement sur mesure - Automatisation - Intégration digitale</p>
        </div>
      </div>
    </footer>
  );
}
