"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, TrendingUp, Award, Briefcase } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const scrollToEnroll = () => {
    const element = document.getElementById("enroll")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('/abstract-professional-finance-pattern.jpg')] opacity-[0.03] bg-cover bg-center" />
      
      {/* Floating luxury elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-48 md:h-48 bg-primary/8 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8 py-20" dir="rtl">
          <ScrollReveal animation="fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in">
              <Award className="h-4 w-4" />
              برنامج FMVA التطبيقي
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={100}>
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="text-foreground">امتلك المهارة التي تجعل</span>
              <br />
              <span className="text-primary">البنوك والشركات العالمية</span>
              <br />
              <span className="text-foreground">تتنافس عليك</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              برنامج FMVA التطبيقي: حول معرفتك النظرية إلى خبرة عملية في النمذجة والتقييم المالي في{" "}
              <span className="text-primary font-semibold">3 شهور فقط</span>
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 md:pt-4">
              <Button
                size="lg"
                onClick={scrollToEnroll}
                className="relative border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all hover:scale-105 group overflow-hidden shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  سجل الآن
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 pt-4 md:pt-12">
              {[
                { icon: TrendingUp, number: "3", label: "شهور فقط", sublabel: "للإتقان الكامل" },
                { icon: Briefcase, number: "100%", label: "تطبيقي", sublabel: "جاهز للمكتب" },
                { icon: Award, number: "Certified", label: "معتمد", sublabel: "CFA + FMVA" },
                { icon: CheckCircle2, number: "7", label: "أيام ضمان", sublabel: "استرداد الأموال" },
              ].map((stat, index) => (
                <StatCard key={index} {...stat} delay={index * 100} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

function StatCard({
  icon: Icon,
  number,
  label,
  sublabel,
  delay,
}: {
  icon: any
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
      className="group relative p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-1.5 md:mb-3">
          <div className="p-1.5 md:p-3 rounded-lg md:rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Icon className="h-4 w-4 md:h-6 md:w-6" />
          </div>
        </div>
        <div className="text-lg md:text-4xl font-bold text-primary mb-0.5 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
          {number}
        </div>
        <div className="text-xs md:text-sm font-semibold text-foreground mb-0.5 md:mb-1">{label}</div>
        <div className="text-[10px] md:text-xs text-muted-foreground leading-tight">{sublabel}</div>
      </div>
      
      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
    </div>
  )
}

