"use client"

import { ScrollReveal } from "@landing/components/scroll-reveal"

export function Fmva6ObjectionSection() {
  return (
    <section className="py-5 sm:py-6 md:py-10 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6">
        <ScrollReveal animation="reveal-line">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6 md:mb-8" dir="rtl">
            هل يستحق السعر؟
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ScrollReveal animation="slide-up-subtle">
            <div
              className="rounded-xl md:rounded-2xl border border-border/80 bg-card p-5 md:p-6 text-center"
              dir="rtl"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                ساعة استشارة مالية
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground font-mono tabular-nums">
                X جنيه
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                مرة واحدة — بدون مواد أو متابعة
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up-subtle" delay={100}>
            <div
              className="rounded-xl md:rounded-2xl border-2 border-primary/40 bg-primary/5 p-5 md:p-6 text-center"
              dir="rtl"
            >
              <p className="text-xs uppercase tracking-wider text-primary/90 mb-2">
                الكورس الكامل
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary font-mono tabular-nums">
                Y جنيه
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                وصول دائم — قوالب + منهج + تطبيق عملي
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="slide-up-subtle" delay={160}>
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto" dir="rtl">
            قارن بنفسك: تكلفة الكورس أقل من بضع ساعات استشارة — مع إمكانية العودة للمحتوى والقيام بالتطبيق العملي في أي وقت.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
