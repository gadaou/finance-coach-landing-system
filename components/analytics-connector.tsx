"use client"

import { useEffect } from "react"
import { getApiOrigin } from "@/lib/api"

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; callMethod?: boolean }
    clarity?: (...args: unknown[]) => void
  }
}

function sendToServer(payload: { type: string; pageId?: string; landing?: string; error?: string }) {
  try {
    fetch(`${getApiOrigin()}/api/analytics/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // ignore
  }
}

export function AnalyticsConnector() {
  useEffect(() => {
    if (typeof window === "undefined") return

    if (GTM_ID && !window.dataLayer) {
      window.dataLayer = window.dataLayer || []
    }

    const pushDataLayer = (event: string, params: Record<string, unknown>) => {
      if (window.dataLayer) {
        window.dataLayer.push({ event, ...params })
      }
    }

    window.__trackPageView = (params) => {
      const { pageId } = params ?? {}
      pushDataLayer("finance_coach_page_view", { pageId })
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "FinanceCoachPageView", { page_id: pageId })
      }
      if (typeof window.clarity === "function") {
        window.clarity("set", "finance_coach_page_view", pageId ?? "")
      }
      sendToServer({ type: "page_view", pageId })
    }

    window.__trackFormSubmission = (params) => {
      const { pageId, landing } = params ?? {}
      pushDataLayer("finance_coach_form_submission", { pageId, landing })
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "FinanceCoachFormSubmission", { page_id: pageId, landing })
      }
      if (typeof window.clarity === "function") {
        window.clarity("set", "finance_coach_form_submission", landing ?? "")
      }
      sendToServer({ type: "form_submission", pageId, landing })
    }

    window.__trackFormSubmissionError = (params) => {
      const { pageId, landing, error } = params ?? {}
      pushDataLayer("finance_coach_form_submission_error", { pageId, landing, error })
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "FinanceCoachFormSubmissionError", { page_id: pageId, landing, error })
      }
      if (typeof window.clarity === "function") {
        window.clarity("set", "finance_coach_form_submission_error", error ?? "")
      }
      sendToServer({ type: "form_submission_error", pageId, landing, error })
    }

    window.__trackThankYouView = (params) => {
      const { pageId, landing } = params ?? {}
      pushDataLayer("finance_coach_thank_you_view", { pageId, landing })
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "FinanceCoachThankYouView", { page_id: pageId, landing })
      }
      if (typeof window.clarity === "function") {
        window.clarity("set", "finance_coach_thank_you_view", landing ?? "")
      }
      sendToServer({ type: "thank_you_view", pageId, landing })
    }

    if (GTM_ID) {
      const script = document.createElement("script")
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      document.head.appendChild(script)
    }

    if (META_PIXEL_ID) {
      const f: Window["fbq"] = function (this: Window["fbq"], ...args: unknown[]) {
        (f.callMethod ? f : window.fbq!).call(window.fbq!, ...args)
      }
      window.fbq = f
      if (!window.fbq.queue) window.fbq.queue = []
      const script = document.createElement("script")
      script.async = true
      script.src = "https://connect.facebook.net/en_US/fbevents.js"
      document.head.appendChild(script)
      window.fbq("init", META_PIXEL_ID)
      window.fbq("track", "PageView")
    }

    if (CLARITY_ID) {
      const script = document.createElement("script")
      script.async = true
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `
      document.head.appendChild(script)
    }
  }, [])

  if (GTM_ID) {
    return (
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height={0}
          width={0}
          style={{ display: "none", visibility: "hidden" }}
          title="GTM"
        />
      </noscript>
    )
  }

  return null
}
