"use client"

import { ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


export interface GradientBorderButtonProps {
  gradientClassName?: string
  className?:string
  children: ReactNode
}

export function GradientBorderButton({ children, className, gradientClassName, ...props }: GradientBorderButtonProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="relative group rounded-full">
      {/* Gradient border container */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:blur-sm",
          isHovering && "animate-gradient-xy",
          gradientClassName,
        )}
      />
      <Button
        size="lg"
        variant="ghost"
        className={cn("relative rounded-full bg-black text-white p-6 shadow-sm", className)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
