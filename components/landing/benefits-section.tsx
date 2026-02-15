"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "الانتقال من إعداد التقارير (Reporting) إلى صنع القرار (Decision Making).",
  "تقنيات متقدمة في Excel لا يعرفها 90% من المحاسبين (Macros, Sensitivity Analysis).",
  "شهادة دولية تعزز طلبك للترقية أو الانتقال لشركة Multinational.",
]

export function BenefitsSection() {
  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12" dir="rtl">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 text-balance">
              ما الذي ستحصل عليه؟
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              نتائج واضحة تركز على مسارك المهني
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
          {benefits.map((text, index) => (
            <ScrollReveal key={index} animation="fade-in-up" delay={index * 80}>
              <div
                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                dir="rtl"
              >
                <div className="flex-shrink-0 p-1.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed font-medium">
                  {text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
