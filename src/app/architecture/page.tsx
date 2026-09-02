import Architecture from '@/FrontEnd/Architecture/Architecture';
import ArchitectureInfo from '@/FrontEnd/Architecture/Architecture Info';
import Navbar from '@/FrontEnd/Components/Navbar';
import Footer from '@/FrontEnd/Components/Footer';

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main>
        <Architecture />
        <ArchitectureInfo />
      </main>
      <Footer />
    </>
  );
}

