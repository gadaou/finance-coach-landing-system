"use client"

import { ScrollReveal } from "@fmva3/components/scroll-reveal"
import { Wallet, ArrowLeft, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function SmartInvestmentSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-8 md:pt-14 lg:pt-10 pb-8 md:pb-14 lg:pb-10 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-visible">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8" dir="rtl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-3">
              <Wallet className="h-4 w-4" />
              الاستثمار الذكي
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-balance mb-2">
              ادفع <span className="text-primary">50%</span> وابدأ، والـ 50% الباقية في منتصف الكورس
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              خطة دفع مرنة تخفف العبء وتتيح لك البدء فوراً
            </p>
          </div>
        </ScrollReveal>

        <div ref={ref} className="max-w-3xl mx-auto overflow-visible">
          {/* Desktop: two cards with arrow between */}
          <div className="hidden sm:grid sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-0 sm:items-stretch">
            <div
              className={`min-w-0 rounded-2xl rounded-e-none border-2 border-primary/20 border-l-0 bg-card shadow-lg p-5 md:p-6 flex flex-col justify-center transition-all duration-500 ease-out overflow-visible ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              dir="rtl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-bold text-primary block">50%</span>
                  <span className="text-base font-semibold text-foreground">الآن</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ادفع نصف الرسوم وابدأ البرنامج فوراً
              </p>
            </div>
            <div className="flex items-center justify-center px-3 bg-muted/20 border-y-2 border-primary/20 min-w-[3rem]">
              <ArrowLeft className="h-6 w-6 text-primary/60 rotate-180 shrink-0" aria-hidden />
            </div>
            <div
              className={`min-w-0 rounded-2xl rounded-s-none border-2 border-primary/20 border-r-0 bg-card shadow-lg p-5 md:p-6 flex flex-col justify-center transition-all duration-500 ease-out delay-150 overflow-visible ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              dir="rtl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                  <ArrowLeft className="h-5 w-5 md:h-6 md:w-6 rotate-180" />
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-bold text-primary block">50%</span>
                  <span className="text-base font-semibold text-foreground">منتصف الكورس</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                الجزء الباقي عند منتصف البرنامج
              </p>
            </div>
          </div>

          {/* Mobile: stacked cards, no overlap */}
          <div className="sm:hidden space-y-4">
            <div
              className={`rounded-2xl bg-card border-2 border-primary/20 shadow-lg p-5 flex flex-col transition-all duration-500 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              dir="rtl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">50%</span>
                  <span className="text-base font-semibold text-foreground">الآن</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ادفع نصف الرسوم وابدأ البرنامج فوراً
              </p>
            </div>
            <div className="flex justify-center" aria-hidden>
              <ArrowLeft className="h-5 w-5 text-primary/50 rotate-90 shrink-0" />
            </div>
            <div
              className={`rounded-2xl bg-card border-2 border-primary/20 shadow-lg p-5 flex flex-col transition-all duration-500 ease-out delay-150 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              dir="rtl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">50%</span>
                  <span className="text-base font-semibold text-foreground">منتصف الكورس</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                الجزء الباقي عند منتصف البرنامج
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
