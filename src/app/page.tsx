import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import SplashAnimation from "@/FrontEnd/Animations/SplashAnimation";

import Hero_View from "@/FrontEnd/Home/Hero_View";
import QuantumTrust from "@/FrontEnd/Home/Quantum Trust";
import PillarsQI from "@/FrontEnd/Home/Pillars QI";
import PeaceView from "@/FrontEnd/Home/Peace View";
import CTA from "@/FrontEnd/Home/CTA";
import ImagesSection from "@/FrontEnd/Home/Images Section";
import Visions_And_missions from "@/FrontEnd/Home/Visions_And_missions";
import ScrollAnimation from "@/FrontEnd/Animations/Scroll Animation";

export default function Home() {
  return (
    <>
      <SplashAnimation />
      <Navbar />
      <ScrollAnimation>
        <main>
          <section className="snap-section w-full">
            <Hero_View />
          </section>
          <section className="w-full">
            <Visions_And_missions />
          </section>
          <section className="w-full">
            <ImagesSection />
          </section>
          <section className="w-full">
            <QuantumTrust />
          </section>
          <section className="w-full">
            <PeaceView />
          </section>
          <section className="w-full">
            <PillarsQI />
          </section>
          <CTA />
        </main>
      </ScrollAnimation>
      <Footer />
    </>
  );
}
