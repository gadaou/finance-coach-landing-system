"use client"

import { useEffect, useState, useRef } from "react"

const STAGES = [
  { label: "التقارير", value: 25, sub: "Reporting" },
  { label: "التحليل", value: 60, sub: "Analysis" },
  { label: "صنع القرار", value: 95, sub: "Decision Making" },
] as const

/** From Reporting to Decision Making - luxury animated progress bars */
export function ReportingToDecisionChart() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full space-y-4 py-1" dir="rtl">
      {STAGES.map((item, i) => (
        <div key={item.label} className="space-y-1.5">
          <div className="flex justify-between items-baseline text-xs">
            <span className="text-muted-foreground font-medium">{item.label}</span>
            <span
              className="tabular-nums text-primary font-medium transition-all duration-1000 ease-out"
              style={{ opacity: inView ? 1 : 0 }}
            >
              {inView ? item.value : 0}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-muted/60 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-l from-primary to-primary/80 transition-all duration-1000 ease-out"
              style={{
                width: inView ? `${item.value}%` : "0%",
                transitionDelay: `${i * 180}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const R = 45
const C = 2 * Math.PI * R

/** Skills gap - luxury animated donut */
export function ExcelSkillsGapChart() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const goldOffset = inView ? C - (10 / 100) * C : C

  return (
    <div ref={ref} className="w-full flex flex-col items-center justify-center py-2" dir="rtl">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="donutGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.6 0.12 75)" />
              <stop offset="100%" stopColor="oklch(0.72 0.14 75)" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="oklch(0.92 0.008 260)"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="url(#donutGold)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={goldOffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-foreground tabular-nums">10%</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
            متقدم
          </span>
        </div>
      </div>
      <div className="mt-3 flex gap-4 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-muted-foreground">Excel متقدم</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="text-muted-foreground">أساسي فقط</span>
        </span>
      </div>
    </div>
  )
}
