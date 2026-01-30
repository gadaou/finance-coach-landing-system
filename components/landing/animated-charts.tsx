"use client"

import { useEffect, useState, useRef } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Zap, TrendingUp, Gem, Target, MousePointerClick, Building2, Briefcase } from "lucide-react"

// Skill Progression Chart
export function SkillProgressionChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [animatedData, setAnimatedData] = useState([
    { skill: "Excel", value: 0 },
    { skill: "Modeling", value: 0 },
    { skill: "Valuation", value: 0 },
  ])
  const chartRef = useRef<HTMLDivElement>(null)

  const data = [
    { skill: "Excel", value: 95 },
    { skill: "Modeling", value: 90 },
    { skill: "Valuation", value: 85 },
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

// Timeline Progress Chart - Luxury Redesign
export function TimelineProgressChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedProgress, setAnimatedProgress] = useState([0, 0, 0])
  const chartRef = useRef<HTMLDivElement>(null)

  const milestones = [
    { week: "أسبوع 1-2", progress: 30, label: "Excel Mastery", icon: MousePointerClick },
    { week: "أسبوع 3-4", progress: 70, label: "Financial Modeling", icon: Building2 },
    { week: "أسبوع 5", progress: 100, label: "Interview Ready", icon: Briefcase },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          milestones.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedProgress((prev) => {
                const newProgress = [...prev]
                newProgress[index] = milestones[index].progress
                return newProgress
              })
            }, index * 500)
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

  return (
    <div ref={chartRef} className="w-full h-80 md:h-96 relative">
      {/* Luxury Timeline with Milestones */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Progress Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20">
          {/* Animated progress fill */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/80 to-primary transition-all duration-2000 ease-out"
            style={{
              height: isVisible ? `${animatedProgress[2]}%` : "0%",
            }}
          />
          {/* Glow effect */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-full bg-primary/30 blur-md transition-all duration-2000 ease-out"
            style={{
              height: isVisible ? `${animatedProgress[2]}%` : "0%",
            }}
          />
        </div>

        {/* Milestones */}
        {milestones.map((milestone, index) => {
          const IconComponent = milestone.icon
          return (
            <div
              key={index}
              className="relative flex items-center gap-4 md:gap-6 group"
              style={{
                opacity: isVisible && animatedProgress[index] > 0 ? 1 : 0.3,
                transform: isVisible && animatedProgress[index] > 0 ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.8s ease-out ${index * 0.3}s`,
              }}
            >
              {/* Milestone Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-background bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/50 ${
                    animatedProgress[index] > 0 ? "ring-4 ring-primary/30" : ""
                  }`}
                >
                  <IconComponent className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground" />
                </div>
                {/* Slow cinematic pulse animation */}
                {animatedProgress[index] > 0 && (
                  <>
                    <div 
                      className="absolute inset-0 rounded-full bg-primary/30"
                      style={{
                        animation: "pulse-cinematic 4s ease-in-out infinite",
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full bg-primary/20"
                      style={{
                        animation: "pulse-cinematic 4s ease-in-out infinite 1s",
                      }}
                    />
                  </>
                )}
              </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs md:text-sm font-semibold text-primary">
                  {milestone.week}
                </span>
                <span className="text-lg md:text-xl font-bold text-foreground">
                  {milestone.label}
                </span>
              </div>
              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{
                    width: `${animatedProgress[index]}%`,
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>
              {/* Percentage */}
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">
                {animatedProgress[index]}% مكتمل
              </div>
            </div>
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

// Skills Breakdown Pie Chart - Luxury Animated
export function SkillsBreakdownChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedData, setAnimatedData] = useState([
    { name: "Financial Modeling", value: 0 },
    { name: "Finance", value: 0 },
    { name: "Excel", value: 0 },
    { name: "Valuation", value: 0 },
    { name: "Budgeting & Forecasting", value: 0 },
    { name: "Presentation & Visuals", value: 0 },
    { name: "Accounting", value: 0 },
    { name: "Strategy", value: 0 },
  ])
  const chartRef = useRef<HTMLDivElement>(null)

  const data = [
    { name: "Financial Modeling", value: 25 },
    { name: "Finance", value: 23 },
    { name: "Excel", value: 17 },
    { name: "Valuation", value: 10 },
    { name: "Budgeting & Forecasting", value: 8 },
    { name: "Presentation & Visuals", value: 8 },
    { name: "Accounting", value: 5 },
    { name: "Strategy", value: 4 },
  ]

  // Brand green colors - gradient from dark to light
  const COLORS = [
    "hsl(140, 60%, 45%)",  // Dark green - Financial Modeling
    "hsl(140, 60%, 48%)",  // Finance
    "hsl(140, 60%, 52%)",  // Excel
    "hsl(140, 60%, 55%)",  // Valuation
    "hsl(140, 60%, 58%)",  // Budgeting
    "hsl(140, 60%, 61%)",  // Presentation
    "hsl(140, 60%, 64%)",  // Accounting
    "hsl(140, 60%, 67%)",  // Light green - Strategy
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Animate values sequentially
          data.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedData((prev) => {
                const newData = [...prev]
                newData[index] = { ...newData[index], value: item.value }
                return newData
              })
            }, index * 150)
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

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
    value,
  }: any) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    
    // Determine if mobile based on radius size (mobile uses smaller radius)
    const isMobileSize = outerRadius <= 90
    const labelRadius = outerRadius + (isMobileSize ? 20 : 30)
    const labelX = cx + labelRadius * Math.cos(-midAngle * RADIAN)
    const labelY = cy + labelRadius * Math.sin(-midAngle * RADIAN)

    return (
      <g>
        {/* Dashed line from pie to label - hide on mobile */}
        {!isMobileSize && (
          <line
            x1={x}
            y1={y}
            x2={labelX}
            y2={labelY}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={1}
            strokeDasharray="3 3"
            opacity={0.4}
          />
        )}
        {/* Percentage inside pie */}
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={isMobileSize ? 10 : 12}
          fontWeight="bold"
        >
          {`${value}%`}
        </text>
        {/* Label outside pie - hide on mobile */}
        {!isMobileSize && (
          <text
            x={labelX}
            y={labelY}
            fill="hsl(var(--foreground))"
            textAnchor={labelX > cx ? "start" : "end"}
            dominantBaseline="central"
            fontSize={12}
            fontWeight="medium"
          >
            {name}
          </text>
        )}
      </g>
    )
  }

  const renderCustomLegend = (props: any) => {
    const { payload } = props
    return (
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 px-2">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-1.5 sm:gap-2">
            <div
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs sm:text-sm text-muted-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div ref={chartRef} className="w-full h-[480px] sm:h-96 md:h-[500px] relative overflow-visible px-2 -my-16 sm:my-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 30, right: 30, bottom: isMobile ? 50 : 80, left: 30 }}>
          <Pie
            data={animatedData}
            cx="50%"
            cy={isMobile ? "52%" : "50%"}
            labelLine={!isMobile}
            label={renderCustomLabel}
            outerRadius={isMobile ? 75 : 120}
            innerRadius={isMobile ? 38 : 60}
            fill="#8884d8"
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
            isAnimationActive={isVisible}
          >
            {animatedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  transition: "all 0.3s ease-out",
                }}
              />
            ))}
          </Pie>
          <ChartTooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: payload[0].payload.fill }}
                        />
                        <span className="font-medium">{payload[0].name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {payload[0].value}%
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Legend
            content={renderCustomLegend}
            wrapperStyle={{ paddingTop: isMobile ? "10px" : "20px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

