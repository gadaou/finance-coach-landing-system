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
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background pt-16 md:pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6 py-10 md:py-14" dir="rtl">
          <ScrollReveal animation="reveal-line">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              سلاح المحترفين — للموظفين
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-line" delay={80}>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              <span className="text-foreground">هل مازلت عالقاً في &apos;فخ&apos; المحاسبة الروتينية؟</span>
              <br />
              <span className="text-primary">حان وقت الانتقال إلى مقعد اتخاذ القرار.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="slide-up-subtle" delay={160}>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              أتقن النمذجة المالية المتقدمة (Financial Modeling)، وحوّل البيانات الصامتة إلى استراتيجيات تقود شركتك —وراتبك— للأمام.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up-subtle" delay={200}>
            <p className="text-sm md:text-base text-muted-foreground/90">
              انضم لنخبة من بنك مصر، بايونيرز، واتصالات
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-in-subtle" delay={280}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 md:pt-6">
              <Button
                size="lg"
                onClick={scrollToEnroll}
                className="relative border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 py-5 md:px-8 md:py-6 transition-all hover:scale-[1.02] group overflow-hidden shadow-xl min-h-[44px]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  احجز مكانك في الراوند القادمة — الأماكن محدودة
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up-subtle" delay={340}>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto pt-2">
              متاح أونلاين بجودة تفاعلية عالية (Live) أو مسجل بالكامل ليناسب جدول عملك المزدحم
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}


