import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"

import { Analytics } from "@vercel/analytics/next"
import { AnalyticsConnector } from "@/components/analytics-connector"
import { AnalyticsPageView } from "@/components/analytics-page-view"
import "./globals.css"

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PG85KF4P');`

const CLARITY_SCRIPT = `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vhqcoclky2");`

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: CLARITY_SCRIPT }} />
      </head>
      <body className={`${notoSansArabic.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PG85KF4P"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <AnalyticsConnector />
        {children}
        <AnalyticsPageView />
        <Analytics />
      </body>
    </html>
  )
}
