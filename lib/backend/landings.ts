import { eq } from "drizzle-orm"
import { getDbClient, execQuery } from "./db/client"

export type Landing = {
  id: string
  slug: string
  name: string
  path: string
  created_at: string
}

const DEFAULT_LANDINGS: Landing[] = [
  { id: "home", slug: "home", name: "Home", path: "/", created_at: new Date().toISOString() },
  { id: "fmva1", slug: "fmva1", name: "FMVA 1", path: "/fmva1", created_at: new Date().toISOString() },
  { id: "fmva3", slug: "fmva3", name: "FMVA 3", path: "/fmva3", created_at: new Date().toISOString() },
  { id: "fmva4", slug: "fmva4", name: "FMVA 4", path: "/fmva4", created_at: new Date().toISOString() },
  { id: "fmva5", slug: "fmva5", name: "FMVA 5", path: "/fmva5", created_at: new Date().toISOString() },
  { id: "fmva6", slug: "fmva6", name: "FMVA 6", path: "/fmva6", created_at: new Date().toISOString() },
  { id: "acca", slug: "acca", name: "ACCA", path: "/acca", created_at: new Date().toISOString() },
]

async function seedIfEmpty(): Promise<void> {
  const { db, landings: landingsTable } = await getDbClient()
  const arr = await execQuery<Landing>(db.select().from(landingsTable).limit(1))
  if (arr.length === 0) {
    for (const row of DEFAULT_LANDINGS) {
      const insertQuery = db.insert(landingsTable).values(row)
      const runResult = (insertQuery as { run?: () => void }).run
      if (runResult) runResult.call(insertQuery)
      else await (insertQuery as Promise<unknown>)
    }
  }
}

export async function getLandings(): Promise<Landing[]> {
  await seedIfEmpty()
  const { db, landings: landingsTable } = await getDbClient()
  return execQuery<Landing>(db.select().from(landingsTable))
}

export async function getLandingBySlug(slug: string): Promise<Landing | null> {
  await seedIfEmpty()
  const { db, landings: landingsTable } = await getDbClient()
  const arr = await execQuery<Landing>(
    db.select().from(landingsTable).where(eq(landingsTable.slug, slug)).limit(1)
  )
  return (arr[0] as Landing) ?? null
}
