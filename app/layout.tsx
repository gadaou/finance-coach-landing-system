import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansArabic = localFont({
  src: [
    {
      path: "../public/font/Noto_Sans_Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans-arabic",
  display: "swap",
})

// FMVA Certification Hunter landing page
export const metadata: Metadata = {
  title: "FMVA التطبيقي | Finance Coach Academy",
  description:
    "برنامج FMVA التطبيقي: حول معرفتك النظرية إلى خبرة عملية في النمذجة والتقييم المالي في 3 شهور. مدربون Double Certified - CFA + FMVA.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo2.png",
        type: "image/png",
      },
    ],
    apple: "/logo2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansArabic.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
