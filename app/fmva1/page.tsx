import { Navbar } from "@fmva1/components/navbar"
import { Footer } from "@fmva1/components/footer"
import { HeroSection } from "@fmva1/components/landing/hero-section"
import { InstructorSection } from "@fmva1/components/landing/instructor-section"
import { AudienceFilterSection } from "@fmva1/components/landing/audience-filter-section"
import { CurriculumSection } from "@fmva1/components/landing/curriculum-section"
import { SocialProofSection } from "@fmva1/components/landing/social-proof-section"
import { EnrollSection } from "@fmva1/components/landing/enroll-section"
import { WhatsAppButton } from "@fmva1/components/whatsapp-button"
import { MobileEnrollButton } from "@fmva1/components/mobile-enroll-button"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InstructorSection />
      <AudienceFilterSection />
      <CurriculumSection />
      <SocialProofSection />
      <EnrollSection />
      <Footer />
      <WhatsAppButton />
      <MobileEnrollButton />
    </main>
  )
}
