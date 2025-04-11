"use client";

import { ReactNode } from "react";
import { Button } from "../ui/moving-border";

export interface GradientBorderButtonProps {
  className?: string;
  children: ReactNode;
}

export function GradientBorderButton({ children }: GradientBorderButtonProps) {
  return (
    <div className="relative group rounded-full md:block">
      <Button
        borderRadius="1.75rem"
        className="bg-transparent  dark:bg-slate-900 text-white dark:text-white border-primary dark:border-slate-800"
      >
        {children}
      </Button>
    </div>
  );
}
