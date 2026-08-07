import Navbar from "@/FrontEnd/Components/Navbar";
import Hero from "@/FrontEnd/Home/Hero";
import VisionMissionReveal from "@/FrontEnd/Home/Vision & Mission Reveal";
import BrandToPillarsWrapper from "@/FrontEnd/Home/BrandToPillarsWrapper";
import QuantumMovement from "@/FrontEnd/Home/QUANTUM MOVEMENT";
import Trust from "@/FrontEnd/Home/Trust";
import CTA from "@/FrontEnd/Home/CTA";
import Footer from "@/FrontEnd/Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Hero />
        </div>
      <VisionMissionReveal />
      <BrandToPillarsWrapper />
      <QuantumMovement />
      <Trust />
      <CTA />
      <Footer />
    </main>
    </>
  );
}
