import NavbarMenu from "@/FrontEnd/Components/Navbar Menu";
import Hero from "@/FrontEnd/Healing/Hero";
import Sections from "@/FrontEnd/Healing/Sections";
import Footer from "@/FrontEnd/Components/Footer";

export default function HealingPage() {
  return (
    <>
      <NavbarMenu />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </>
  );
}
