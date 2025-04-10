"use client";

import { MousePointer } from "lucide-react";

interface OfferingCardProps {
  title: string;
  gradient: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}

const OfferingCards = ({
  title,
  index,
  gradient,
  isHovered,
  onHover,
  onLeave,
}: OfferingCardProps) => {
  return (
    <div
      className={`w-auto ${index === 1 && "lg:translate-y-16 gap-0"} ${
        index === 4 && "lg:translate-y-16 gap-0"
      } ${index === 7 && "lg:translate-y-16 gap-0"}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`
          relative cursor-pointer h-full rounded-full overflow-hidden
          text-white text-center max-w-[230px] flex justify-center items-center
          transition-all duration-300 ease-in-out
          ${isHovered ? "scale-105" : "scale-100"}
        `}
        style={{
          background: gradient,
        }}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-full border-[1px] border-[rgba(220,174,194,1)] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 p-8 text-center">{title}</div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-blue-400">
          <MousePointer size={15} />
        </div>
      </div>
    </div>
  );
};

export default OfferingCards;
