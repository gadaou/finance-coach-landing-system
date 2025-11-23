"use client"

import type React from "react"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2 } from "lucide-react"

export function EnrollFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    learningMode: "online",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="enroll" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
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
                  <ul className="space-y-4">
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

                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Duration:</strong> 2-3 years (depends on exemptions and pace)
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Format:</strong> Online and On-Campus options available
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Support:</strong> Continuous guidance throughout your journey
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-right">
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your information. Our team will contact you within 24 hours to schedule your free
                      consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="h-12"
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
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+20 XXX XXX XXXX"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Learning Mode *</Label>
                      <RadioGroup
                        value={formData.learningMode}
                        onValueChange={(value) => handleChange("learningMode", value)}
                      >
                        <div className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                          <RadioGroupItem value="online" id="online" />
                          <Label htmlFor="online" className="flex-1 cursor-pointer">
                            Online Classes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                          <RadioGroupItem value="on-campus" id="on-campus" />
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

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from Finance Coach Academy
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
