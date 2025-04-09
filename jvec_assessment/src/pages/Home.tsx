import ClientCarousel from "@/components/home/clients_carousel";
import HeroSection from "@/components/home/hero";
import HeroImage from "@/components/home/hero_image";
import OurOfferings from "@/components/home/our_offerings";
import TrustedConsulted from "@/components/home/trusted_consultant";
import WhatWeRepresent from "@/components/home/what_we_represent";
import { Navigation } from "@/components/shared/navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <HeroImage />
      <ClientCarousel />
      <TrustedConsulted />
      <OurOfferings />
      <WhatWeRepresent />
    </div>
  );
};

export default Home;
