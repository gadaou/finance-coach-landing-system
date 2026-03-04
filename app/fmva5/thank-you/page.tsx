import { NavbarFmva5 } from "@landing/components/navbar-fmva5"
import { FooterFmva5 } from "@landing/components/footer-fmva5"
import { ThankYouContent } from "@/components/thank-you-content"
import { WhatsAppFloatFmva5 } from "@landing/components/whatsapp-float-fmva5"

export default function Fmva5ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarFmva5 />
      <ThankYouContent
        title="شكراً لك!"
        message="سنتواصل معك قريباً."
        backPath="/fmva5"
        backLabel="العودة للصفحة"
        dir="rtl"
      />
      <FooterFmva5 />
      <WhatsAppFloatFmva5 />
    </main>
  )
}
