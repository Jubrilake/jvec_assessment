"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import OfferingCards from "./offering_cards";
import { offerings } from "@/data/offerings";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OurOfferings = () => {
  const [hoveredOffering, setHoveredOffering] = useState<string | null>(null);

  return (
    <section className="w-full mx-auto px-4 py-28 bg-gradient-deep-blue">
      <div className="text-center mb-16">
        <motion.h2
          className="md:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-white mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Our Offerings
        </motion.h2>

        <motion.p
          className="text-white/90 max-w-2xl mx-auto mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Leverage KeySystem's cutting-edge expertise to transform your
          business. Our tailored software and cybersecurity solutions drive
          efficiency, security, and growth. We empower businesses to thrive in
          the digital age
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full bg-gradient-blue p-6 border-primary shadow-sm shadow-primary text-white hover:bg-blue-600/30"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {offerings.map((offering, index) => (
          <motion.div key={offering.id} variants={fadeUp} custom={index}>
            <OfferingCards
              index={index}
              title={offering.title}
              gradient={offering.gradient}
              isHovered={hoveredOffering === offering.id}
              onHover={() => setHoveredOffering(offering.id)}
              onLeave={() => setHoveredOffering(null)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurOfferings;
