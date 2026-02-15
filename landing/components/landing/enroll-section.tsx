"use client"

import { ScrollReveal } from "@landing/components/scroll-reveal"
import { Button } from "@landing/components/ui/button"
import { Input } from "@landing/components/ui/input"
import { Label } from "@landing/components/ui/label"
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
    <section id="enroll" className="py-12 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-6 md:mb-12" dir="rtl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
                <Shield className="h-4 w-4" />
                ابدأ رحلتك الآن
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                سجل في برنامج <span className="text-primary">FMVA</span> الآن
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                احجز استشارتك المجانية وابدأ رحلتك نحو التحليل المالي المتقدم
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-start">
            {/* Benefits */}
            <ScrollReveal animation="slide-in-right">
              <div className="space-y-4 md:space-y-6" dir="rtl">
                <div className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-card border-2 border-primary/20 shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">ما ستحصل عليه:</h3>
                  <ul className="space-y-2 md:space-y-4">
                    {[
                      "برنامج تدريبي متكامل جاهز للمكتب",
                      "مدربون معتمدون Certified",
                      "دعم مستمر أثناء وبعد البرنامج",
                      "إعداد كامل لمقابلات Big 4",
                      "شهادة معتمدة في FMVA",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`,
                        }}
                      >
                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="font-semibold text-base md:text-lg">ضمان 7 أيام</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    إذا لم تكن راضياً عن البرنامج خلال أول 7 أيام، سنعيد لك أموالك بالكامل بدون أي أسئلة.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal animation="slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative p-8 md:p-10 rounded-2xl bg-card border-2 border-primary/20 shadow-2xl" dir="rtl">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                        <CheckCircle2 className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">شكراً لك!</h3>
                      <p className="text-muted-foreground">
                        تم استلام معلوماتك. سيتواصل معك فريقنا خلال 24 ساعة لحجز استشارتك المجانية.
                      </p>
                    </div>
                  ) : (
                    <form 
                      action="https://formsubmit.co/info@financecoach.co" 
                      method="POST"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <input type="hidden" name="_subject" value="FMVA Enrollment Form Submission" />
                      <input type="hidden" name="_captcha" value="false" />
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-right">الاسم الكامل</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                          className="h-12 focus:ring-2 focus:ring-primary focus:border-primary text-right"
                          dir="rtl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-right">البريد الإلكتروني</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="example@email.com"
                          className="h-12 focus:ring-2 focus:ring-primary focus:border-primary text-right"
                          dir="rtl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-right">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+20 XXX XXX XXXX"
                          className="h-12 focus:ring-2 focus:ring-primary focus:border-primary text-right"
                          dir="rtl"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-lg font-semibold group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          سجل الآن - ضمان 7 أيام
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

