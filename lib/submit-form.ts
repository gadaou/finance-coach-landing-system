/**
 * Client-side helper: submit enrollment form to our API (tracked per landing).
 * Optional: set FORMSUBMIT_FORWARD=true and form will still be sent to FormSubmit after our API stores it.
 */

import { trackFormSubmission, trackFormSubmissionError } from "@/lib/analytics"

export type SubmitPayload = {
  landing: string
  name: string
  email: string
  phone?: string
  [k: string]: unknown
}

function getPageId(): string | undefined {
  if (typeof window === "undefined") return undefined
  return window.location.pathname || undefined
}

export async function submitToApi(payload: SubmitPayload): Promise<{ ok: boolean; id?: string; error?: string }> {
  const pageId = getPageId()
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      const error = data.error ?? "Submission failed"
      trackFormSubmissionError({ pageId, landing: payload.landing, error })
      return { ok: false, error }
    }
    trackFormSubmission({ pageId, landing: payload.landing })
    return { ok: true, id: data.id }
  } catch (err) {
    const error = err instanceof Error ? err.message : "Submission failed"
    trackFormSubmissionError({ pageId, landing: payload.landing, error })
    return { ok: false, error }
  }
}
