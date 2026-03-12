"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ScrollReveal } from "./scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2 } from "lucide-react"
import { CountryCodeSelect } from "@/components/country-code-select"
import { submitToApi } from "@/lib/submit-form"
import { trackThankYouView } from "@/lib/analytics"
import { validatePhone } from "@/lib/phone-validation"

const LANDING_SLUG = "acca"

export function EnrollFormSection() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [phoneTouched, setPhoneTouched] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+20",
    learningMode: "online",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const { name, email, phone, countryCode, learningMode } = formData

    // Validate phone before submission
    const phoneValidation = validatePhone(countryCode, phone)
    if (!phoneValidation.valid) {
      setPhoneError(phoneValidation.error || "Invalid phone number")
      setPhoneTouched(true)
      return
    }

    try {
      const result = await submitToApi({ landing: LANDING_SLUG, name, email, phone: `${countryCode} ${phone}`, learningMode })
      if (result.ok) {
        trackThankYouView({ pageId: LANDING_SLUG, landing: LANDING_SLUG })
        setFormData({ name: "", email: "", phone: "", countryCode: "+20", learningMode: "online" })
        setPhoneTouched(false)
        setPhoneError("")
        router.push(`/${LANDING_SLUG}/thank-you`)
      } else {
        setError(result.error ?? "Submission failed. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value }
      // Validate phone when phone or countryCode changes
      if ((field === "phone" || field === "countryCode") && phoneTouched) {
        const phoneVal = field === "phone" ? value : prev.phone
        const codeVal = field === "countryCode" ? value : prev.countryCode
        const validation = validatePhone(codeVal, phoneVal)
        setPhoneError(validation.valid ? "" : (validation.error || ""))
      }
      return newData
    })
  }

  const handlePhoneBlur = () => {
    setPhoneTouched(true)
    const validation = validatePhone(formData.countryCode, formData.phone)
    setPhoneError(validation.valid ? "" : (validation.error || ""))
  }

  return (
    <section id="enroll" className="pt-0 pb-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Start Your ACCA <span className="text-primary">Journey Today</span>
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                Take the first step toward becoming a globally recognized accounting professional
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal animation="slide-in-left">
              <div className="space-y-8">
                <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                  <ul className="space-y-8">
                    {[
                      "Free consultation with ACCA experts",
                      "Detailed program roadmap",
                      "Flexible study schedules",
                      "Access to learning resources",
                      "Career guidance and support",
                      "Exam preparation strategies",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-right">
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="h-12 focus:ring-2 focus:ring-primary focus:border-primary cursor-text"
                        autoComplete="name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="h-12 focus:ring-2 focus:ring-primary focus:border-primary cursor-text"
                        autoComplete="email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <div className="flex gap-2">
                        <CountryCodeSelect
                          value={formData.countryCode}
                          onChange={(code) => handleChange("countryCode", code)}
                        />
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          onBlur={handlePhoneBlur}
                          placeholder="XXX XXX XXXX"
                          className={`h-12 flex-1 focus:ring-2 focus:ring-primary focus:border-primary cursor-text ${phoneTouched && phoneError ? "border-destructive" : ""}`}
                          autoComplete="tel"
                        />
                      </div>
                      {phoneTouched && phoneError && (
                        <p className="text-sm text-destructive">{phoneError}</p>
                      )}
                    </div>

                    {error && (
                      <p className="text-sm text-destructive font-medium">{error}</p>
                    )}
                    <div className="space-y-3">
                      <Label>Preferred Learning Mode *</Label>
                      <RadioGroup
                        value={formData.learningMode}
                        onValueChange={(value) => handleChange("learningMode", value)}
                      >
                        <div className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-primary">
                          <RadioGroupItem value="online" id="online" className="cursor-pointer" />
                          <Label htmlFor="online" className="flex-1 cursor-pointer">
                            Online Classes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-primary">
                          <RadioGroupItem value="on-campus" id="on-campus" className="cursor-pointer" />
                          <Label htmlFor="on-campus" className="flex-1 cursor-pointer">
                            On-Campus Classes
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                    >
                      Book Your Free Consultation
                    </Button>
                  </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
