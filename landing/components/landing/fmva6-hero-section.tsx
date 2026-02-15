"use client"

import { Button } from "@landing/components/ui/button"
import { ArrowLeft, FileText } from "lucide-react"
import { ScrollReveal } from "@landing/components/scroll-reveal"

export function Fmva6HeroSection() {
  const scrollToEnroll = () => {
    const element = document.getElementById("enroll")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] flex items-start md:items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-14 md:pt-20">
      {/* Tech grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-5 py-4 md:py-8" dir="rtl">
          <ScrollReveal animation="reveal-line">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary max-w-[95vw] sm:max-w-none">
              <span className="text-center">للتقنيين</span>
              <span className="text-primary/70 hidden sm:inline">—</span>
              <span className="text-center sm:inline">The Skill Master</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-line" delay={80}>
            <div>
              <h1 className="text-[2.25rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight px-1">
                <span className="text-foreground block mb-2">
                  توقف عن المشاهدة النظرية... ابدأ البناء بيدك.
                </span>
                <span className="text-primary block">
                  الكورس الوحيد الذي يعلمك النمذجة المالية بالتطبيق العملي 100%.
                </span>
              </h1>
              <div className="h-0.5 w-16 sm:w-20 mx-auto mt-3 rounded-full bg-primary/50" aria-hidden />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up-subtle" delay={160}>
            <p className="text-xs sm:text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              من الصفر إلى داشبورد احترافي. احترف أدوات التحليل المالي (Excel, Pitchbooks) وابنِ نماذج ديناميكية حقيقية.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-in-subtle" delay={240}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center pt-2 md:pt-5 px-1 sm:px-0">
              <Button
                size="lg"
                onClick={scrollToEnroll}
                className="relative border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-4 py-4 sm:px-6 sm:py-5 transition-all hover:scale-[1.02] group overflow-hidden shadow-xl min-h-[48px] touch-manipulation"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  ابدأ النسخة التجريبية
                  <ArrowLeft className="h-5 w-5 flex-shrink-0 group-hover:-translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToEnroll}
                className="border-2 border-primary/50 text-primary bg-transparent hover:bg-primary/10 text-sm sm:text-base px-4 py-4 sm:px-6 sm:py-5 transition-all hover:scale-[1.02] min-h-[48px] touch-manipulation"
              >
                <span className="flex items-center justify-center gap-2">
                  احصل على المنهج الدراسي
                  <FileText className="h-5 w-5 flex-shrink-0" />
                </span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
