"use client"

import { ScrollReveal } from "@landing/components/scroll-reveal"
import { Layers, FileSpreadsheet, Keyboard } from "lucide-react"

const BENEFITS = [
  {
    text: "منهج قائم على المشاريع (Project-Based Learning) — لا محاضرات نظرية مملة.",
    icon: Layers,
  },
  {
    text: "قوالب جاهزة (Ready-made Templates) للعمل الفوري.",
    icon: FileSpreadsheet,
  },
  {
    text: "إتقان اختصارات الكيبورد لزيادة الإنتاجية 3 أضعاف.",
    icon: Keyboard,
  },
] as const

export function Fmva6BenefitsSection() {
  return (
    <section className="py-5 sm:py-6 md:py-10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        <ScrollReveal animation="reveal-line">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center mb-1" dir="rtl">
            ما ستحصل عليه
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground tracking-tight" dir="rtl">
            الفوائد
          </h2>
          <div className="h-px w-12 mx-auto mt-2 bg-primary/50" />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {BENEFITS.map((item, index) => (
            <ScrollReveal key={index} animation="slide-up-subtle" delay={index * 100}>
              <div
                className="group relative bg-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/80 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
                dir="rtl"
              >
                <div className="absolute top-0 right-0 w-px h-0 bg-primary/50 group-hover:h-full transition-all duration-500 ease-out rounded-b-full" />
                <span className="text-[10px] font-medium text-primary/80 tracking-widest tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 flex items-start gap-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl border border-primary/20 flex items-center justify-center text-primary/90 group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors duration-300">
                    <item.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed pt-0.5">
                    {item.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
