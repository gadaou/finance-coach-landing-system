import { Navbar } from "@landing/components/navbar"
import { Footer } from "@landing/components/footer"
import { HeroSection } from "@landing/components/landing/hero-section"
import { InstructorSection } from "@landing/components/landing/instructor-section"
import { AudienceFilterSection } from "@landing/components/landing/audience-filter-section"
import { CurriculumSection } from "@landing/components/landing/curriculum-section"
import { SocialProofSection } from "@landing/components/landing/social-proof-section"
import { EnrollSection } from "@landing/components/landing/enroll-section"

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
    </main>
  )
}
