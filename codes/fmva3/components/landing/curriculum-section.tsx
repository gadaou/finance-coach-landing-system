"use client"

import { ScrollReveal } from "@fmva3/components/scroll-reveal"
import { MousePointerClick, Building2, TrendingUp, CheckCircle2, Calendar, ChevronDown } from "lucide-react"
import { CertificationPillarsChart, TimelineProgressChart } from "./animated-charts"
import { useEffect, useState, useRef } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@fmva3/components/ui/collapsible"

export function CurriculumSection() {
  return (
    <section className="pt-8 md:pt-24 lg:pt-14 pb-8 md:pb-24 lg:pb-14 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 lg:mb-10 -mt-8" dir="rtl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              المنهج <span className="text-primary">"الجاهز للمكتب"</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Curriculum Timeline */}
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-12">
          {[
            {
              weeks: "الأسبوع 1-2",
              title: "إتقان إكسل بدون ماوس",
              subtitle: "Mouse-free Excel Mastery",
              icon: MousePointerClick,
              description: "تتعلم استخدام Excel بسرعة وكفاءة بدون الاعتماد على الماوس. مهارة أساسية في بيئة العمل الاحترافية.",
              outcomes: [
                "إتقان جميع اختصارات لوحة المفاتيح",
                "بناء نماذج معقدة بسرعة فائقة",
                "استخدام الصيغ المتقدمة بثقة",
              ],
              color: "from-blue-500/20 to-blue-500/10",
            },
            {
              weeks: "الأسبوع 3-4",
              title: "بناء 3-Statement Model لشركة مدرجة في البورصة المصرية من الصفر",
              subtitle: "3-Statement Model for EGX Listed Company",
              icon: Building2,
              description: "بناء نموذج مالي كامل لشركة مدرجة في البورصة المصرية. من البيانات المالية إلى النموذج الجاهز.",
              outcomes: [
                "ربط القوائم المالية الثلاثة",
                "بناء توقعات مالية دقيقة",
                "إنشاء نموذج جاهز للاستخدام الفوري",
              ],
              color: "from-primary/30 to-primary/20",
            },
            {
              weeks: "الأسبوع 5",
              title: "كيف تجيب على أسئلة الـ Valuation في مقابلات \"Big 4\"؟",
              subtitle: "Simulated Interviews",
              icon: TrendingUp,
              description: "محاكاة كاملة للانترفيو التقني. كيف تجيب على أسئلة التقييم المالي في مقابلات الشركات الكبرى؟",
              outcomes: [
                "إجابات جاهزة لأسئلة Valuation",
                "ثقة في الانترفيو التقني",
                "استراتيجيات الإجابة على السيناريوهات المعقدة",
              ],
              color: "from-primary/40 to-primary/30",
            },
          ].map((module, index) => (
            <CurriculumModule key={index} module={module} index={index} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="max-w-6xl mx-auto mt-8 md:mt-20 space-y-8">
          {/* Two Column Charts */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative p-3 sm:p-6 rounded-2xl bg-card border border-border shadow-xl">
                  <h3 className="text-base sm:text-xl font-extrabold mb-2 sm:mb-4 text-center" dir="rtl">
                    أركان الشهادة
                  </h3>
                  <CertificationPillarsChart />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-left">
              <div className="relative group -mb-12 md:mb-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative p-6 rounded-2xl bg-card border border-border shadow-xl" dir="rtl">
                  <h3 className="text-base sm:text-xl font-bold mb-4 text-center">
                    مستويات الإتقان
                  </h3>
                  <TimelineProgressChart />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function CurriculumModule({
  module,
  index,
}: {
  module: {
    weeks: string
    title: string
    subtitle: string
    icon: any
    description: string
    outcomes: string[]
    color: string
  }
  index: number
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <ScrollReveal animation={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}>
      <div
        ref={ref}
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${module.color} p-1 transition-all duration-500 hover:shadow-2xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="bg-card rounded-2xl relative overflow-hidden" dir="rtl">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <CollapsibleTrigger className="w-full text-right hover:bg-muted/30 transition-colors duration-200">
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                      <module.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">{module.weeks}</span>
                      </div>
                      <h3 className="text-xl md:text-3xl font-bold">{module.title}</h3>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-6 w-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
              <div className="relative z-10 px-6 md:px-8 pb-6 md:pb-8 pt-0" dir="rtl">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4">{module.subtitle}</p>
                  <p className="text-base leading-relaxed mb-6">{module.description}</p>
                </div>

                <div className="space-y-3">
                  <ul className="space-y-2">
                    {module.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${i * 100}ms both`,
                        }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </ScrollReveal>
  )
}

