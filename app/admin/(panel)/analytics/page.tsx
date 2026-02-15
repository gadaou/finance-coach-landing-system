import { Suspense } from "react"
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard"

export default function AdminAnalyticsPage() {
  return (
    <Suspense
      fallback={
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-[hsl(142,71%,28%)]">Tracking & analytics</h1>
          <div className="rounded-xl border-2 border-dashed border-[hsl(var(--admin-border))] bg-white p-12 text-center">
            <p className="text-[hsl(0,0%,50%)]">Loading…</p>
          </div>
        </div>
      }
    >
      <AnalyticsDashboard />
    </Suspense>
  )
}
