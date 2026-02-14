import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { InstructorSection } from "@/components/landing/instructor-section"
import { AudienceFilterSection } from "@/components/landing/audience-filter-section"
import { CurriculumSection } from "@/components/landing/curriculum-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { QualityAssuranceSection } from "@/components/landing/quality-assurance-section"
import { LanguageBarrierSection } from "@/components/landing/language-barrier-section"
import { SmartInvestmentSection } from "@/components/landing/smart-investment-section"
import { EnrollSection } from "@/components/landing/enroll-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileEnrollButton } from "@/components/mobile-enroll-button"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InstructorSection />
      <AudienceFilterSection />
      <CurriculumSection />
      <SocialProofSection />
      <QualityAssuranceSection />
      <LanguageBarrierSection />
      <SmartInvestmentSection />
      <EnrollSection />
      <Footer />
      <WhatsAppButton />
      <MobileEnrollButton />
    </main>
  )
}
