"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { AnalyticsLandingSelector, type LandingSummaryItem } from "./analytics-landing-selector"
import { BarChart3, FileInput, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react"

type SummaryResponse = {
  landings: LandingSummaryItem[]
  totals: { pageViews: number; submissions: number; formErrors: number; thankYouViews: number }
}

type ChartBucket = {
  date: string
  pageViews: number
  submissions: number
  formErrors: number
  thankYouViews: number
}

export function AnalyticsDashboard() {
  const searchParams = useSearchParams()
  const landingSlug = searchParams.get("landing") ?? undefined
  const [summary, setSummary] = useState<SummaryResponse | null>(null)
  const [chart, setChart] = useState<{ buckets: ChartBucket[] } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    const chartLandingParam = landingSlug ? `?landing=${encodeURIComponent(landingSlug)}` : ""
    Promise.all([
      fetch("/api/admin/analytics/summary").then((r) => r.json()),
      fetch(`/api/admin/analytics/chart${chartLandingParam}`).then((r) => r.json()),
    ])
      .then(([sum, ch]) => {
        if (!cancelled) {
          setSummary(sum)
          setChart(ch)
        }
      })
      .catch(() => {
        if (!cancelled) setSummary({ landings: [], totals: { pageViews: 0, submissions: 0, formErrors: 0, thankYouViews: 0 } })
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [landingSlug])

  const landings = summary?.landings ?? []
  const totals = summary?.totals ?? { pageViews: 0, submissions: 0, formErrors: 0, thankYouViews: 0 }
  const buckets = chart?.buckets ?? []
  const selectedLanding = landingSlug ? landings.find((l) => l.slug === landingSlug) : null

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-[hsl(142,71%,28%)]">Tracking & analytics</h1>
        {summary && (
          <AnalyticsLandingSelector
            landings={summary.landings}
            currentSlug={landingSlug ?? ""}
          />
        )}
      </div>

      {loading && (
        <div className="rounded-xl border border-[hsl(var(--admin-border))] bg-white p-8 text-center text-[hsl(0,0%,50%)]">
          Loading analytics…
        </div>
      )}

      {!loading && summary && (
        <>
          {selectedLanding ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-[hsl(0,0%,50%)]">Viewing:</span>
                <span className="font-medium">{selectedLanding.name}</span>
                <span className="text-[hsl(0,0%,55%)]">{selectedLanding.path}</span>
                <Link
                  href={`/admin/landings?landing=${encodeURIComponent(selectedLanding.slug)}`}
                  className="inline-flex items-center gap-1 text-[hsl(142,71%,28%)] hover:underline"
                >
                  View submissions <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <MetricCard
                  label="Page views"
                  value={selectedLanding.pageViews}
                  icon={BarChart3}
                />
                <MetricCard
                  label="Form submissions"
                  value={selectedLanding.submissions}
                  icon={FileInput}
                />
                <MetricCard
                  label="Form errors"
                  value={selectedLanding.formErrors}
                  icon={AlertCircle}
                />
                <MetricCard
                  label="Thank you views"
                  value={selectedLanding.thankYouViews}
                  icon={CheckCircle2}
                />
              </div>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {landings.map((l) => (
                <Link
                  key={l.slug}
                  href={`/admin/analytics?landing=${encodeURIComponent(l.slug)}`}
                  className="admin-ring rounded-xl border-2 border-[hsl(var(--admin-border))] bg-white p-4 transition-colors hover:border-[hsl(142,71%,38%)] hover:bg-[hsl(142,71%,96%)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-semibold text-[hsl(0,0%,20%)]">{l.name}</span>
                    <span className="text-xs text-[hsl(0,0%,55%)]">{l.path}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="h-4 w-4 text-[hsl(0,0%,60%)]" />
                      <span>{l.pageViews}</span> <span className="text-[hsl(0,0%,55%)]">views</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileInput className="h-4 w-4 text-[hsl(0,0%,60%)]" />
                      <span>{l.submissions}</span> <span className="text-[hsl(0,0%,55%)]">subm.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="h-4 w-4 text-[hsl(0,0%,60%)]" />
                      <span>{l.formErrors}</span> <span className="text-[hsl(0,0%,55%)]">errors</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(0,0%,60%)]" />
                      <span>{l.thankYouViews}</span> <span className="text-[hsl(0,0%,55%)]">thanks</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!selectedLanding && (
            <div className="rounded-xl border border-[hsl(var(--admin-border))] bg-white p-4">
              <h2 className="text-lg font-semibold text-[hsl(0,0%,20%)] mb-4">Totals</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <MetricCard label="Page views" value={totals.pageViews} icon={BarChart3} />
                <MetricCard label="Form submissions" value={totals.submissions} icon={FileInput} />
                <MetricCard label="Form errors" value={totals.formErrors} icon={AlertCircle} />
                <MetricCard label="Thank you views" value={totals.thankYouViews} icon={CheckCircle2} />
              </div>
            </div>
          )}

          <div className="rounded-xl border border-[hsl(var(--admin-border))] bg-white p-4">
            <h2 className="text-lg font-semibold text-[hsl(0,0%,20%)] mb-4">
              {selectedLanding ? `${selectedLanding.name} – Events over time` : "All landings – Events over time"}
            </h2>
            {buckets.length === 0 ? (
              <p className="text-sm text-[hsl(0,0%,55%)] py-8 text-center">
                No event data in the selected period. Events will appear once tracking is active on your landing pages.
              </p>
            ) : (
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={buckets} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,90%)" />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="hsl(0,0%,55%)" />
                    <YAxis tick={{ fontSize: 11 }} stroke="hsl(0,0%,55%)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(0,0%,100%)",
                        border: "1px solid hsl(var(--admin-border))",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "hsl(0,0%,20%)" }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="pageViews" name="Page views" stroke="hsl(142,71%,35%)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="submissions" name="Submissions" stroke="hsl(220,70%,45%)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="formErrors" name="Form errors" stroke="hsl(0,70%,50%)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="thankYouViews" name="Thank you views" stroke="hsl(280,60%,45%)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function MetricCard({
  label,
  value,
  icon: Icon,
}: {
  label: string
  value: number
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="rounded-lg border border-[hsl(var(--admin-border))] bg-[hsl(0,0%,98%)] p-3 flex items-center gap-3">
      <Icon className="h-8 w-8 text-[hsl(142,71%,35%)]" />
      <div>
        <p className="text-xs text-[hsl(0,0%,55%)]">{label}</p>
        <p className="text-xl font-semibold text-[hsl(0,0%,20%)]">{value}</p>
      </div>
    </div>
  )
}
