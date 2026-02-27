import pg from "pg"

const { DATABASE_URL } = process.env
if (!DATABASE_URL) {
  console.log("[db-init] No DATABASE_URL — skipping (SQLite mode)")
  process.exit(0)
}

const client = new pg.Client({ connectionString: DATABASE_URL })
await client.connect()
console.log("[db-init] Connected to Postgres.")

await client.query(`
  CREATE TABLE IF NOT EXISTS landings (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    path TEXT NOT NULL,
    created_at TEXT NOT NULL
  )
`)
console.log("[db-init] landings table ready.")

await client.query(`
  CREATE TABLE IF NOT EXISTS submissions (
    id TEXT PRIMARY KEY,
    landing_id TEXT NOT NULL REFERENCES landings(id),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL DEFAULT '',
    meta TEXT NOT NULL DEFAULT '{}',
    created_at TEXT NOT NULL
  )
`)
console.log("[db-init] submissions table ready.")

await client.query(`
  CREATE TABLE IF NOT EXISTS analytics_events (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    landing_id TEXT REFERENCES landings(id),
    page_id TEXT,
    error_message TEXT,
    created_at TEXT NOT NULL
  )
`)
console.log("[db-init] analytics_events table ready.")

await client.end()
console.log("[db-init] All tables ready. DB connection closed.")
