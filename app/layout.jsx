import "./globals.css";

export const metadata = {
  title: "Digital Integration — Applications web sur mesure, automatisation et intégration en Suisse",
  description:
    "Développement d'applications web sur mesure, automatisation de processus et intégration d'outils digitaux pour PME en Suisse romande. Basés à Lausanne.",
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Digital Integration",
  url: "https://www.digitalintegration.ch",
  email: "info@digitalintegration.ch",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lausanne",
    addressCountry: "CH",
  },
  areaServed: ["Lausanne", "Suisse romande", "Suisse"],
  description:
    "Développement d'applications web sur mesure, automatisation de processus et intégration d'outils digitaux pour PME en Suisse.",
  knowsLanguage: ["fr"],
  priceRange: "CHF 2500–20000",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel type de projets réalisez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous développons des applications web sur mesure, des outils d'automatisation, des portails clients, des tableaux de bord métier et des solutions d'intégration entre vos logiciels existants. Chaque projet est adapté aux besoins spécifiques de votre entreprise.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des entreprises de toute taille ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous accompagnons aussi bien les PME que les plus grandes structures. Notre approche est flexible : nous nous adaptons à votre organisation, vos contraintes et votre budget.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule un projet type ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous suivons 4 étapes : (1) Compréhension de votre besoin lors d'un appel gratuit, (2) Cadrage de la solution et devis, (3) Développement par itérations avec vos retours, (4) Mise en ligne et support. Vous êtes impliqué à chaque étape.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure un projet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La durée dépend de la complexité. Un premier outil simple peut être livré en 2 à 4 semaines. Une application complète demande généralement 1 à 3 mois. Nous définissons ensemble un calendrier réaliste avant de démarrer.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont vos tarifs ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos tarifs varient selon la nature et l'envergure du projet. Nous proposons des devis fixes sur la base d'un cahier des charges précis, afin que vous sachiez exactement ce que vous payez. Contactez-nous pour une estimation gratuite.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il après la livraison du projet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous assurons un suivi post-livraison et proposons des contrats de maintenance. Vous n'êtes pas seul : nous restons disponibles pour les évolutions, corrections et améliorations futures.",
      },
    },
    {
      "@type": "Question",
      name: "Avec quelles technologies travaillez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous utilisons des technologies modernes et éprouvées : Next.js, React, Node.js, Python, ainsi que des plateformes d'automatisation comme Make (Integromat) ou n8n. Le choix technologique est toujours guidé par ce qui est le plus adapté à votre besoin.",
      },
    },
    {
      "@type": "Question",
      name: "Êtes-vous basés en Suisse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous sommes basés à Lausanne, en Suisse. Nous travaillons principalement avec des entreprises romandes et suisses, mais intervenons aussi pour des clients en France et à l'international.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
