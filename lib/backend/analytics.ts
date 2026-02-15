import { eq, and, gte, lte } from "drizzle-orm"
import { db, analytics_events as eventsTable } from "./db/client"
import { getLandings, getLandingBySlug } from "./landings"
import type { AnalyticsEventType } from "./db/schema"

const EVENT_TYPES: AnalyticsEventType[] = [
  "page_view",
  "form_submission",
  "form_submission_error",
  "thank_you_view",
]

export type LandingAnalyticsSummary = {
  slug: string
  name: string
  path: string
  pageViews: number
  submissions: number
  formErrors: number
  thankYouViews: number
}

export type TotalsSummary = {
  pageViews: number
  submissions: number
  formErrors: number
  thankYouViews: number
}

export type SummaryResponse = {
  landings: LandingAnalyticsSummary[]
  totals: TotalsSummary
}

export type ChartBucket = {
  date: string
  pageViews: number
  submissions: number
  formErrors: number
  thankYouViews: number
}

export async function addAnalyticsEvent(params: {
  type: string
  pageId?: string
  landing?: string
  error?: string
}): Promise<void> {
  if (!EVENT_TYPES.includes(params.type as AnalyticsEventType)) return
  let landing_id: string | null = null
  if (params.landing) {
    const landing = await getLandingBySlug(params.landing)
    landing_id = landing?.id ?? null
  }
  const id = `evt_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
  const insertQuery = db.insert(eventsTable).values({
    id,
    type: params.type,
    landing_id,
    page_id: params.pageId ?? null,
    error_message: params.error ?? null,
    created_at: new Date().toISOString(),
  })
  const runResult = (insertQuery as { run?: () => void }).run
  if (runResult) runResult.call(insertQuery)
  else await (insertQuery as Promise<unknown>)
}

function emptyTotals(): TotalsSummary {
  return { pageViews: 0, submissions: 0, formErrors: 0, thankYouViews: 0 }
}

function mapTypeToKey(type: string): keyof TotalsSummary | null {
  switch (type) {
    case "page_view":
      return "pageViews"
    case "form_submission":
      return "submissions"
    case "form_submission_error":
      return "formErrors"
    case "thank_you_view":
      return "thankYouViews"
    default:
      return null
  }
}

export async function getAnalyticsSummary(landingSlug?: string): Promise<SummaryResponse> {
  const landings = await getLandings()
  const landingIds = new Set(landings.map((l) => l.id))
  const landingById = new Map(landings.map((l) => [l.id, l]))

  const rows = await Promise.resolve(
    db.select().from(eventsTable).all() as Promise<{ id: string; type: string; landing_id: string | null; created_at: string }[]> | { id: string; type: string; landing_id: string | null; created_at: string }[]
  )
  const arr = Array.isArray(rows) ? rows : await rows

  const countsByLanding = new Map<string, TotalsSummary>()
  for (const l of landings) {
    countsByLanding.set(l.id, emptyTotals())
  }
  const totals = emptyTotals()

  for (const row of arr) {
    const key = mapTypeToKey(row.type)
    if (!key) continue
    if (landingSlug && row.landing_id) {
      const land = landingById.get(row.landing_id)
      if (land?.slug !== landingSlug) continue
    }
    totals[key]++
    if (row.landing_id && landingIds.has(row.landing_id)) {
      const t = countsByLanding.get(row.landing_id)!
      t[key]++
    }
  }

  let landingList: LandingAnalyticsSummary[] = landings
    .filter((l) => l.slug !== "home")
    .map((l) => {
      const t = countsByLanding.get(l.id) ?? emptyTotals()
      return {
        slug: l.slug,
        name: l.name,
        path: l.path,
        pageViews: t.pageViews,
        submissions: t.submissions,
        formErrors: t.formErrors,
        thankYouViews: t.thankYouViews,
      }
    })

  if (landingSlug) {
    landingList = landingList.filter((l) => l.slug === landingSlug)
  }

  return { landings: landingList, totals }
}

export async function getAnalyticsChart(params: {
  landingSlug?: string
  from?: string
  to?: string
  granularity?: "day"
}): Promise<{ buckets: ChartBucket[] }> {
  const { landingSlug, from, to, granularity = "day" } = params
  const landings = await getLandings()
  const landingBySlug = new Map(landings.map((l) => [l.slug, l]))
  const landingId = landingSlug ? landingBySlug.get(landingSlug)?.id : null

  const conditions: ReturnType<typeof eq>[] = []
  if (landingId) {
    conditions.push(eq(eventsTable.landing_id, landingId))
  }
  const now = new Date()
  const defaultFrom = new Date(now)
  defaultFrom.setDate(defaultFrom.getDate() - 30)
  const fromDate = from ?? defaultFrom.toISOString().slice(0, 10)
  const toDate = to ?? now.toISOString().slice(0, 10)
  conditions.push(gte(eventsTable.created_at, fromDate + "T00:00:00.000Z"))
  conditions.push(lte(eventsTable.created_at, toDate + "T23:59:59.999Z"))

  const allRows = await Promise.resolve(
    db
      .select({ type: eventsTable.type, created_at: eventsTable.created_at })
      .from(eventsTable)
      .where(and(...conditions))
      .all() as Promise<{ type: string; created_at: string }[]> | { type: string; created_at: string }[]
  )
  const allArr = Array.isArray(allRows) ? allRows : await allRows

  const bucketMap = new Map<string, ChartBucket>()
  const addToBucket = (dateStr: string, type: string) => {
    const key = mapTypeToKey(type)
    if (!key) return
    let b = bucketMap.get(dateStr)
    if (!b) {
      b = { date: dateStr, pageViews: 0, submissions: 0, formErrors: 0, thankYouViews: 0 }
      bucketMap.set(dateStr, b)
    }
    b[key]++
  }

  for (const row of allArr) {
    const d = row.created_at.slice(0, 10)
    if (granularity === "day") {
      addToBucket(d, row.type)
    }
  }

  const sortedDates = Array.from(bucketMap.keys()).sort()
  const buckets = sortedDates.map((date) => bucketMap.get(date)!)
  return { buckets }
}
