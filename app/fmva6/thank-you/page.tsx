import { NavbarFmva6 } from "@landing/components/navbar-fmva6"
import { FooterFmva6 } from "@landing/components/footer-fmva6"
import { ThankYouContent } from "@/components/thank-you-content"
import { WhatsAppFloatFmva6 } from "@landing/components/whatsapp-float-fmva6"

export default function Fmva6ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarFmva6 />
      <ThankYouContent
        title="شكراً لك!"
        message="سنتواصل معك قريباً."
        backPath="/fmva6"
        backLabel="العودة للصفحة"
        dir="rtl"
      />
      <FooterFmva6 />
      <WhatsAppFloatFmva6 />
    </main>
  )
}
