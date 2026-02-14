"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { CheckCircle2, XCircle, GraduationCap, Briefcase, AlertTriangle } from "lucide-react"

export function AudienceFilterSection() {
  return (
    <section className="pt-8 md:pt-24 pb-8 md:pb-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-visible">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 pt-0 md:pt-0" dir="rtl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              <span className="text-primary">لمن</span> هذا الكورس؟
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Target Audience */}
          <ScrollReveal animation="slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-card border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300" dir="rtl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">هذا الكورس مناسب لك إذا:</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    {
                      icon: GraduationCap,
                      text: "خريجو تجارة (عربي/إنجليزي) دفعات 2020-2025 الطموحين للعمل في الـ Investment Banking",
                    },
                    {
                      icon: Briefcase,
                      text: "المحاسبون الراغبون في الانتقال لمجال التحليل المالي (Finance Shift)",
                    },
                  ].map((item, index) => (
                    <AudienceItem key={index} {...item} delay={index * 100} />
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Non-Target Audience */}
          <ScrollReveal animation="slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-card border-2 border-orange-500/20 shadow-xl hover:shadow-2xl transition-all duration-300" dir="rtl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">تنبيه مهم:</h3>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-base leading-relaxed">
                      هذا الكورس غير مناسب لطلاب السنة الأولى والثانية. نحن نركز على{" "}
                      <span className="font-semibold text-orange-600">التوظيف الفوري</span>.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground">
                    إذا كنت طالباً في السنة الأولى أو الثانية، ننصحك بالتركيز على الأساسيات أولاً ثم العودة لنا عند الاستعداد.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function AudienceItem({
  icon: Icon,
  text,
  delay,
}: {
  icon: any
  text: string
  delay: number
}) {
  return (
    <li
      className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group/item"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all flex-shrink-0 mt-0.5">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-base leading-relaxed flex-1">{text}</p>
    </li>
  )
}

