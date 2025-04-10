import ClientCarousel from "@/components/home/clients_carousel";
import Complaince from "@/components/home/compliance";
import GetStarted from "@/components/home/get_started";
import Hero from "@/components/home/hero";
import HeroImage from "@/components/home/hero_image";
import OurOfferings from "@/components/home/our_offerings";
import OurProcess from "@/components/home/our_process";
import Partners from "@/components/home/partners";
import TheyTrustUs from "@/components/home/they_trust_us";
import TrustedConsulted from "@/components/home/trusted_consultant";
import WhatWeRepresent from "@/components/home/what_we_represent";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroImage />
      <ClientCarousel />
      <TrustedConsulted />
      <OurOfferings />
      <WhatWeRepresent />
      <Complaince />
      <TheyTrustUs />
      <OurProcess />
      <Partners />
      <GetStarted />
    </div>
  );
};

export default Home;
