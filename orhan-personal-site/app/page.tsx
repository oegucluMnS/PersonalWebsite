import Hero from "@/components/Hero";
import About from "@/components/About";
import SimulationTechProjects from "@/components/SimulationTechProjects";
import SForceEcosystem from "@/components/SForceEcosystem";
import TalksPodcasts from "@/components/TalksPodcasts";
import TravelOverlandGallery from "@/components/TravelOverlandGallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <SimulationTechProjects />
      <SForceEcosystem />
      <TalksPodcasts />
      <TravelOverlandGallery />
      <Contact />
    </main>
  );
}
