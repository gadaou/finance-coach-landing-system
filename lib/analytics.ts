/**
 * Analytics event layer. Events are forwarded to global callbacks so you can
 * inject your tracking script (e.g. GTM) later and assign to window.__financeCoachAnalytics
 * or the per-event handlers. IDs to be injected later.
 *
 * Events: page view, form submission, form submission error, thank you page view.
 */

export type PageViewParams = { pageId?: string }
export type FormSubmissionParams = { pageId?: string; landing?: string }
export type FormSubmissionErrorParams = { pageId?: string; landing?: string; error?: string }
export type ThankYouViewParams = { pageId?: string; landing?: string }

declare global {
  interface Window {
    __trackPageView?: (params: PageViewParams) => void
    __trackFormSubmission?: (params: FormSubmissionParams) => void
    __trackFormSubmissionError?: (params: FormSubmissionErrorParams) => void
    __trackThankYouView?: (params: ThankYouViewParams) => void
  }
}

export function trackPageView(params?: PageViewParams): void {
  if (typeof window !== "undefined") {
    window.__trackPageView?.(params ?? {})
  }
}

export function trackFormSubmission(params?: FormSubmissionParams): void {
  if (typeof window !== "undefined") {
    window.__trackFormSubmission?.(params ?? {})
  }
}

export function trackFormSubmissionError(params?: FormSubmissionErrorParams): void {
  if (typeof window !== "undefined") {
    window.__trackFormSubmissionError?.(params ?? {})
  }
}

export function trackThankYouView(params?: ThankYouViewParams): void {
  if (typeof window !== "undefined") {
    window.__trackThankYouView?.(params ?? {})
  }
}
