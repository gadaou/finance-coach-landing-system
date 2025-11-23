"use client"

import { ScrollReveal } from "./scroll-reveal"
import { useEffect, useRef, useState } from "react"
import { TrendingUp, DollarSign, Briefcase, Award } from "lucide-react"

export function CareerGrowthSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Your <span className="text-primary">Career Growth</span> Trajectory
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              ACCA qualification opens doors to senior financial positions with significantly higher earning potential
              and career progression opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Animated Salary Growth Chart */}
          <ScrollReveal animation="slide-in-left">
            <AnimatedSalaryChart />
          </ScrollReveal>

          {/* Career Milestones */}
          <ScrollReveal animation="slide-in-right">
            <div className="space-y-6">
              <CareerMilestone
                icon={Briefcase}
                title="Junior Accountant"
                salary="$30K - $45K"
                delay={0}
                color="from-blue-500/20 to-blue-500/10"
              />
              <CareerMilestone
                icon={TrendingUp}
                title="Senior Accountant (ACCA)"
                salary="$55K - $75K"
                delay={200}
                color="from-primary/30 to-primary/20"
              />
              <CareerMilestone
                icon={Award}
                title="Finance Manager (ACCA)"
                salary="$85K - $120K"
                delay={400}
                color="from-primary/40 to-primary/30"
              />
              <CareerMilestone
                icon={DollarSign}
                title="CFO / Director (ACCA)"
                salary="$150K+"
                delay={600}
                color="from-primary/50 to-primary/40"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Success Rate Chart */}
        <ScrollReveal animation="fade-in-up">
          <div className="mt-20 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">
              Finance Coach <span className="text-primary">Success Metrics</span>
            </h3>
            <AnimatedSuccessChart />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function AnimatedSalaryChart() {
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const data = [
    { year: "Year 1", salary: 35, label: "Entry Level" },
    { year: "Year 2", salary: 45, label: "Associate" },
    { year: "Year 3", salary: 65, label: "ACCA Qualified" },
    { year: "Year 4", salary: 85, label: "Senior Role" },
    { year: "Year 5", salary: 120, label: "Management" },
  ]

  return (
    <div ref={chartRef} className="p-8 rounded-2xl bg-card border border-border shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Average Salary Growth</h3>
        <p className="text-muted-foreground">ACCA qualified professionals (in thousands USD)</p>
      </div>

      <div className="relative h-80">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-muted-foreground">
          <span>$150K</span>
          <span>$100K</span>
          <span>$50K</span>
          <span>$0K</span>
        </div>

        {/* Chart area */}
        <div className="ml-16 h-full flex items-end justify-between gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center group cursor-pointer">
              {/* Bar */}
              <div className="relative w-full mb-4">
                <div
                  className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all duration-1000 ease-out hover:from-primary hover:to-primary/70 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/50"
                  style={{
                    height: isVisible ? `${(item.salary / 150) * 300}px` : "0px",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000" />

                  {/* Salary label */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    ${item.salary}K
                  </div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="text-center">
                <div className="text-sm font-semibold mb-1">{item.year}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CareerMilestone({
  icon: Icon,
  title,
  salary,
  delay,
  color,
}: {
  icon: any
  title: string
  salary: string
  delay: number
  color: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${color} p-1 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      <div className="bg-card rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden">
        {/* Animated background on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

        <div className="relative p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
          <Icon className="h-8 w-8" />
        </div>
        <div className="flex-1 relative z-10">
          <h4 className="text-lg font-bold mb-1">{title}</h4>
          <div className="text-2xl font-bold text-primary">{salary}</div>
        </div>
      </div>
    </div>
  )
}

function AnimatedSuccessChart() {
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const metrics = [
    { label: "Pass Rate", value: 98, color: "bg-green-500" },
    { label: "Employment Rate", value: 95, color: "bg-primary" },
    { label: "Student Satisfaction", value: 97, color: "bg-blue-500" },
    { label: "Career Advancement", value: 92, color: "bg-purple-500" },
  ]

  return (
    <div ref={chartRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="group p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <div className="mb-4">
            <div className="text-sm font-semibold text-muted-foreground mb-3">{metric.label}</div>
            <div className="text-5xl font-bold text-primary mb-4">
              <CountingNumber end={metric.value} isVisible={isVisible} delay={index * 100} />%
            </div>
          </div>

          {/* Animated progress bar */}
          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 ${metric.color} rounded-full transition-all duration-1000 ease-out`}
              style={{
                width: isVisible ? `${metric.value}%` : "0%",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CountingNumber({ end, isVisible, delay }: { end: number; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      let current = 0
      const increment = end / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 30)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, end, delay])

  return <span>{count}</span>
}
