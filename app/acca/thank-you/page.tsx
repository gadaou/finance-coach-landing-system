import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThankYouContent } from "@/components/thank-you-content"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function AccaThankYouPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ThankYouContent
        title="Thank You!"
        message="We will contact you soon."
        backPath="/acca"
        backLabel="Back to ACCA"
        dir="ltr"
      />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
