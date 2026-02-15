"use client"

import { Button } from "@fmva4/components/ui/button"
import { LuxuryIcon } from "@fmva4/components/ui/luxury-icon"
import { Users, Clock, LayoutTemplate, Shield } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const scrollToEnroll = () => {
    const element = document.getElementById("enroll")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-5 sm:pt-20 sm:pb-6"
      style={{ backgroundColor: "var(--hero-bg)" }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/30 pointer-events-none" />
      {/* Soft geometric accent */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 py-8 sm:py-8 px-2 sm:px-1" dir="rtl">
          <HeroBadge />
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight animate-slide-up break-words">
            لا تكن مجرد رقم في طابور الخريجين.. امتلك المهارة التي تجعل مديري التوظيف يبحثون عنك.
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-balance leading-relaxed animate-slide-up delay-200 px-0.5">
            برنامج FMVA العملي: جسرك المختصر من قاعة المحاضرات النظرية إلى مكاتب كبرى البنوك والشركات في{" "}
            <span className="text-white font-semibold">3 أشهر فقط</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-4 sm:pt-2 animate-slide-up delay-300">
            <Button
              size="lg"
              onClick={scrollToEnroll}
              className="relative border-2 border-white bg-white text-[var(--hero-bg)] hover:bg-slate-100 text-sm sm:text-base md:text-lg font-bold min-h-[52px] sm:min-h-0 px-4 py-3.5 sm:px-6 sm:py-5 transition-all hover:scale-105 shadow-xl hover:shadow-2xl ring-2 ring-white/20 ring-offset-2 ring-offset-[var(--hero-bg)] w-full sm:w-auto max-w-md sm:max-w-none"
            >
              <span className="relative z-10 flex items-center justify-center text-center flex-wrap min-w-0 w-full whitespace-normal leading-snug break-words">
                احجز استشارة مهنية مجانية + مقعدك في الكورس
              </span>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-6 md:pt-10">
            {[
              { icon: Users, number: "500+", label: "خريج", sublabel: "يعملون الآن" },
              { icon: Clock, number: "3", label: "أشهر", sublabel: "للإتقان العملي" },
              { icon: LayoutTemplate, number: "3", label: "نماذج مالية", sublabel: "في الـ Portfolio" },
              { icon: Shield, number: "2", label: "محاضرتان ضمان", sublabel: "استرداد الأموال" },
            ].map((stat, index) => (
              <StatCard key={index} {...stat} delay={400 + index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroBadge() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-white/20 bg-white/10 text-white backdrop-blur-sm"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      برنامج FMVA العملي
    </div>
  )
}

function StatCard({
  icon: Icon,
  number,
  label,
  sublabel,
  delay,
}: {
  icon: React.ElementType
  number: string
  label: string
  sublabel: string
  delay: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      ref={ref}
      className="group relative p-2.5 sm:p-4 md:p-5 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm text-white transition-all duration-500 hover:bg-white/10 hover:border-white/25 min-h-[72px] sm:min-h-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-2 md:mb-3">
          <LuxuryIcon icon={Icon} variant="dark" className="!p-2 md:!p-2.5" iconClassName="h-4 w-4 md:h-5 md:w-5" />
        </div>
        <div className="text-base sm:text-lg md:text-3xl font-bold text-white mb-0.5 md:mb-1">{number}</div>
        <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/95 leading-tight break-words">{label}</div>
        <div className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 leading-tight">{sublabel}</div>
      </div>
    </div>
  )
}
