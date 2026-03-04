import { Navbar } from "@fmva1/components/navbar"
import { Footer } from "@fmva1/components/footer"
import { ThankYouContent } from "@/components/thank-you-content"
import { WhatsAppButton } from "@fmva1/components/whatsapp-button"
import { MobileEnrollButton } from "@fmva1/components/mobile-enroll-button"

export default function Fmva1ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ThankYouContent
        title="شكراً لك!"
        message="سنتواصل معك قريباً."
        backPath="/fmva1"
        backLabel="العودة للصفحة"
        dir="rtl"
      />
      <Footer />
      <WhatsAppButton />
      <MobileEnrollButton />
    </main>
  )
}
