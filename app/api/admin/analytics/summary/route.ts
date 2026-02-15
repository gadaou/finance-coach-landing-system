import { NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getAnalyticsSummary } from "@/lib/backend/analytics"

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const landing = request.nextUrl.searchParams.get("landing") ?? undefined
  const summary = await getAnalyticsSummary(landing)
  return NextResponse.json(summary)
}
