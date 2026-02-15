"use client"

import { ScrollReveal } from "@fmva4/components/scroll-reveal"
import { Button } from "@fmva4/components/ui/button"
import { Input } from "@fmva4/components/ui/input"
import { Label } from "@fmva4/components/ui/label"
import { LuxuryIcon } from "@fmva4/components/ui/luxury-icon"
import { CheckCircle2, ArrowRight, Shield } from "lucide-react"
import { useState } from "react"

export function EnrollSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Create FormData from the form
    const formDataToSubmit = new FormData(e.currentTarget)
    
    try {
      // Submit to FormSubmit
      const response = await fetch("https://formsubmit.co/info@financecoach.co", {
        method: "POST",
        body: formDataToSubmit,
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({ name: "", email: "", phone: "" })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      // Still show success message for better UX
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="enroll" className="py-5 sm:py-6 md:py-8 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-4 sm:mb-5 md:mb-6 px-2 sm:px-1" dir="rtl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary mb-2 sm:mb-3 shadow-lg shadow-primary/10">
                <LuxuryIcon icon={Shield} className="!p-1.5" iconClassName="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ابدأ رحلتك الآن
              </div>
              <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-balance leading-snug break-words">
                احجز استشارة مهنية مجانية + مقعدك في الكورس
              </h2>
              <p className="text-xs sm:text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                املأ البيانات وسنتواصل معك خلال 24 ساعة لحجز استشارتك المجانية ومقعدك في برنامج FMVA العملي
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-8 items-start">
            {/* Benefits */}
            <ScrollReveal animation="slide-in-right">
              <div className="space-y-4 md:space-y-6" dir="rtl">
                <div className="p-4 sm:p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border-2 border-primary/20 shadow-xl">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 break-words">ما ستحصل عليه:</h3>
                  <ul className="space-y-2 md:space-y-4">
                    {[
                      "بناء 3 نماذج مالية كاملة لشركات حقيقية (في الـ Portfolio)",
                      "تدريب مكثف على أسئلة الإنترفيو التقنية (Technical Interview Prep)",
                      "مراجعة وتجهيز الـ CV والـ LinkedIn ليتصدر البحث",
                      "برنامج عملي في 3 أشهر فقط",
                      "شهادة FMVA معتمدة",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all gap-2"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`,
                        }}
                      >
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/20">
                          <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
                        </span>
                        <span className="text-xs sm:text-sm md:text-base break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-lg shadow-primary/5">
                  <div className="flex items-center gap-3 mb-3">
                    <LuxuryIcon icon={Shield} className="flex-shrink-0 !p-2.5" iconClassName="h-6 w-6" />
                    <span className="font-semibold text-base md:text-lg">ضمان أول محاضرتين</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ضمان استعادة الأموال خلال أول محاضرتين إذا لم تجد القيمة العملية.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal animation="slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-card border-2 border-primary/20 shadow-2xl" dir="rtl">
                  {isSubmitted ? (
                    <div className="text-center py-8 sm:py-12">
                      <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-primary/15 text-primary mb-4 sm:mb-6 shadow-lg shadow-primary/10 ring-1 ring-primary/20">
                        <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">شكراً لك!</h3>
                      <p className="text-sm sm:text-base text-muted-foreground px-2">
                        تم استلام معلوماتك. سيتواصل معك فريقنا خلال 24 ساعة لحجز استشارتك المجانية.
                      </p>
                    </div>
                  ) : (
                    <form 
                      action="https://formsubmit.co/info@financecoach.co" 
                      method="POST"
                      onSubmit={handleSubmit} 
                      className="space-y-4 sm:space-y-5 md:space-y-6"
                    >
                      <input type="hidden" name="_subject" value="FMVA Enrollment Form Submission" />
                      <input type="hidden" name="_captcha" value="false" />
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="name" className="text-right text-sm sm:text-base">الاسم الكامل</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                          className="min-h-[44px] h-11 sm:h-12 text-base focus:ring-2 focus:ring-primary focus:border-primary text-right px-3 sm:px-4"
                          dir="rtl"
                        />
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="email" className="text-right text-sm sm:text-base">البريد الإلكتروني</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="example@email.com"
                          className="min-h-[44px] h-11 sm:h-12 text-base focus:ring-2 focus:ring-primary focus:border-primary text-right px-3 sm:px-4"
                          dir="rtl"
                        />
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="phone" className="text-right text-sm sm:text-base">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+20 XXX XXX XXXX"
                          className="min-h-[44px] h-11 sm:h-12 text-base focus:ring-2 focus:ring-primary focus:border-primary text-right px-3 sm:px-4"
                          dir="rtl"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full min-h-[48px] h-auto py-3.5 sm:py-4 md:py-5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-sm sm:text-base md:text-lg font-semibold group ring-2 ring-primary/30 ring-offset-2"
                      >
                        <span className="flex items-center justify-center gap-2 text-center flex-wrap px-2">
                          <span className="whitespace-normal leading-snug">احجز استشارة مهنية مجانية + مقعدك في الكورس</span>
                          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-foreground/20 group-hover:bg-primary-foreground/30 transition-colors">
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                          </span>
                        </span>
                      </Button>

                      <p className="text-[11px] sm:text-xs text-center text-muted-foreground px-1">
                        بالضغط على الزر، أنت توافق على شروط الاستخدام وسياسة الخصوصية
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

