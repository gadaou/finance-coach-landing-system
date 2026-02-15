"use client"

import { ScrollReveal } from "@landing/components/scroll-reveal"
import { ReportingToDecisionChart, ExcelSkillsGapChart } from "./fmva5-charts"

export function Fmva5ChartsSection() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="reveal-line">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8" dir="rtl">
            لماذا النمذجة المالية مهمة لمسارك المهني
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal animation="slide-up-subtle">
            <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
              <p className="text-sm text-muted-foreground mb-3 text-center" dir="rtl">
                من التقارير إلى صنع القرار
              </p>
              <ReportingToDecisionChart />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up-subtle" delay={100}>
            <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
              <p className="text-sm text-muted-foreground mb-3 text-center" dir="rtl">
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
