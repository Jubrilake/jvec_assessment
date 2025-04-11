"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  certFive,
  certEight,
  certFour,
  certFifteen,
  certFourteen,
  certSixteen,
  certSeven,
  certSix,
  certOne,
  certEleven,
  certNine,
  certTen,
  certThirteen,
  certThree,
  certTwelve,
  certTwo,
  certNineteen,
} from "@/assets";

const ComplianceLogo = () => {
  // Create a ref for the section container
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
  });

  const logos = [
    { name: "PCI DSS", image: certOne, width: 100, height: 100 },
    { name: "ISO 27001", image: certTwo, width: 100, height: 100 },
    { name: "Process Framework", image: certThree, width: 100, height: 100 },
    { name: "GDPR", image: certFour, width: 100, height: 100 },
    { name: "NDPR Audit", image: certFive, width: 100, height: 100 },
    { name: "ISO 22301", image: certSix, width: 100, height: 100 },
    { name: "Compliance Seal", image: certSeven, width: 100, height: 100 },
    { name: "TOGAF", image: certEight, width: 100, height: 100 },
    { name: "ISO 20000", image: certNine, width: 100, height: 100 },
    { name: "AICPA SOC", image: certTen, width: 100, height: 100 },
    { name: "AICPA SOC 2", image: certEleven, width: 100, height: 100 },
    { name: "COBIT 2019", image: certTwelve, width: 100, height: 100 },
    { name: "SSAE 18", image: certThirteen, width: 100, height: 100 },
    { name: "SSAE 18", image: certThirteen, width: 100, height: 100 },
    { name: "PCAOB", image: certFourteen, width: 100, height: 100 },
    { name: "COSO", image: certFifteen, width: 100, height: 100 },
    { name: "SOC 1", image: certSixteen, width: 100, height: 100 },
    { name: "SOC 1", image: certNineteen, width: 100, height: 100 },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Logo item animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex  flex-col items-center justify-center min-h-screen p-6 ">
      <div className="w-full max-w-5xl" ref={sectionRef}>
        <motion.div
          className="p-8 bg-white rounded-xl border-2 border-blue-200 shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3"
                variants={logoVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <img
                    src={logo.image}
                    alt={`${logo.name} `}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplianceLogo;
