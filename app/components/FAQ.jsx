"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quel type de projets réalisez-vous ?",
    answer:
      "Nous développons des applications web sur mesure, des outils d'automatisation, des portails clients, des tableaux de bord métier et des solutions d'intégration entre vos logiciels existants. Chaque projet est adapté aux besoins spécifiques de votre entreprise.",
  },
  {
    question: "Travaillez-vous avec des entreprises de toute taille ?",
    answer:
      "Oui. Nous accompagnons aussi bien les PME que les plus grandes structures. Notre approche est flexible : nous nous adaptons à votre organisation, vos contraintes et votre budget.",
  },
  {
    question: "Comment se déroule un projet type ?",
    answer:
      "Nous suivons 4 étapes : (1) Compréhension de votre besoin lors d'un appel gratuit, (2) Cadrage de la solution et devis, (3) Développement par itérations avec vos retours, (4) Mise en ligne et support. Vous êtes impliqué à chaque étape.",
  },
  {
    question: "Combien de temps dure un projet ?",
    answer:
      "La durée dépend de la complexité. Un premier outil simple peut être livré en 2 à 4 semaines. Une application complète demande généralement 1 à 3 mois. Nous définissons ensemble un calendrier réaliste avant de démarrer.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos tarifs varient selon la nature et l'envergure du projet. Nous proposons des devis fixes sur la base d'un cahier des charges précis, afin que vous sachiez exactement ce que vous payez. Contactez-nous pour une estimation gratuite.",
  },
  {
    question: "Que se passe-t-il après la livraison du projet ?",
    answer:
      "Nous assurons un suivi post-livraison et proposons des contrats de maintenance. Vous n'êtes pas seul : nous restons disponibles pour les évolutions, corrections et améliorations futures.",
  },
  {
    question: "Avec quelles technologies travaillez-vous ?",
    answer:
      "Nous utilisons des technologies modernes et éprouvées : Next.js, React, Node.js, Python, ainsi que des plateformes d'automatisation comme Make (Integromat) ou n8n. Le choix technologique est toujours guidé par ce qui est le plus adapté à votre besoin.",
  },
  {
    question: "Êtes-vous basés en Suisse ?",
    answer:
      "Oui, nous sommes basés à Lausanne, en Suisse. Nous travaillons principalement avec des entreprises romandes et suisses, mais intervenons aussi pour des clients en France et à l'international.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className="intro">
          <p className="section-label">Questions fréquentes</p>
          <h2>Tout ce que vous voulez savoir</h2>
          <p>
            Vous avez des questions sur notre façon de travailler ? Voici les
            réponses aux interrogations les plus courantes.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " faq-item--open" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Vous ne trouvez pas la réponse à votre question ?</p>
          <a href="/#contact" className="btn btn-dark">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
