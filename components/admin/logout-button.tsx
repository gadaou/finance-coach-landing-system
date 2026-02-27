"use client"

import { useRouter } from "next/navigation"
import { getApiOrigin } from "@/lib/api"

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch(`${getApiOrigin()}/api/admin/logout`, { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="text-sm text-[hsl(0,0%,45%)] hover:text-[hsl(142,71%,35%)] transition-colors"
    >
      Logout
    </button>
  )
}
