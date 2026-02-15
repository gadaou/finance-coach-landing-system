import { Navbar } from "@fmva3/components/navbar"
import { Footer } from "@fmva3/components/footer"
import { HeroSection } from "@fmva3/components/landing/hero-section"
import { InstructorSection } from "@fmva3/components/landing/instructor-section"
import { AudienceFilterSection } from "@fmva3/components/landing/audience-filter-section"
import { CurriculumSection } from "@fmva3/components/landing/curriculum-section"
import { SocialProofSection } from "@fmva3/components/landing/social-proof-section"
import { QualityAssuranceSection } from "@fmva3/components/landing/quality-assurance-section"
import { LanguageBarrierSection } from "@fmva3/components/landing/language-barrier-section"
import { SmartInvestmentSection } from "@fmva3/components/landing/smart-investment-section"
import { EnrollSection } from "@fmva3/components/landing/enroll-section"
import { WhatsAppButton } from "@fmva3/components/whatsapp-button"
import { MobileEnrollButton } from "@fmva3/components/mobile-enroll-button"

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
