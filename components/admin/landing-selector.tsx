"use client"

import { useRouter, useSearchParams } from "next/navigation"
import type { Landing } from "@/lib/backend/landings"

export function LandingSelector({
  landings,
  currentSlug,
}: {
  landings: Landing[]
  currentSlug: string | undefined
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function onChange(slug: string) {
    const next = new URLSearchParams(searchParams)
    next.set("landing", slug)
    router.push(`/admin/landings?${next.toString()}`)
  }

  const value = currentSlug && landings.some((l) => l.slug === currentSlug) ? currentSlug : landings[0]?.slug ?? ""

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <label htmlFor="landing-select" className="text-sm font-medium text-[hsl(0,0%,30%)]">
        Landing page
      </label>
      <select
        id="landing-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="admin-ring rounded-lg border border-[hsl(var(--admin-border))] bg-white px-4 py-2 text-sm min-w-[12rem]"
      >
        {landings.map((l) => (
          <option key={l.id} value={l.slug}>
            {l.name}
          </option>
        ))}
      </select>
    </div>
  )
}
