import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import SplashAnimation from "@/FrontEnd/Animations/SplashAnimation";

import Hero from "@/FrontEnd/Home Page/Hero";
import QuantumInstitute from "@/FrontEnd/Home Page/Quantum Institute";
import TheMission from "@/FrontEnd/Home Page/The Mission";
import WhyArabRegion from "@/FrontEnd/Home Page/Why the arab Region";
import BalanceWithNature from "@/FrontEnd/Home Page/Balance With Nature";
import ScrollAnimation from "@/FrontEnd/Animations/Scroll Animation";

export default function Home() {
  return (
    <>
      <SplashAnimation />
      <Navbar />
      <ScrollAnimation>
        <main>
          <section className="snap-section w-full">
            <Hero />
          </section>
          <section className="snap-section w-full">
            <QuantumInstitute />
          </section>
          <section className="snap-section w-full">
            <TheMission />
          </section>
          <section className="snap-section w-full">
            <WhyArabRegion />
          </section>
          <section className="snap-section w-full">
            <BalanceWithNature />
          </section>
        </main>
      </ScrollAnimation>
      <Footer />
    </>
  );
}
