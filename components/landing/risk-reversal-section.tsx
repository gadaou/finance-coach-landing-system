"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { LuxuryIcon } from "@/components/ui/luxury-icon"
import { Shield } from "lucide-react"

export function RiskReversalSection() {
  return (
    <section className="py-5 sm:py-6 md:py-8 bg-background relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <ScrollReveal animation="scale-in">
          <div
            className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/25 shadow-lg flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-right"
            dir="rtl"
          >
            <div className="flex-shrink-0">
              <LuxuryIcon icon={Shield} className="p-3 sm:p-4 md:p-5" iconClassName="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 break-words">
                ضمان استعادة الأموال خلال أول محاضرتين
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-words">
                إذا لم تجد القيمة العملية، نسترد لك أموالك دون تردد.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
