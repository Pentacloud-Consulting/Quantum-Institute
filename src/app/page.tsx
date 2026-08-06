import Hero from "@/FrontEnd/Home/Hero";
import VisionMissionReveal from "@/FrontEnd/Home/Vision & Mission Reveal";
import BrandIdentity from "@/FrontEnd/Home/BRAND & IDENTITY";
import VisionToBrandWrapper from "@/FrontEnd/Home/VisionToBrandWrapper";

export default function Home() {
  return (
    <main>
      <Hero />
      <VisionToBrandWrapper 
        visionComponent={<VisionMissionReveal />}
        brandComponent={<BrandIdentity />}
      />
    </main>
  );
}
