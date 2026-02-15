import { cookies } from "next/headers"

const ADMIN_COOKIE = "admin_token"

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "admin"
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE)?.value
  return token === getAdminPassword()
}

export function getAdminCookieName(): string {
  return ADMIN_COOKIE
}
