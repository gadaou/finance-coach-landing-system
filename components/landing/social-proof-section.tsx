"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Quote, Building2, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
export function SocialProofSection() {
  const companies = [
    { name: "CIB", logo: "/banks/CIB.png" },
    { name: "HSBC", logo: "/banks/hsbc.png" },
    { name: "Deloitte", logo: "/banks/Deloitte.png" },
    { name: "KPMG", logo: "/banks/KPMG.png" },
  ]

  return (
    <section className="pt-8 md:pt-24 lg:pt-14 pb-8 md:pb-24 lg:pb-14 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-visible">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Company Logos Section */}
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 lg:mb-10" dir="rtl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
              <Building2 className="h-4 w-4" />
              خريجونا يعملون هنا
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              شركات <span className="text-primary">عالمية</span> تثق بنا
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              انضم إلى مئات الخريجين الذين يعملون في أكبر الشركات المالية
            </p>
          </div>
        </ScrollReveal>

        {/* Company Logos - Mobile Autoscroll / Desktop Grid */}
        <div className="max-w-5xl mx-auto mb-4 md:mb-20 lg:mb-12">
          {/* Mobile: Horizontal Autoscrolling */}
          <div className="md:hidden overflow-hidden">
            <div className="flex animate-scroll gap-6">
              {/* First set of logos */}
              {companies.map((company, index) => (
                <div key={`mobile-1-${index}`} className="flex-shrink-0 w-40">
                  <CompanyLogo company={company} index={index} isMobile={true} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div key={`mobile-2-${index}`} className="flex-shrink-0 w-40">
                  <CompanyLogo company={company} index={index} isMobile={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <CompanyLogo key={`desktop-${index}`} company={company} index={index} isMobile={false} />
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <ScrollReveal animation="fade-in-up">
          <div className="max-w-4xl mx-auto mt-4 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-4 md:p-12 rounded-xl md:rounded-2xl bg-card border-2 border-primary/20 shadow-xl" dir="rtl">
                <Quote className="h-8 w-8 md:h-12 md:w-12 text-primary/20 mb-3 md:mb-6" />
                <blockquote className="text-sm md:text-2xl font-medium leading-snug md:leading-relaxed mb-4 md:mb-6 text-foreground">
                  "كنت خايف من الانترفيو التقني، لكن بعد الكورس جاوبت على كل الأسئلة بثقة واشتغلت في CIB."
                </blockquote>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-lg">خريج FMVA - موظف في CIB - Investment Banking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="fade-in-up">
          <div className="mt-8 md:mt-16 text-center">
            <div className="inline-block p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 max-w-full" dir="rtl">
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold mb-3 sm:mb-4">
                هل أنت جاهز لبدء رحلتك؟
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6">
                انضم إلى مئات الخريجين الذين غيروا مسارهم المهني
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("enroll")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="min-h-[44px] px-5 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                سجل الآن - ضمان 7 أيام
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CompanyLogo({
  company,
  index,
  isMobile,
}: {
  company: { name: string; logo: string }
  index: number
  isMobile: boolean
}) {
  const [imageError, setImageError] = useState(false)
  
  // Increase size for HSBC and Deloitte
  const isLargeLogo = company.name === "HSBC" || company.name === "Deloitte"
  const imageWidth = isLargeLogo ? 240 : 140
  const imageHeight = isLargeLogo ? 120 : 70

  const logoContent = (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex items-center justify-center h-28 md:h-32">
        {imageError ? (
          <div className="text-center">
            <Building2 className="h-12 w-12 text-primary/30 mx-auto mb-2" />
            <div className="text-sm font-semibold text-muted-foreground">{company.name}</div>
          </div>
        ) : (
          <Image
            src={company.logo}
            alt={company.name}
            width={imageWidth}
            height={imageHeight}
            className="object-contain opacity-100"
            onError={() => setImageError(true)}
          />
        )}
      </div>
    </div>
  )

  if (isMobile) {
    return logoContent
  }

  return (
    <ScrollReveal animation="scale-in" delay={index * 100}>
      {logoContent}
    </ScrollReveal>
  )
}

