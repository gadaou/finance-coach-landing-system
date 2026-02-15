import { NextRequest, NextResponse } from "next/server"
import { getAdminPassword, getAdminCookieName } from "@/lib/admin-auth"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const password = typeof body.password === "string" ? body.password : ""
  const expected = getAdminPassword()
  if (password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set(getAdminCookieName(), expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  })
  return res
}
