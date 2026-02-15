import { NavbarFmva5 } from "@landing/components/navbar-fmva5"
import { FooterFmva5 } from "@landing/components/footer-fmva5"
import { WhatsAppFloatFmva5 } from "@landing/components/whatsapp-float-fmva5"
import { HeroSection } from "@landing/components/landing/hero-section"
import { VslSection } from "@landing/components/landing/vsl-section"
import { Fmva5BenefitsSection } from "@landing/components/landing/fmva5-benefits-section"
import { Fmva5ChartsSection } from "@landing/components/landing/fmva5-charts-section"
import { EnrollSection } from "@landing/components/landing/enroll-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarFmva5 />
      <HeroSection />
      <VslSection />
      <Fmva5BenefitsSection />
      <Fmva5ChartsSection />
      <EnrollSection />
      <FooterFmva5 />
      <WhatsAppFloatFmva5 />
    </main>
  )
}
