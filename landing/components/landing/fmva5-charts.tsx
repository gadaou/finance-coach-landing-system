"use client"

import { useEffect, useState, useRef } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@landing/components/ui/chart"

/** From Reporting to Decision Making - impact progression */
export function ReportingToDecisionChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedData, setAnimatedData] = useState([
    { stage: "التقارير", value: 0, label: "Reporting" },
    { stage: "التحليل", value: 0, label: "Analysis" },
    { stage: "صنع القرار", value: 0, label: "Decision Making" },
  ])
  const chartRef = useRef<HTMLDivElement>(null)

  const data = [
    { stage: "التقارير", value: 25, label: "Reporting" },
    { stage: "التحليل", value: 60, label: "Analysis" },
    { stage: "صنع القرار", value: 95, label: "Decision Making" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          data.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedData((prev) => {
                const next = [...prev]
                next[index] = { ...next[index], value: item.value }
                return next
              })
            }, index * 350)
          })
        }
      },
      { threshold: 0.2 },
    )
    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  const chartConfig = {
    value: { label: "الأثر", color: "hsl(var(--chart-1))" },
  }

  return (
    <div ref={chartRef} className="w-full h-56 md:h-64">
      <ChartContainer config={chartConfig} className="h-full">
        <BarChart data={animatedData} margin={{ top: 12, right: 12, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="stage" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 10 }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} animationDuration={800} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

/** Skills gap: % of accountants using advanced Excel (10% vs 90% don't) */
export function ExcelSkillsGapChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedData, setAnimatedData] = useState([
    { type: "Excel متقدم", value: 0 },
    { type: "أساسي فقط", value: 0 },
  ])
  const chartRef = useRef<HTMLDivElement>(null)

  const data = [
    { type: "Excel متقدم", value: 10 },
    { type: "أساسي فقط", value: 90 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          data.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedData((prev) => {
                const next = [...prev]
                next[index] = { ...next[index], value: item.value }
                return next
              })
            }, index * 400)
          })
        }
      },
      { threshold: 0.2 },
    )
    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  const chartConfig = {
    value: { label: "النسبة %", color: "hsl(var(--chart-2))" },
  }

  return (
    <div ref={chartRef} className="w-full h-56 md:h-64">
      <ChartContainer config={chartConfig} className="h-full">
        <BarChart data={animatedData} layout="vertical" margin={{ top: 12, right: 24, left: 12, bottom: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 10 }} />
          <YAxis dataKey="type" type="category" width={80} stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={[0, 6, 6, 0]} animationDuration={800} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
