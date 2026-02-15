import { NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getSubmissions } from "@/lib/backend/submissions"

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const landing = request.nextUrl.searchParams.get("landing") ?? undefined
  const submissions = await getSubmissions(landing)
  return NextResponse.json(submissions)
}
