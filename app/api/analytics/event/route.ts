import { NextRequest, NextResponse } from "next/server"
import { addAnalyticsEvent } from "@/lib/backend/analytics"

const VALID_TYPES = ["page_view", "form_submission", "form_submission_error", "thank_you_view"]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const type = typeof body.type === "string" ? body.type.trim() : ""
    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 })
    }
    const pageId = typeof body.pageId === "string" ? body.pageId.trim() : undefined
    const landing = typeof body.landing === "string" ? body.landing.trim() : undefined
    const error = typeof body.error === "string" ? body.error.trim() : undefined
    await addAnalyticsEvent({ type, pageId, landing, error })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[analytics/event]", err)
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 })
  }
}
