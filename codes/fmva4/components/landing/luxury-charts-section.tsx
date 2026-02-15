"use client"

import { ScrollReveal } from "@fmva4/components/scroll-reveal"
import { useEffect, useState, useRef } from "react"
import { GraduationCap, BookOpen, Briefcase, Sparkles } from "lucide-react"

// Journey steps: Graduate → Training → Portfolio & Interview → Desired Candidate
const JOURNEY_STEPS = [
  { icon: GraduationCap, label: "خريج", sub: "شهادة نظرية", color: "text-white" },
  { icon: BookOpen, label: "تدريب FMVA", sub: "نمذجة وتقييم عملي", color: "text-white" },
  { icon: Briefcase, label: "نماذج + إنترفيو", sub: "بورتفوليو جاهز", color: "text-white" },
  { icon: Sparkles, label: "المرشح المطلوب", sub: "جاهز للتوظيف", color: "text-white" },
]

// Section 1: Transformation journey – horizontal path with animated line and staggered step cards
export function BeforeAfterChartSection() {
  const [visible, setVisible] = useState(false)
  const [revealedSteps, setRevealedSteps] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const delays = [0, 280, 560, 840]
    const timers = delays.map((d, i) => setTimeout(() => setRevealedSteps(i), d))
    return () => timers.forEach(clearTimeout)
  }, [visible])

  return (
    <section className="py-5 sm:py-6 md:py-8 relative overflow-hidden bg-white" ref={ref}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <ScrollReveal animation="fade-in-up">
          <h2 className="text-center text-base sm:text-lg md:text-xl font-bold text-foreground mb-3 sm:mb-4 md:mb-5 px-2 break-words" dir="rtl">
            من الخريج إلى المرشح المطلوب
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="scale-in">
          <div
            className="max-w-3xl mx-auto p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl overflow-hidden"
            dir="rtl"
          >
            <div className="relative flex flex-col sm:flex-row justify-between items-stretch gap-4 sm:gap-0 sm:items-center">
              {JOURNEY_STEPS.map((step, index) => {
                const Icon = step.icon
                const isRevealed = revealedSteps >= index
                return (
                  <div
                    key={index}
                    className="relative z-10 flex flex-1 flex-col items-center text-center"
                  >
                    <div
                      className={`flex items-center justify-center transition-all duration-500 ${
                        isRevealed ? "opacity-100 scale-100" : "opacity-40 scale-90"
                      }`}
                      style={{
                        transitionDelay: `${index * 80}ms`,
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <Icon className={`h-6 w-6 sm:h-5 sm:w-5 ${step.color}`} strokeWidth={1.8} />
                    </div>
                    <p
                      className={`font-semibold text-xs sm:text-sm mt-2 leading-tight break-words text-white`}
                      style={{
                        opacity: isRevealed ? 1 : 0.6,
                        transition: `opacity 0.4s ease-out ${index * 80}ms`,
                      }}
                    >
                      {step.label}
                    </p>
                    <p
                      className="text-[10px] sm:text-xs text-white/70 mt-0.5"
                      style={{
                        opacity: isRevealed ? 1 : 0.5,
                        transition: `opacity 0.4s ease-out ${index * 80 + 60}ms`,
                      }}
                    >
                      {step.sub}
                    </p>
                  </div>
                )
              })}
            </div>

            <p
              className="text-center text-white/60 text-xs mt-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              dir="rtl"
            >
              مسار عملي واحد في 3 أشهر
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// Section 2: 3-month path – vertical on mobile, horizontal on desktop; drawing line + traveling pulse
const MONTHS = [
  {
    month: 1,
    label: "أساسيات النمذجة وإكسل",
    sub: "شهر 1",
    icon: "📊",
    short: "إكسل والنمذجة",
  },
  {
    month: 2,
    label: "نماذج حقيقية + التقييم",
    sub: "شهر 2",
    icon: "📈",
    short: "نماذج وتقييم",
  },
  {
    month: 3,
    label: "الإنترفيو والـ CV",
    sub: "شهر 3",
    icon: "✓",
    short: "إنترفيو و CV",
  },
]

export function ThreeMonthPathSection() {
  const [visible, setVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const stepDelays = [0, 400, 800]
    const stepTimers = stepDelays.map((d, i) => setTimeout(() => setActiveStep(i), d))
    return () => stepTimers.forEach(clearTimeout)
  }, [visible])

  return (
    <section className="py-5 sm:py-6 md:py-8 relative overflow-hidden bg-white" ref={ref}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <ScrollReveal animation="fade-in-up">
          <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4 md:mb-5 px-2 break-words" dir="rtl">
            مسارك في 3 أشهر
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="scale-in">
          <div
            className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            style={{
              background: "linear-gradient(165deg, rgba(15,23,42,0.97) 0%, rgba(30,41,59,0.95) 100%)",
            }}
            dir="rtl"
          >
            {/* ----- MOBILE: Vertical timeline ----- */}
            <div className="sm:hidden p-5 pb-6">
              <div className="relative flex flex-col gap-0">
                {MONTHS.map((item, index) => {
                  const isRevealed = activeStep >= index
                  return (
                    <div
                      key={index}
                      className="relative flex gap-4 py-3 first:pt-0 last:pb-0"
                      style={{
                        opacity: isRevealed ? 1 : 0.45,
                        transform: isRevealed ? "translateX(0)" : "translateX(8px)",
                        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms`,
                      }}
                    >
                      {/* Node circle */}
                      <div
                        className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-all duration-500 ${
                          isRevealed
                            ? "bg-white/20 text-white shadow-lg shadow-white/20"
                            : "bg-white/5 text-white/80 border border-white/10"
                        }`}
                      >
                        {item.month}
                      </div>
                      {/* Card */}
                      <div
                        className={`flex-1 min-w-0 rounded-xl border px-4 py-3 transition-all duration-500 ${
                          isRevealed
                            ? "border-white/20 bg-white/5"
                            : "border-white/5 bg-white/[0.02]"
                        }`}
                      >
                        <p className="font-semibold text-white text-sm leading-snug break-words">
                          {item.label}
                        </p>
                        <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ----- DESKTOP: Horizontal timeline ----- */}
            <div className="hidden sm:block p-6 md:p-8">
              <div className="relative flex flex-row justify-between items-start">
                {MONTHS.map((item, index) => {
                  const isRevealed = activeStep >= index
                  return (
                    <div
                      key={index}
                      className="relative z-10 flex w-[28%] max-w-[11rem] flex-col items-center text-center"
                      style={{
                        opacity: isRevealed ? 1 : 0.4,
                        transform: isRevealed ? "translateY(0) scale(1)" : "translateY(10px) scale(0.96)",
                        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms`,
                      }}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold transition-all duration-500 ${
                          isRevealed
                            ? "bg-white/20 text-white shadow-xl shadow-white/25 scale-100"
                            : "bg-white/5 text-white/80 border border-white/10 scale-95"
                        }`}
                      >
                        {item.month}
                      </div>
                      <p className="font-semibold text-white text-sm mt-3 leading-tight break-words px-1">
                        {item.label}
                      </p>
                      <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
