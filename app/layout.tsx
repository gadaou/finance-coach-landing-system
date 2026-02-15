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

// Corporate Climber landing - للموظفين: من المحاسبة الروتينية إلى مقعد اتخاذ القرار
export const metadata: Metadata = {
  title: "من المحاسبة إلى مقعد اتخاذ القرار | Finance Coach Academy",
  description:
    "أتقن النمذجة المالية المتقدمة (Financial Modeling) وحوّل البيانات إلى استراتيجيات تقود شركتك وراتبك للأمام. انضم لنخبة بنك مصر، بايونيرز، واتصالات.",
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
    <html lang="ar" dir="rtl">
      <body className={`${notoSansArabic.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
