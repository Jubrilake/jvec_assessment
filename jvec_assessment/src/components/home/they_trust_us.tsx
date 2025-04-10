"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ComplianceLogo from "./compliance_logo";
import { clients } from "@/data/clients";

const TheyTrustUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full mx-auto px-4 py-28 bg-gradient-dark">
      <div ref={sectionRef}>
        <ComplianceLogo />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={textVariants}
            className="text-center mt-24 mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">
              They Trust Us
            </h2>
            <p className="text-gray-300">And so can you</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {clients.map((logo, index) => (
              <motion.div
                key={logo.name}
                variants={itemVariants}
                className={`flex justify-center items-center ${
                  index === 8 ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-full w-[90%] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheyTrustUs;
