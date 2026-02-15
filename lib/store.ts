/**
 * @deprecated Use lib/backend/landings and lib/backend/submissions with lib/backend/db (SQLite) instead.
 * Simple store for landings and submissions (JSON file). Kept for reference only.
 */

import { readFile, writeFile, mkdir } from "fs/promises"
import { join } from "path"

export type Landing = {
  id: string
  slug: string
  name: string
  path: string
  created_at: string
}

export type Submission = {
  id: string
  landing_id: string
  name: string
  email: string
  phone: string
  meta: Record<string, unknown>
  created_at: string
}

type Store = {
  landings: Landing[]
  submissions: Submission[]
}

const DEFAULT_LANDINGS: Landing[] = [
  { id: "home", slug: "home", name: "Home", path: "/", created_at: new Date().toISOString() },
  { id: "fmva1", slug: "fmva1", name: "FMVA 1", path: "/fmva1", created_at: new Date().toISOString() },
  { id: "fmva3", slug: "fmva3", name: "FMVA 3", path: "/fmva3", created_at: new Date().toISOString() },
  { id: "fmva4", slug: "fmva4", name: "FMVA 4", path: "/fmva4", created_at: new Date().toISOString() },
  { id: "fmva5", slug: "fmva5", name: "FMVA 5", path: "/fmva5", created_at: new Date().toISOString() },
  { id: "fmva6", slug: "fmva6", name: "FMVA 6", path: "/fmva6", created_at: new Date().toISOString() },
]

function getDataPath(): string {
  return join(process.cwd(), "data", "store.json")
}

async function ensureDataDir(): Promise<void> {
  try {
    await mkdir(join(process.cwd(), "data"), { recursive: true })
  } catch {
    // ignore
  }
}

async function readStore(): Promise<Store> {
  await ensureDataDir()
  const path = getDataPath()
  try {
    const raw = await readFile(path, "utf-8")
    const data = JSON.parse(raw) as Store
    if (!data.landings?.length) data.landings = DEFAULT_LANDINGS
    return data
  } catch {
    return { landings: DEFAULT_LANDINGS, submissions: [] }
  }
}

async function writeStore(store: Store): Promise<void> {
  await ensureDataDir()
  await writeFile(getDataPath(), JSON.stringify(store, null, 2), "utf-8")
}

export async function getLandings(): Promise<Landing[]> {
  const store = await readStore()
  return store.landings
}

export async function getLandingBySlug(slug: string): Promise<Landing | null> {
  const landings = await getLandings()
  return landings.find((l) => l.slug === slug) ?? null
}

export async function getSubmissions(landingSlug?: string): Promise<Submission[]> {
  const store = await readStore()
  let list = store.submissions
  if (landingSlug) {
    const landing = await getLandingBySlug(landingSlug)
    if (landing) list = list.filter((s) => s.landing_id === landing.id)
  }
  return list.sort((a, b) => (b.created_at > a.created_at ? 1 : -1))
}

export async function addSubmission(
  landingSlug: string,
  data: { name: string; email: string; phone?: string; [k: string]: unknown }
): Promise<Submission> {
  const landing = await getLandingBySlug(landingSlug)
  if (!landing) throw new Error("Unknown landing: " + landingSlug)
  const store = await readStore()
  const submission: Submission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    landing_id: landing.id,
    name: data.name,
    email: data.email,
    phone: data.phone ?? "",
    meta: Object.fromEntries(
      Object.entries(data).filter(([k]) => !["name", "email", "phone", "landing"].includes(k))
    ),
    created_at: new Date().toISOString(),
  }
  store.submissions.push(submission)
  await writeStore(store)
  return submission
}
