"use client"

import { type LucideIcon } from "lucide-react"

interface LuxuryIconProps {
  icon: LucideIcon
  className?: string
  iconClassName?: string
  variant?: "default" | "dark" | "light"
}

export function LuxuryIcon({ icon: Icon, className = "", iconClassName = "", variant = "default" }: LuxuryIconProps) {
  const variants = {
    default:
      "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 text-primary shadow-lg shadow-primary/10",
    dark:
      "bg-white/10 border border-white/20 text-white shadow-xl",
    light:
      "bg-primary/15 border border-primary/25 text-primary shadow-lg",
  }
  return (
    <div
      className={`flex items-center justify-center rounded-2xl p-2.5 md:p-3 ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:shadow-xl ${variants[variant]} ${className}`}
    >
      <Icon className={`h-5 w-5 md:h-6 md:w-6 ${iconClassName}`} strokeWidth={1.5} />
    </div>
  )
}
