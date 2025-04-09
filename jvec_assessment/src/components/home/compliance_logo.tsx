"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Array of compliance logos with their names and imported images
  const logos = [
    { name: "PCI DSS", image: certOne, width: 80, height: 80 },
    { name: "ISO 27001", image: certTwo, width: 80, height: 80 },
    { name: "Process Framework", image: certThree, width: 80, height: 80 },
    { name: "GDPR", image: certFour, width: 80, height: 80 },
    { name: "NDPR Audit", image: certFive, width: 80, height: 80 },
    { name: "ISO 22301", image: certSix, width: 80, height: 80 },
    { name: "Compliance Seal", image: certSeven, width: 80, height: 80 },
    { name: "TOGAF", image: certEight, width: 80, height: 80 },
    { name: "TOGAF", image: certEight, width: 80, height: 80 },
    { name: "ISO 20000", image: certNine, width: 80, height: 80 },
    { name: "AICPA SOC", image: certTen, width: 80, height: 80 },
    { name: "AICPA SOC 2", image: certEleven, width: 80, height: 80 },
    { name: "COBIT 2019", image: certTwelve, width: 80, height: 80 },
    { name: "SSAE 18", image: certThirteen, width: 80, height: 80 },
    { name: "PCAOB", image: certFourteen, width: 80, height: 80 },
    { name: "COSO", image: certFifteen, width: 80, height: 80 },
    { name: "SOC 1", image: certSixteen, width: 80, height: 80 },
    { name: "ISEI", image: certNineteen, width: 80, height: 80 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-5xl">
        <motion.div
          className="p-8 bg-white rounded-xl border-2 border-blue-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isLoaded ? 1 : 0,
                  scale: isLoaded ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.5,
                  delay: isLoaded ? index * 0.1 : 0,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <img
                    src={logo.image || "/placeholder.svg"}
                    alt={`${logo.name} certification logo`}
                    className={`object-contain w-[${logo.width}] h-[${logo.height}]`}
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
