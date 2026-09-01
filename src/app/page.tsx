import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import SplashAnimation from "@/FrontEnd/Animations/SplashAnimation";

import Hero from "@/FrontEnd/Home/Hero";
import About from "@/FrontEnd/Home/About";
import VisionsAndMissions from "@/FrontEnd/Home/Visions And missions";
import PeaceView from "@/FrontEnd/Home/Peace View";
import QuantumView from "@/FrontEnd/Home/Quantum View";
import PillarsQI from "@/FrontEnd/Home/Pillars QI";
import TheQuantumState from "@/FrontEnd/Home/The Quantum State";
import Trust from "@/FrontEnd/Home/Trust";
import CTA from "@/FrontEnd/Home/CTA";

export default function Home() {
  return (
    <>
      <SplashAnimation />
      <Navbar />
      <main>
        <div>
          <Hero />
        </div>
        <About />
        <VisionsAndMissions />
        <PeaceView />
        {/* <QuantumView /> */}
        <PillarsQI />
        <TheQuantumState />
        <Trust />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
