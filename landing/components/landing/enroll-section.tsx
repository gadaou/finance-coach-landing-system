"use client"

import { ScrollReveal } from "@landing/components/scroll-reveal"
import { Button } from "@landing/components/ui/button"
import { Input } from "@landing/components/ui/input"
import { Label } from "@landing/components/ui/label"
import { CheckCircle2, ArrowRight, Shield } from "lucide-react"
import { useState } from "react"
import { submitToApi } from "@/lib/submit-form"
import { trackThankYouView } from "@/lib/analytics"

const LANDING_SLUG = "fmva5"

export function EnrollSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const { name, email, phone } = formData
    try {
      const result = await submitToApi({ landing: LANDING_SLUG, name, email, phone })
      if (result.ok) {
        trackThankYouView({ pageId: LANDING_SLUG, landing: LANDING_SLUG })
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "" })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError(result.error ?? "فشل الإرسال. يرجى المحاولة مرة أخرى.")
      }
    } catch {
      setError("حدث خطأ. يرجى المحاولة مرة أخرى.")
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="enroll" className="py-5 sm:py-6 md:py-10 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-5 lg:px-6 relative z-10 min-w-0 max-w-full">
        <div className="max-w-5xl mx-auto min-w-0 w-full">
          <ScrollReveal animation="reveal-line">
            <div className="text-center mb-3 md:mb-5" dir="rtl">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3 py-2 sm:px-3 sm:py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm font-medium text-primary mb-2 md:mb-3 max-w-[95vw] mx-auto">
                <Shield className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                <span>سلاح المحترفين</span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-balance px-1">
                احجز مكانك في الراوند القادمة — <span className="text-primary">الأماكن محدودة</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-1">
                أتقن النمذجة المالية المتقدمة وانتقل من التقارير إلى صنع القرار
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-start min-w-0">
            <ScrollReveal animation="slide-up-subtle">
              <div className="space-y-2 md:space-y-3 min-w-0 overflow-hidden" dir="rtl">
                <div className="p-4 md:p-5 rounded-xl bg-card border-2 border-primary/20 shadow-lg min-w-0">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">ما ستحصل عليه:</h3>
                  <ul className="space-y-2">
                    {[
                      "الانتقال من إعداد التقارير (Reporting) إلى صنع القرار (Decision Making)",
                      "تقنيات متقدمة في Excel لا يعرفها 90% من المحاسبين (Macros, Sensitivity Analysis)",
                      "شهادة دولية تعزز طلبك للترقية أو الانتقال لشركة Multinational",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all min-w-0"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`,
                        }}
                      >
                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base break-words min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 min-w-0 overflow-hidden">
                  <div className="flex items-center gap-2 mb-1.5 flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base">ضمان 7 أيام</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1.5 break-words">
                    إذا لم تكن راضياً عن البرنامج خلال أول 7 أيام، سنعيد لك أموالك بالكامل بدون أي أسئلة.
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground break-words">
                    متاح أونلاين بجودة تفاعلية عالية (Live) أو مسجل بالكامل ليناسب جدول عملك المزدحم.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal animation="scale-in-subtle">
              <div className="relative group min-w-0 w-full overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                <div className="relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border-2 border-primary/20 shadow-xl w-full min-w-0 max-w-full box-border overflow-hidden" dir="rtl">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3">شكراً لك!</h3>
                      <p className="text-muted-foreground">
                        شكراً لك. سنتواصل معك قريباً.
                      </p>
                    </div>
                  ) : (
                    <form 
                      action="https://formsubmit.co/info@financecoach.co" 
                      method="POST"
                      onSubmit={handleSubmit} 
                      className="space-y-3 sm:space-y-4 min-w-0 w-full max-w-full"
                    >
                      <input type="hidden" name="_subject" value="FMVA Enrollment Form Submission" />
                      <input type="hidden" name="_captcha" value="false" />
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="name" className="text-right block text-sm">الاسم الكامل</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                          className="h-12 min-h-[48px] w-full max-w-full min-w-0 focus:ring-2 focus:ring-primary focus:border-primary text-right text-base touch-manipulation box-border"
                          dir="rtl"
                        />
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="email" className="text-right block text-sm">البريد الإلكتروني</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="example@email.com"
                          className="h-12 min-h-[48px] w-full max-w-full min-w-0 focus:ring-2 focus:ring-primary focus:border-primary text-right text-base touch-manipulation box-border"
                          dir="rtl"
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-destructive font-medium text-right">{error}</p>
                      )}
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="phone" className="text-right block text-sm">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+20 XXX XXX XXXX"
                          className="h-12 min-h-[48px] w-full max-w-full min-w-0 focus:ring-2 focus:ring-primary focus:border-primary text-right text-base touch-manipulation box-border"
                          dir="rtl"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full min-h-[48px] h-12 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-sm sm:text-base font-semibold group touch-manipulation"
                      >
                        <span className="flex items-center justify-center gap-2 flex-wrap text-center">
                          احجز مكانك في الراوند القادمة — الأماكن محدودة
                          <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        بالضغط على "سجل الآن"، أنت توافق على شروط الاستخدام وسياسة الخصوصية
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

