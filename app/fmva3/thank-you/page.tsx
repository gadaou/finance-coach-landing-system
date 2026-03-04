import { Navbar } from "@fmva3/components/navbar"
import { Footer } from "@fmva3/components/footer"
import { ThankYouContent } from "@/components/thank-you-content"
import { WhatsAppButton } from "@fmva3/components/whatsapp-button"
import { MobileEnrollButton } from "@fmva3/components/mobile-enroll-button"

export default function Fmva3ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ThankYouContent
        title="شكراً لك!"
        message="سنتواصل معك قريباً."
        backPath="/fmva3"
        backLabel="العودة للصفحة"
        dir="rtl"
      />
      <Footer />
      <WhatsAppButton />
      <MobileEnrollButton />
    </main>
  )
}
