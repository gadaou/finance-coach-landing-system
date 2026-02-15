import { Navbar } from "@fmva4/components/navbar"
import { Footer } from "@fmva4/components/footer"
import { HeroSection } from "@fmva4/components/landing/hero-section"
import { SocialProofSection } from "@fmva4/components/landing/social-proof-section"
import { VslSection } from "@fmva4/components/landing/vsl-section"
import { BenefitsSection } from "@fmva4/components/landing/benefits-section"
import { BeforeAfterChartSection, ThreeMonthPathSection } from "@fmva4/components/landing/luxury-charts-section"
import { RiskReversalSection } from "@fmva4/components/landing/risk-reversal-section"
import { EnrollSection } from "@fmva4/components/landing/enroll-section"
import { WhatsAppButton } from "@fmva4/components/whatsapp-button"
import { MobileEnrollButton } from "@fmva4/components/mobile-enroll-button"

export default function Page() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <VslSection />
      <BenefitsSection />
      <BeforeAfterChartSection />
      <ThreeMonthPathSection />
      <RiskReversalSection />
      <EnrollSection />
      <Footer />
      <WhatsAppButton />
      <MobileEnrollButton />
    </main>
  )
}
