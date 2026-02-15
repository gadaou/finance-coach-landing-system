import { NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getAnalyticsChart } from "@/lib/backend/analytics"

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const landing = request.nextUrl.searchParams.get("landing") ?? undefined
  const from = request.nextUrl.searchParams.get("from") ?? undefined
  const to = request.nextUrl.searchParams.get("to") ?? undefined
  const granularity = (request.nextUrl.searchParams.get("granularity") ?? "day") as "day"
  const chart = await getAnalyticsChart({ landingSlug: landing, from, to, granularity })
  return NextResponse.json(chart)
}
