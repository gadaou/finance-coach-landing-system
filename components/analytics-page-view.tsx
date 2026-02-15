"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { trackPageView } from "@/lib/analytics"

const LANDING_PATHS = ["/fmva1", "/fmva3", "/fmva4", "/fmva5", "/fmva6", "/acca"]

export function AnalyticsPageView() {
  const pathname = usePathname()
  useEffect(() => {
    if (pathname && LANDING_PATHS.includes(pathname)) {
      const pageId = pathname.slice(1) || pathname
      trackPageView({ pageId })
    }
  }, [pathname])
  return null
}
