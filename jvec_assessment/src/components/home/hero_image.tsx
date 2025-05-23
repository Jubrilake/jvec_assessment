import { curveStroke, heroImage } from "@/assets";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <section className="relative z-6 md:block bg-gradient-darker-blue hidden ">
      <div className="transform -translate-y-14 ">
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
    </section>
  );
};

export default HeroImage;
