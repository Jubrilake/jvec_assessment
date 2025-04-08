import ClientCarousel from "@/components/home/clients_carousel";
import HeroSection from "@/components/home/hero";
import HeroImage from "@/components/home/hero_image";
import { Navigation } from "@/components/shared/navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <HeroImage />
      <ClientCarousel />
    </div>
  );
};

export default Home;
