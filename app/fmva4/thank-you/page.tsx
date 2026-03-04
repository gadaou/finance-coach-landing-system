import { Navbar } from "@fmva4/components/navbar"
import { Footer } from "@fmva4/components/footer"
import { ThankYouContent } from "@/components/thank-you-content"
import { WhatsAppButton } from "@fmva4/components/whatsapp-button"
import { MobileEnrollButton } from "@fmva4/components/mobile-enroll-button"

export default function Fmva4ThankYouPage() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      <ThankYouContent
        title="شكراً لك!"
        message="سنتواصل معك قريباً."
        backPath="/fmva4"
        backLabel="العودة للصفحة"
        dir="rtl"
      />
      <Footer />
      <WhatsAppButton />
      <MobileEnrollButton />
    </main>
  )
}
