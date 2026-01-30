import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { InstructorSection } from "@/components/landing/instructor-section"
import { AudienceFilterSection } from "@/components/landing/audience-filter-section"
import { CurriculumSection } from "@/components/landing/curriculum-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { EnrollSection } from "@/components/landing/enroll-section"

export default function LandingPage() {
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

