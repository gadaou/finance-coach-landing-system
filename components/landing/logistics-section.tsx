"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Video, Calendar } from "lucide-react"

export function LogisticsSection() {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="max-w-3xl mx-auto text-center" dir="rtl">
            <h2 className="text-lg md:text-2xl font-bold text-foreground mb-4 text-balance">
              يناسب جدولك المزدحم
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              متاح أونلاين بجودة تفاعلية عالية{" "}
              <span className="text-primary font-semibold">(Live)</span>
              {" "}أو مسجل بالكامل ليناسب جدول عملك المزدحم
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Video className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Live تفاعلي</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">مسجل بالكامل</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
