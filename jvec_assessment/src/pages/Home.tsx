import ClientCarousel from "@/components/home/clients_carousel";
import Complaince from "@/components/home/compliance";
import HeroSection from "@/components/home/hero";
import HeroImage from "@/components/home/hero_image";
import OurOfferings from "@/components/home/our_offerings";
import OurProcess from "@/components/home/our_process";
import TheyTrustUs from "@/components/home/they_trust_us";
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
      <Complaince />
      <TheyTrustUs />
      <OurProcess />
    </div>
  );
};

export default Home;
