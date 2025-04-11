"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";

export default function Partners() {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Triple the partners array to create the infinite effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  // Animation speed (pixels per second)
  const speed = 30;

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    let animationId: number;
    let startTime: number | null = null;
    let previousTimestamp: number | null = null;
    let scrollPosition = 0;

    const scrollWidth = scrollerRef.current.scrollWidth;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!previousTimestamp) previousTimestamp = timestamp;

      const elapsed = timestamp - (previousTimestamp || 0);
      previousTimestamp = timestamp;

      if (!isPaused) {
        const scrollAmount = (elapsed * speed) / 1000;
        scrollPosition += scrollAmount;

        if (scrollPosition >= scrollWidth / 3) {
          scrollPosition = 0;
        }

        if (scrollerRef.current) {
          scrollerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, speed]);

  return (
    <section className="w-full py-28 bg-gradient-black text-white">
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-5xl text-3xl font-bold mb-4"
          >
            Our Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:text-lg text-sm text-gray-300"
          >
            Creating a Synergy with global brands
          </motion.p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative  overflow-hidden bg-gradient-deep-blue"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollerRef}
            className="flex transition-transform will-change-transform"
            style={{ backfaceVisibility: "hidden" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-[200px] md:w-[220px] px-2"
              >
                <div className="h-24 md:h-28 flex items-center justify-center bg-transparent rounded-md p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
