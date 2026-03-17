export const metadata = {
  title: "Digital Integration",
  description: "Développement sur mesure, automatisation et IA appliquée",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
