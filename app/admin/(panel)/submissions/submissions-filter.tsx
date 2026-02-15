"use client"

import { useRouter, useSearchParams } from "next/navigation"
import type { Landing } from "@/lib/backend/landings"

export function SubmissionsFilter({ landings, current }: { landings: Landing[]; current?: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function setLanding(slug: string) {
    const next = new URLSearchParams(searchParams)
    if (slug) next.set("landing", slug)
    else next.delete("landing")
    router.push(`/admin/submissions?${next.toString()}`)
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground">Filter by landing:</span>
      <select
        value={current ?? ""}
        onChange={(e) => setLanding(e.target.value)}
        className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
      >
        <option value="">All</option>
        {landings.map((l) => (
          <option key={l.id} value={l.slug}>{l.name}</option>
        ))}
      </select>
    </div>
  )
}
