"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import {
  ReportingVsDecisionChart,
  ExcelEdgeChart,
  CertificationCareerChart,
} from "./animated-charts"

export function ChartsSection() {
  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14" dir="rtl">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 text-balance">
              الأثر على مسارك المهني
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              من التقارير إلى القرار، ومن Excel الأساسي إلى الميزة التنافسية
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-4" dir="rtl">
                من التقارير إلى صنع القرار
              </h3>
              <ReportingVsDecisionChart />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={100}>
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-4" dir="rtl">
                تقنيات Excel المتقدمة
              </h3>
              <ExcelEdgeChart />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200}>
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-4" dir="rtl">
                شهادة دولية = مسار أفضل
              </h3>
              <CertificationCareerChart />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
