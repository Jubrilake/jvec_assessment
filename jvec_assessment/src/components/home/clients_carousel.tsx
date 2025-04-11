"use client";

import { useRef, useEffect, useState } from "react";
import { logos } from "@/data/logos";

interface InfiniteLogoCarouselProps {
  speed?: number;
  pauseOnHover?: boolean;
}

export default function ClientCarousel({
  speed = 30,
  pauseOnHover = false,
}: InfiniteLogoCarouselProps) {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...logos, ...logos, ...logos];

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
    <section className="w-full bg-gradient-dark py-6 px-4 overflow-hidden">
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          ref={scrollerRef}
          className="flex transition-transform will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] md:w-[220px] px-2"
            >
              <div className="h-24 md:h-28 flex items-center justify-center bg-transparent rounded-md p-2">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
