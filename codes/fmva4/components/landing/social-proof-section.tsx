"use client"

import { ScrollReveal } from "@fmva4/components/scroll-reveal"
import { LuxuryIcon } from "@fmva4/components/ui/luxury-icon"
import { Building2 } from "lucide-react"
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
    <section className="py-5 sm:py-6 md:py-8 bg-background relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <ScrollReveal animation="fade-in-up">
          <p className="text-center text-sm sm:text-base md:text-lg font-medium text-foreground mb-3 sm:mb-4 md:mb-5 px-2" dir="rtl">
            انضم لأكثر من <span className="text-primary font-bold">500 خريج</span> يعملون الآن في:
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="md:hidden overflow-hidden -mx-2">
            <div className="flex animate-scroll gap-4 sm:gap-6 min-h-[100px]">
              {companies.map((company, index) => (
                <div key={`m1-${index}`} className="flex-shrink-0 w-36">
                  <CompanyLogo company={company} isMobile />
                </div>
              ))}
              {companies.map((company, index) => (
                <div key={`m2-${index}`} className="flex-shrink-0 w-36">
                  <CompanyLogo company={company} isMobile />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-4 gap-6 md:gap-8">
            {companies.map((company, index) => (
              <ScrollReveal key={company.name} animation="scale-in" delay={index * 80}>
                <CompanyLogo company={company} isMobile={false} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CompanyLogo({
  company,
  isMobile,
}: {
  company: { name: string; logo: string }
  isMobile: boolean
}) {
  const [imageError, setImageError] = useState(false)
  const isLargeLogo = company.name === "HSBC" || company.name === "Deloitte"
  const imageWidth = isLargeLogo ? 200 : 120
  const imageHeight = isLargeLogo ? 100 : 60

  return (
    <div className="flex items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-20 sm:h-24 md:h-28 min-h-[80px]">
      {imageError ? (
        <div className="flex flex-col items-center gap-2">
          <LuxuryIcon icon={Building2} className="!p-2" iconClassName="h-8 w-8" />
          <span className="text-sm font-medium text-muted-foreground">{company.name}</span>
        </div>
      ) : (
        <Image
          src={company.logo}
          alt={company.name}
          width={imageWidth}
          height={imageHeight}
          className="object-contain max-h-16 md:max-h-20 w-auto"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}
