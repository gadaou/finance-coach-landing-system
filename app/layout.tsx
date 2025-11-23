import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const parkinsans = localFont({
  src: [
    {
      path: "../public/fonts/Parkinsans/static/Parkinsans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Parkinsans/static/Parkinsans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Parkinsans/static/Parkinsans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Parkinsans/static/Parkinsans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Parkinsans/static/Parkinsans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Parkinsans/static/Parkinsans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-parkinsans",
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
      <body className={`${parkinsans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
