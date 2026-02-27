import { NextRequest, NextResponse } from "next/server"

const CORS_ORIGIN = process.env.CORS_ORIGIN

function corsHeaders(origin: string | null): HeadersInit {
  const allowOrigin = CORS_ORIGIN ?? origin ?? "*"
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const search = request.nextUrl.search

  // Redirect /admin to backend when frontend is deployed separately (Vercel)
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
  if (backendUrl && pathname.startsWith("/admin")) {
    const redirectTo = `${backendUrl}${pathname}${search}`
    return NextResponse.redirect(redirectTo)
  }

  // CORS for API routes (so Vercel frontend can call Render backend)
  if (pathname.startsWith("/api/")) {
    const origin = request.headers.get("Origin")
    const headers = corsHeaders(origin)

    if (request.method === "OPTIONS") {
      return new NextResponse(null, { status: 204, headers })
    }

    const response = NextResponse.next()
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }

  return NextResponse.next()
}
