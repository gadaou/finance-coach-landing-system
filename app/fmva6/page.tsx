import { NavbarFmva6 } from "@landing/components/navbar-fmva6"
import { FooterFmva6 } from "@landing/components/footer-fmva6"
import { WhatsAppFloatFmva6 } from "@landing/components/whatsapp-float-fmva6"
import { Fmva6HeroSection } from "@landing/components/landing/fmva6-hero-section"
import { Fmva6TrustGifsSection } from "@landing/components/landing/fmva6-trust-gifs-section"
import { Fmva6VslSection } from "@landing/components/landing/fmva6-vsl-section"
import { Fmva6BenefitsSection } from "@landing/components/landing/fmva6-benefits-section"
import { Fmva6ObjectionSection } from "@landing/components/landing/fmva6-objection-section"
import { Fmva6EnrollSection } from "@landing/components/landing/fmva6-enroll-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarFmva6 />
      <Fmva6HeroSection />
      <Fmva6TrustGifsSection />
      <Fmva6VslSection />
      <Fmva6BenefitsSection />
      <Fmva6ObjectionSection />
      <Fmva6EnrollSection />
      <FooterFmva6 />
      <WhatsAppFloatFmva6 />
    </main>
  )
}
