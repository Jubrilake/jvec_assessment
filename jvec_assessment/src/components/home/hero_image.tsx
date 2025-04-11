import { curveStroke, heroImage } from "@/assets";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="relative z-5 md:block bg-gradient-darker-blue hidden ">
    <div className="transform -translate-y-12 ">
      <img src={curveStroke} alt="stroke" className="w-full" />

<motion.img
  src={heroImage}
  alt="Hero"
  className="absolute w-[60%] -top-12 left-[20%]"
  initial={{ y: 80 }}
  whileInView={{ y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true }}
/>
      </div>
     
    </div>
  );
};

export default HeroImage;
