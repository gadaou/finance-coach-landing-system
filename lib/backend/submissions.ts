import { eq, desc } from "drizzle-orm"
import { getDbClient, execQuery } from "./db/client"
import { getLandingBySlug } from "./landings"

export type Submission = {
  id: string
  landing_id: string
  name: string
  email: string
  phone: string
  meta: Record<string, unknown>
  created_at: string
}

type SubmissionRow = {
  id: string
  landing_id: string
  name: string
  email: string
  phone: string
  meta: string
  created_at: string
}

export async function getSubmissions(landingSlug?: string): Promise<Submission[]> {
  const { db, submissions: submissionsTable } = await getDbClient()
  let rows: SubmissionRow[]
  if (landingSlug) {
    const landing = await getLandingBySlug(landingSlug)
    if (!landing) return []
    rows = await execQuery<SubmissionRow>(
      db
        .select()
        .from(submissionsTable)
        .where(eq(submissionsTable.landing_id, landing.id))
        .orderBy(desc(submissionsTable.created_at))
    )
  } else {
    rows = await execQuery<SubmissionRow>(
      db.select().from(submissionsTable).orderBy(desc(submissionsTable.created_at))
    )
  }
  return rows.map((r) => ({
    ...r,
    meta: (typeof r.meta === "string" ? JSON.parse(r.meta || "{}") : r.meta) as Record<string, unknown>,
  })) as Submission[]
}

export async function addSubmission(
  landingSlug: string,
  data: { name: string; email: string; phone?: string; [k: string]: unknown }
): Promise<Submission> {
  const { db, submissions: submissionsTable } = await getDbClient()
  const landing = await getLandingBySlug(landingSlug)
  if (!landing) throw new Error("Unknown landing: " + landingSlug)
  const id = `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
  const meta = Object.fromEntries(
    Object.entries(data).filter(([k]) => !["name", "email", "phone", "landing"].includes(k))
  )
  const insertQuery = db.insert(submissionsTable).values({
    id,
    landing_id: landing.id,
    name: data.name,
    email: data.email,
    phone: data.phone ?? "",
    meta: JSON.stringify(meta),
    created_at: new Date().toISOString(),
  })
  const runResult = (insertQuery as { run?: () => void }).run
  if (runResult) runResult.call(insertQuery)
  else await (insertQuery as Promise<unknown>)
  return {
    id,
    landing_id: landing.id,
    name: data.name,
    email: data.email,
    phone: data.phone ?? "",
    meta,
    created_at: new Date().toISOString(),
  }
}
