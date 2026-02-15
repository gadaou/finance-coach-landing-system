import { NextRequest, NextResponse } from "next/server"
import { addSubmission } from "@/lib/backend/submissions"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const landing = typeof body.landing === "string" ? body.landing.trim() : null
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const phone = typeof body.phone === "string" ? body.phone.trim() : ""

    if (!landing || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: landing, name, email" },
        { status: 400 }
      )
    }

    const submission = await addSubmission(landing, { name, email, phone, ...body })
    return NextResponse.json({ ok: true, id: submission.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Submission failed"
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
