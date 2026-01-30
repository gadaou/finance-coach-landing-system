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

// <CHANGE> Updated metadata for Finance Coach ACCA landing page
export const metadata: Metadata = {
  title: "ACCA Certification Training | Finance Coach Academy",
  description:
    "Become an ACCA-Qualified Professional with Finance Coach - Egypt's trusted ACCA Training Partner, empowering finance professionals since 2017",
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
