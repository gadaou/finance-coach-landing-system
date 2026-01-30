"use client"

import { useEffect, useState, useRef } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Skill Progression Chart
export function SkillProgressionChart() {
  const [isVisible, setIsVisible] = useState(false)
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Animate values
          data.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedData((prev) => {
                const newData = [...prev]
                newData[index] = { ...newData[index], value: item.value }
                return newData
              })
            }, index * 300)
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
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <div ref={chartRef} className="w-full h-64 md:h-80">
      <ChartContainer config={chartConfig}>
        <BarChart data={animatedData} layout="vertical" margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
          <YAxis dataKey="skill" type="category" stroke="hsl(var(--muted-foreground))" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="value"
            fill="hsl(var(--chart-1))"
            radius={[0, 8, 8, 0]}
            animationDuration={1000}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

// Timeline Progress Chart
export function TimelineProgressChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedData, setAnimatedData] = useState([
    { week: "أسبوع 1-2", progress: 0 },
    { week: "أسبوع 3-4", progress: 0 },
    { week: "أسبوع 5", progress: 0 },
  ])
  const chartRef = useRef<HTMLDivElement>(null)

  const data = [
    { week: "أسبوع 1-2", progress: 30 },
    { week: "أسبوع 3-4", progress: 70 },
    { week: "أسبوع 5", progress: 100 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          data.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedData((prev) => {
                const newData = [...prev]
                newData[index] = { ...newData[index], progress: item.progress }
                return newData
              })
            }, index * 400)
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
    progress: {
      label: "التقدم",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <div ref={chartRef} className="w-full h-64 md:h-80">
      <ChartContainer config={chartConfig}>
        <LineChart data={animatedData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
          <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="hsl(var(--chart-1))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--chart-1))", r: 6 }}
            animationDuration={1000}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}

