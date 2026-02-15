"use client"

import { BookOpen, FileQuestion } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const CIRCLE_R = 36
const CIRCLE_C = 40
const STROKE_DASH = 2 * Math.PI * CIRCLE_R

export function LanguageBarrierSection() {
  const [readiness, setReadiness] = useState(0)
  const [cardVisible, setCardVisible] = useState(false)
  const [pillsVisible, setPillsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setCardVisible(true)
          setTimeout(() => setPillsVisible(true), 200)
          const duration = 900
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const p = Math.min(1, elapsed / duration)
            setReadiness(Math.round(p * 100))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  const strokeOffset = STROKE_DASH * (1 - readiness / 100)

  return (
    <section ref={ref} className="pt-5 md:pt-8 pb-5 md:pb-8 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden transition-all duration-700 ease-out"
            style={{
              opacity: cardVisible ? 1 : 0,
              transform: cardVisible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.98)",
            }}
            dir="rtl"
          >
            {/* Gradient border + glass card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/25 via-primary/15 to-primary/25 p-[1px]">
              <div className="absolute inset-[1px] rounded-[15px] bg-card/98 backdrop-blur-sm shadow-inner" />
            </div>

            <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 md:p-5 items-center sm:items-stretch">
              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center text-center sm:text-right">
                <p className="text-sm md:text-base font-medium text-foreground leading-snug mb-3">
                  خايف من الإنجليزي؟ لا تقلق. الشرح مبسط، والمصطلحات مشروحة، وبنك الأسئلة (Simulators) هيجهزك للامتحان بنسبة{" "}
                  <span className="text-primary font-bold">100%</span>.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    style={{
                      opacity: pillsVisible ? 1 : 0,
                      transform: pillsVisible ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
                    }}
                  >
                    <BookOpen className="h-3.5 w-3.5 shrink-0" />
                    شرح مبسط
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    style={{
                      opacity: pillsVisible ? 1 : 0,
                      transform: pillsVisible ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.4s ease-out 0.08s, transform 0.4s ease-out 0.08s",
                    }}
                  >
                    <FileQuestion className="h-3.5 w-3.5 shrink-0" />
                    بنك أسئلة
                  </span>
                </div>
              </div>

              {/* Circular gauge */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox={`0 0 ${CIRCLE_C * 2} ${CIRCLE_C * 2}`}
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="lang-gauge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(var(--primary))" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={CIRCLE_C}
                      cy={CIRCLE_C}
                      r={CIRCLE_R}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-primary/20"
                    />
                    <circle
                      cx={CIRCLE_C}
                      cy={CIRCLE_C}
                      r={CIRCLE_R}
                      fill="none"
                      stroke="url(#lang-gauge-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={STROKE_DASH}
                      strokeDashoffset={strokeOffset}
                      className="transition-all duration-300 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg md:text-xl font-bold text-primary tabular-nums leading-none">
                      {readiness}%
                    </span>
                    <span className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5 leading-tight">
                      جاهزية
                    </span>
                  </div>
                </div>
                {readiness === 100 && (
                  <div className="h-1 rounded-full bg-primary/20 w-10 overflow-hidden" aria-hidden>
                    <div className="h-full w-full rounded-full bg-primary/50 animate-shimmer" />
                  </div>
                )}
              </div>
            </div>

            {/* Bottom shine line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
