"use client"

import { useState } from "react"
import { ScrollReveal } from "@landing/components/scroll-reveal"
import { BarChart3, LayoutDashboard, PieChart } from "lucide-react"

const PLACEHOLDERS = [
  {
    id: "1",
    label: "نموذج ديناميكي — Excel",
    icon: BarChart3,
    gifPath: "/fmva6/demo-1.gif",
  },
  {
    id: "2",
    label: "داشبورد تحليلي",
    icon: LayoutDashboard,
    gifPath: "/fmva6/demo-2.gif",
  },
  {
    id: "3",
    label: "Pitchbook / تقديم",
    icon: PieChart,
    gifPath: "/fmva6/demo-3.gif",
  },
] as const

function ModelCard({
  label,
  icon: Icon,
  gifPath,
  index,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  gifPath: string
  index: number
}) {
  const [showGif, setShowGif] = useState(false)
  const [gifFailed, setGifFailed] = useState(false)

  return (
    <article className="group relative w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5 hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden">
        {!gifFailed && (
          <img
            src={gifPath}
            alt={label}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${showGif ? "opacity-100" : "opacity-0"}`}
            onError={() => setGifFailed(true)}
            onLoad={() => setShowGif(true)}
          />
        )}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted/40 p-4 transition-opacity duration-300 backdrop-blur-[1px] ${showGif && !gifFailed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="flex h-14 w-14 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
            <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
          </div>
          <span className="text-center text-sm font-medium text-foreground sm:text-base">{label}</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border/60 bg-card/80 px-4 py-3">
        <span className="text-[10px] font-medium tabular-nums tracking-wider text-primary/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs text-muted-foreground" dir="rtl">
          نموذج عملي
        </span>
      </div>
    </article>
  )
}

export function Fmva6TrustGifsSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6">
        <ScrollReveal animation="reveal-line">
          <div className="mx-auto max-w-2xl text-center" dir="rtl">
            <p className="mb-1.5 text-xs font-medium uppercase tracking-widest text-primary/90 sm:text-sm">
              تطبيق عملي 100%
            </p>
            <h2 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              نماذج تعمل بالفعل
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              لقطات من نماذج وداشبوردات حقيقية تبنيها داخل الكورس
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-6 max-w-5xl sm:mt-8 md:mt-10">
          <div className="grid grid-cols-1 gap-5 sm:gap-5 md:grid-cols-3 md:gap-6">
            {PLACEHOLDERS.map((item, index) => (
              <ScrollReveal key={item.id} animation="slide-up-subtle" delay={index * 80}>
                <ModelCard
                  label={item.label}
                  icon={item.icon}
                  gifPath={item.gifPath}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
