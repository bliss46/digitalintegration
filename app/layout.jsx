import "./globals.css";

export const metadata = {
  title: "Digital Integration",
  description:
    "Développement sur mesure, automatisation et intégration de solutions digitales pour les entreprises.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
