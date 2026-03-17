export default function DigitalIntegrationHomepage() {
  const services = [
    {
      title: 'Applications web sur mesure',
      description:
        'Des outils métiers pensés pour vos équipes, vos processus et vos contraintes réelles.',
    },
    {
      title: 'Automatisation & IA',
      description:
        'Réduction des tâches répétitives, génération de contenus, workflows intelligents et assistants internes.',
    },
    {
      title: 'Intégration de vos outils',
      description:
        'Connexion entre ERP, CRM, formulaires, bases de données, emails et systèmes internes.',
    },
  ];

  const useCases = [
    'Portail client ou espace collaborateur',
    'Saisie terrain avec génération automatique de PDF',
    'Centralisation des données entre plusieurs outils',
    'Automatisation de demandes internes et validations',
    'Tableaux de bord métiers sur mesure',
    'Assistant IA interne pour retrouver l’information utile',
  ];

  const process = [
    {
      step: '01',
      title: 'Cadrage rapide',
      text: 'On clarifie votre besoin, vos irritants et la valeur attendue.',
    },
    {
      step: '02',
      title: 'Prototype concret',
      text: 'On formalise une approche simple, visible et chiffrée.',
    },
    {
      step: '03',
      title: 'Développement',
      text: 'On construit une solution sur mesure, propre et évolutive.',
    },
    {
      step: '04',
      title: 'Mise en ligne',
      text: 'On déploie, on ajuste et on accompagne la prise en main.',
    },
  ];

  const benefits = [
    'Moins de ressaisie',
    'Moins d’erreurs manuelles',
    'Des processus plus fluides',
    'Une meilleure visibilité sur l’activité',
    'Des outils adaptés à votre façon de travailler',
    'Un vrai gain de temps pour vos équipes',
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">digitalintegration.ch</div>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-slate-900"
            >
              Parler de votre projet
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              Développement sur mesure • Automatisation • IA appliquée
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Des solutions digitales sur mesure pour faire avancer votre entreprise.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Nous concevons des applications web, des automatisations et des intégrations qui simplifient vos processus,
              réduisent les tâches manuelles et créent de la vraie valeur.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Demander un échange
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-center text-sm font-medium transition hover:border-slate-900"
              >
                Voir les solutions
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-semibold">Sur mesure</div>
                <p className="mt-1 text-sm text-slate-600">Pensé selon vos besoins métier, pas selon un logiciel générique.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-semibold">Pragmatique</div>
                <p className="mt-1 text-sm text-slate-600">Objectif simple: gagner du temps et améliorer l’efficacité.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-semibold">Évolutif</div>
                <p className="mt-1 text-sm text-slate-600">Une base propre qui peut grandir avec vos futurs projets.</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Exemple de mission</p>
                  <h2 className="mt-1 text-xl font-semibold">Automatiser un processus métier</h2>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Cas concret</div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-900">Avant</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Emails, fichiers Excel, ressaisie manuelle, documents dispersés et manque de visibilité.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <p className="text-sm font-medium">Après</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    Une interface simple, un workflow automatisé, des données centralisées et des actions plus rapides.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="text-sm font-medium">Applications web</div>
                    <div className="mt-1 text-sm text-slate-600">Portails, formulaires, dashboards, outils internes</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="text-sm font-medium">Automatisation</div>
                    <div className="mt-1 text-sm text-slate-600">Connexions entre outils, notifications, documents, IA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Le constat</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Vos outils actuels ne suivent plus vraiment votre façon de travailler.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Tâches manuelles répétitives',
              'Outils qui ne communiquent pas entre eux',
              'Fichiers dispersés et manque de visibilité',
              'Processus internes lourds ou fragiles',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 p-5">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Nos solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ce que nous pouvons concevoir pour vous.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque projet part de vos contraintes réelles. L’objectif n’est pas de rajouter un outil de plus, mais de créer un système utile.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Cas d’usage</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Des projets concrets, ancrés dans le quotidien de l’entreprise.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              L’idée n’est pas de vendre de la techno pour la techno. Le but, c’est de résoudre un vrai problème.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="rounded-2xl border border-slate-200 p-5">
                <p className="font-medium leading-7">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Méthode</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Une approche simple, rapide et orientée résultat.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-slate-400">{item.step}</div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pourquoi Digital Integration</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Une logique business avant la logique technique.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nous cherchons d’abord ce qui fera gagner du temps, fluidifiera vos opérations et améliorera votre pilotage.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl bg-slate-50 p-5">
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-slate-950 px-8 py-12 text-white sm:px-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Vous avez une idée, un irritant métier ou un projet à lancer ?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Échangeons autour de votre besoin. On regarde ensemble ce qui peut être simplifié, automatisé ou développé sur mesure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:contact@digitalintegration.ch"
                className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-medium text-slate-950"
              >
                contact@digitalintegration.ch
              </a>
              <a
                href="tel:+41000000000"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-medium text-white"
              >
                Planifier un échange
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
