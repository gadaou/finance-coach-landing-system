"use client"

import { ScrollReveal } from "@landing/components/scroll-reveal"
import { ReportingToDecisionChart, ExcelSkillsGapChart } from "./fmva5-charts"

export function Fmva5ChartsSection() {
  return (
    <section className="py-5 sm:py-6 md:py-10 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-primary/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        <ScrollReveal animation="reveal-line">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center mb-1" dir="rtl">
            الأثر على مسارك
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground tracking-tight" dir="rtl">
            لماذا النمذجة المالية مهمة لمسارك المهني
          </h2>
          <div className="h-px w-12 mx-auto mt-2 bg-primary/50" />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ScrollReveal animation="slide-up-subtle">
            <div
              className="rounded-2xl bg-card border border-border/80 p-4 md:p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              dir="rtl"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                من التقارير إلى صنع القرار
              </p>
              <ReportingToDecisionChart />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up-subtle" delay={100}>
            <div
              className="rounded-2xl bg-card border border-border/80 p-4 md:p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              dir="rtl"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                نسبة المحاسبين الذين يستخدمون Excel المتقدم
              </p>
              <ExcelSkillsGapChart />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
