"use client"

import { useEffect, useState, useRef } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@fmva4/components/ui/chart"
import { Zap, TrendingUp, Gem, Target, MousePointerClick, Building2, Briefcase, Award, FileCheck, Globe } from "lucide-react"

// Certification pillars – animated bars (replaces "تطور المهارات" in curriculum)
export function CertificationPillarsChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [values, setValues] = useState([0, 0, 0])
  const chartRef = useRef<HTMLDivElement>(null)

  const pillars = [
    { label: "اعتماد الشهادة", value: 100, icon: Award },
    { label: "سهولة الامتحان", value: 95, icon: FileCheck },
    { label: "الاعتراف الدولي", value: 100, icon: Globe },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          pillars.forEach((_, index) => {
            setTimeout(() => {
              setValues((prev) => {
                const next = [...prev]
                next[index] = pillars[index].value
                return next
              })
            }, index * 250)
          })
        }
      },
      { threshold: 0.25 },
    )
    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div ref={chartRef} className="w-full h-48 sm:h-64 md:h-72 space-y-4 md:space-y-6" dir="rtl">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon
        const current = values[index] ?? 0
        return (
          <div
            key={index}
            className="group"
            style={{
              opacity: isVisible ? 1 : 0.6,
              transform: isVisible ? "translateX(0)" : "translateX(12px)",
              transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground">{pillar.label}</span>
              </div>
              <span className="text-sm font-bold text-primary tabular-nums">{current}%</span>
            </div>
            <div className="h-2.5 md:h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-l from-primary via-primary/90 to-primary transition-all duration-700 ease-out relative overflow-hidden"
                style={{ width: `${current}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Skill Progression Chart
export function SkillProgressionChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [animatedData, setAnimatedData] = useState([
    { skill: "إكسل", value: 0 },
    { skill: "النمذجة", value: 0 },
    { skill: "التقييم", value: 0 },
  ])
  const chartRef = useRef<HTMLDivElement>(null)

  const data = [
    { skill: "إكسل", value: 95 },
    { skill: "النمذجة", value: 90 },
    { skill: "التقييم", value: 85 },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Animate values with smoother timing
          data.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedData((prev) => {
                const newData = [...prev]
                newData[index] = { ...newData[index], value: item.value }
                return newData
              })
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const chartConfig = {
    value: {
      label: "المهارة",
      color: "hsl(140, 60%, 58%)",
    },
  }

  return (
    <div ref={chartRef} className="w-full h-48 sm:h-64 md:h-80">
      <ChartContainer config={chartConfig}>
        <BarChart 
          data={animatedData} 
          layout="vertical" 
          margin={{ 
            left: isMobile ? 10 : 20, 
            right: isMobile ? 10 : 20, 
            top: isMobile ? 10 : 20, 
            bottom: isMobile ? 10 : 20 
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
          <YAxis dataKey="skill" type="category" stroke="hsl(var(--muted-foreground))" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(140, 60%, 53%)" />
              <stop offset="50%" stopColor="hsl(140, 60%, 58%)" />
              <stop offset="100%" stopColor="hsl(140, 60%, 63%)" />
            </linearGradient>
          </defs>
          <Bar
            dataKey="value"
            fill="url(#greenGradient)"
            radius={[0, 8, 8, 0]}
            animationDuration={1500}
            animationBegin={0}
            isAnimationActive={true}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

// Mastery Levels – elegant animated circular gauges (different topic, super elegant)
const CIRCLE_R = 42
const CIRCLE_C = 2 * Math.PI * CIRCLE_R

export function TimelineProgressChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [values, setValues] = useState([0, 0, 0])
  const chartRef = useRef<HTMLDivElement>(null)

  const items = [
    { value: 95, label: "إتقان إكسل", icon: MousePointerClick },
    { value: 90, label: "النمذجة المالية", icon: Building2 },
    { value: 100, label: "التقييم والمقابلات", icon: Briefcase },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          items.forEach((item, index) => {
            setTimeout(() => {
              setValues((prev) => {
                const next = [...prev]
                next[index] = item.value
                return next
              })
            }, index * 280)
          })
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -30px 0px" },
    )
    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div ref={chartRef} className="w-full relative" dir="rtl">
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        {items.map((item, index) => {
          const IconComponent = item.icon
          const current = values[index] ?? 0
          const strokeOffset = CIRCLE_C * (1 - current / 100)
          return (
            <div
              key={index}
              className="flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0.4,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
              }}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id={`mastery-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                    </linearGradient>
                    <filter id={`glow-${index}`}>
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-muted/20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={`url(#mastery-grad-${index})`}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={CIRCLE_C}
                    strokeDashoffset={strokeOffset}
                    style={{
                      transition: "stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    filter={`url(#glow-${index})`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary/80 mb-0.5" aria-hidden />
                  <span className="text-sm sm:text-base font-bold text-primary tabular-nums">{current}%</span>
                </div>
              </div>
              <p
                className="text-center text-xs sm:text-sm font-medium text-foreground mt-2 sm:mt-3 leading-tight max-w-[4.5rem] sm:max-w-[5rem]"
                style={{
                  transition: `opacity 0.5s ease-out ${index * 0.1 + 0.2}s`,
                }}
              >
                {item.label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Luxury Skill Mastery Dashboard - Compact & Consistent
export function SkillMasteryDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0])
  const dashboardRef = useRef<HTMLDivElement>(null)

  const skills = [
    { name: "Excel Mastery", value: 95, icon: Zap },
    { name: "Financial Modeling", value: 90, icon: TrendingUp },
    { name: "Valuation", value: 85, icon: Gem },
    { name: "Interview Prep", value: 100, icon: Target },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Animate each skill with delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedValues((prev) => {
                const newValues = [...prev]
                newValues[index] = skill.value
                return newValues
              })
            }, index * 300)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current)
    }

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  return (
    <div ref={dashboardRef} className="w-full relative">
      <div className="relative p-3 md:p-4 rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border border-border/50 overflow-visible">
        {/* Animated background particles - reduced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/15 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Skills Grid - More Compact */}
        <div className="relative z-10 grid grid-cols-2 gap-2.5 md:gap-3 pb-10">
          {skills.map((skill, index) => {
            const currentValue = animatedValues[index] || 0
            const IconComponent = skill.icon

            return (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.8)",
                  transition: `all 0.6s ease-out ${index * 0.15}s`,
                }}
              >
                <div className="p-2.5 md:p-3 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Circular Progress - More Compact */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-muted/20"
                      />
                      <defs>
                        <linearGradient id={`skill-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      {/* Progress circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke={`url(#skill-gradient-${index})`}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 38}`}
                        strokeDashoffset={`${2 * Math.PI * 38 * (1 - currentValue / 100)}`}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary mb-0.5" />
                      <div className="text-base md:text-lg font-bold text-primary">{currentValue}%</div>
                    </div>
                    {/* Glow effect */}
                    {currentValue > 0 && (
                      <div className="absolute inset-0 rounded-full bg-primary/15 blur-lg" />
                    )}
                  </div>

                  {/* Skill name - Increased font size */}
                  <div className="text-center">
                    <div className="text-sm md:text-base font-semibold text-foreground mb-1.5 line-clamp-2 min-h-[2.75rem] leading-tight">
                      {skill.name}
                    </div>
                    {/* Mini progress bar - Consistent primary color */}
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${currentValue}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Center badge - More Compact */}
        <div className="relative z-20 mt-3 flex justify-center">
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-xs md:text-sm font-semibold text-primary">
              جاهزية كاملة للعمل
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

