import ClientCarousel from "@/components/home/clients_carousel";
import HeroSection from "@/components/home/hero";
import HeroImage from "@/components/home/hero_image";
import TrustedConsulted from "@/components/home/trusted_consultant";
import { Navigation } from "@/components/shared/navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <HeroImage />
      <ClientCarousel />
      <TrustedConsulted />
    </div>
  );
};

export default Home;
