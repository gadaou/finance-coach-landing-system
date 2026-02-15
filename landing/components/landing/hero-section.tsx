"use client"

import { Button } from "@landing/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@landing/components/scroll-reveal"

export function HeroSection() {
  const scrollToEnroll = () => {
    const element = document.getElementById("enroll")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] flex items-start md:items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background pt-12 md:pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-primary/8 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-2.5 md:space-y-5 py-3 md:py-8" dir="rtl">
          <ScrollReveal animation="reveal-line">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary max-w-[95vw] sm:max-w-none">
              <span className="text-center">سلاح المحترفين</span>
              <span className="text-primary/70 hidden sm:inline">—</span>
              <span className="text-center sm:inline">للموظفين</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-line" delay={80}>
            <div>
              <h1 className="text-[1.95rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight px-0.5">
                <span className="text-foreground block mb-1.5">هل مازلت عالقاً في &apos;فخ&apos; المحاسبة الروتينية؟</span>
                <span className="text-primary block">حان وقت الانتقال إلى مقعد اتخاذ القرار.</span>
              </h1>
              <div className="h-0.5 w-16 sm:w-20 mx-auto mt-3 rounded-full bg-primary/50" aria-hidden />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up-subtle" delay={160}>
            <p className="text-xs sm:text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed mt-5 md:mt-0">
              أتقن النمذجة المالية المتقدمة (Financial Modeling)، وحوّل البيانات الصامتة إلى استراتيجيات تقود شركتك —وراتبك— للأمام.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up-subtle" delay={200}>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground/90">
              انضم لنخبة من بنك مصر، بايونيرز، واتصالات
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-in-subtle" delay={280}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center pt-0.5 md:pt-4 px-1 sm:px-0">
              <Button
                size="lg"
                onClick={scrollToEnroll}
                className="relative border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 transition-all hover:scale-[1.02] group overflow-hidden shadow-xl min-h-[48px] touch-manipulation"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  احجز مكانك في الراوند القادمة — الأماكن محدودة
                  <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up-subtle" delay={340}>
            <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground max-w-xl mx-auto pt-0.5">
              متاح أونلاين بجودة تفاعلية عالية (Live) أو مسجل بالكامل ليناسب جدول عملك المزدحم
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}


