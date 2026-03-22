import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import UseCases from "./components/UseCases";
import Methodology from "./components/Methodology";
import Benefits from "./components/Benefits";
import Team from "./components/Team";
import ConsultationCTA from "./components/ConsultationCTA";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPoints />
      <Services />
      <UseCases />
      <Methodology />
      <Benefits />
      <Team />
      <ConsultationCTA />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
