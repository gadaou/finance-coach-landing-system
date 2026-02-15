"use client"

import { ScrollReveal } from "@fmva4/components/scroll-reveal"
import { LuxuryIcon } from "@fmva4/components/ui/luxury-icon"
import { LayoutTemplate, MessageCircle, FileSearch } from "lucide-react"

const benefits = [
  {
    icon: LayoutTemplate,
    title: "3 نماذج مالية كاملة لشركات حقيقية",
    description: "ضعها في الـ Portfolio الخاص بك.",
  },
  {
    icon: MessageCircle,
    title: "تدريب مكثف على أسئلة الإنترفيو التقنية",
    description: "Technical Interview Prep",
  },
  {
    icon: FileSearch,
    title: "مراجعة وتجهيز الـ CV والـ LinkedIn",
    description: "ليتصدر البحث",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-5 sm:py-6 md:py-8 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 md:mb-6 px-2" dir="rtl">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance break-words">
              ما الذي <span className="text-primary">ستحصل عليه</span>؟
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              فوائد عملية تضعك أمام مديري التوظيف
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {benefits.map((item, index) => (
            <ScrollReveal
              key={index}
              animation={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}
              delay={index * 100}
            >
              <div
                className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-full flex flex-col"
                dir="rtl"
              >
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                  <LuxuryIcon icon={item.icon} className="flex-shrink-0" iconClassName="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-snug break-words min-w-0">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mt-auto break-words">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
