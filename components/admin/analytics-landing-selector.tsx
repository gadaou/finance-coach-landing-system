"use client"

import { useRouter, useSearchParams } from "next/navigation"

export type LandingSummaryItem = {
  slug: string
  name: string
  path: string
  pageViews: number
  submissions: number
  formErrors: number
  thankYouViews: number
}

export function AnalyticsLandingSelector({
  landings,
  currentSlug,
}: {
  landings: LandingSummaryItem[]
  currentSlug: string | undefined
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function onChange(slug: string) {
    const next = new URLSearchParams(searchParams)
    if (slug === "") {
      next.delete("landing")
    } else {
      next.set("landing", slug)
    }
    router.push(`/admin/analytics?${next.toString()}`)
  }

  const value = currentSlug ?? ""

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <label htmlFor="analytics-landing-select" className="text-sm font-medium text-[hsl(0,0%,30%)]">
        Landing page
      </label>
      <select
        id="analytics-landing-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="admin-ring rounded-lg border border-[hsl(var(--admin-border))] bg-white px-4 py-2 text-sm min-w-[12rem]"
      >
        <option value="">All landings</option>
        {landings.map((l) => (
          <option key={l.slug} value={l.slug}>
            {l.path} – {l.name}
          </option>
        ))}
      </select>
    </div>
  )
}
