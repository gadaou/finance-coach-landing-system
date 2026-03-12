import { NextRequest, NextResponse } from "next/server"
import { addSubmission } from "@/lib/backend/submissions"
import { validatePhone, phoneDigitRules } from "@/lib/phone-validation"

/**
 * Parse a combined phone string like "+20 1234567890" into country code and number
 */
function parsePhoneString(phone: string): { countryCode: string; number: string } | null {
  if (!phone || !phone.startsWith("+")) return null
  
  // Try to match known country codes (longest first to handle +1 vs +123)
  const sortedCodes = Object.keys(phoneDigitRules).sort((a, b) => b.length - a.length)
  
  for (const code of sortedCodes) {
    if (phone.startsWith(code)) {
      const number = phone.slice(code.length).trim()
      return { countryCode: code, number }
    }
  }
  
  // Fallback: split on first space
  const spaceIndex = phone.indexOf(" ")
  if (spaceIndex > 0) {
    return {
      countryCode: phone.slice(0, spaceIndex),
      number: phone.slice(spaceIndex + 1).trim()
    }
  }
  
  return null
}

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

    // Validate phone number if provided
    if (phone) {
      const parsed = parsePhoneString(phone)
      if (parsed) {
        const phoneValidation = validatePhone(parsed.countryCode, parsed.number)
        if (!phoneValidation.valid) {
          return NextResponse.json(
            { error: phoneValidation.error || "Invalid phone number" },
            { status: 400 }
          )
        }
      }
    }

    const submission = await addSubmission(landing, { name, email, phone, ...body })
    return NextResponse.json({ ok: true, id: submission.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Submission failed"
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
