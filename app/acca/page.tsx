import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhyAccaSection } from "@/components/why-acca-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ProgramStructureSection } from "@/components/program-structure-section"
import { CareerGrowthSection } from "@/components/career-growth-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EnrollFormSection } from "@/components/enroll-form-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function AccaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyAccaSection />
      <WhyChooseUsSection />
      <ProgramStructureSection />
      <CareerGrowthSection />
      <TestimonialsSection />
      <EnrollFormSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
