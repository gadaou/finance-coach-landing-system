import { mkdirSync, existsSync } from "fs"
import { join } from "path"

type DbClient = {
  db: Record<string, unknown>
  landings: Record<string, unknown>
  submissions: Record<string, unknown>
  analytics_events: Record<string, unknown>
}

let cachedClient: DbClient | null = null
let initPromise: Promise<DbClient> | null = null

async function createSqliteClient(): Promise<DbClient> {
  const { drizzle } = require("drizzle-orm/better-sqlite3")
  const Database = require("better-sqlite3")
  const schema = require("./schema")
  const dataDir = join(process.cwd(), "data")
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true })
  const dbPath = join(dataDir, "admin.db")
  const sqlite = new Database(dbPath)
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS landings (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      path TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      landing_id TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL DEFAULT '',
      meta TEXT NOT NULL DEFAULT '{}',
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS analytics_events (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      landing_id TEXT,
      page_id TEXT,
      error_message TEXT,
      created_at TEXT NOT NULL
    );
  `)
  return {
    db: drizzle(sqlite, { schema }),
    landings: schema.landings,
    submissions: schema.submissions,
    analytics_events: schema.analytics_events,
  }
}

async function createPostgresClient(): Promise<DbClient> {
  const { drizzle } = require("drizzle-orm/node-postgres")
  const { Pool } = require("pg")
  const schemaPg = require("./schema-pg")
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })

  // Await table creation before returning — prevents "relation does not exist" on fresh DBs
  await pool.query(`
    CREATE TABLE IF NOT EXISTS landings (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      path TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `)
  await pool.query(`
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
  await pool.query(`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      landing_id TEXT REFERENCES landings(id),
      page_id TEXT,
      error_message TEXT,
      created_at TEXT NOT NULL
    )
  `)

  console.log("[db] Postgres tables ready.")
  return {
    db: drizzle(pool, { schema: schemaPg }),
    landings: schemaPg.landings,
    submissions: schemaPg.submissions,
    analytics_events: schemaPg.analytics_events,
  }
}

/**
 * Returns the initialised DB client, creating and caching it on first call.
 * Tables are created (CREATE TABLE IF NOT EXISTS) before the client resolves.
 * Safe for both SQLite (local/dev) and Postgres (Render/production).
 */
export async function getDbClient(): Promise<DbClient> {
  if (cachedClient) return cachedClient
  if (!initPromise) {
    initPromise = (process.env.DATABASE_URL ? createPostgresClient() : createSqliteClient()).then(
      (c) => {
        cachedClient = c
        return c
      }
    )
  }
  return initPromise
}

/**
 * Executes a Drizzle query for both adapters:
 * - SQLite (better-sqlite3): queries have a synchronous `.all()` method
 * - Postgres (node-postgres): queries are Promises
 */
export async function execQuery<T>(query: unknown): Promise<T[]> {
  if (query && typeof (query as { all?: unknown }).all === "function") {
    return (query as { all: () => T[] }).all()
  }
  return await (query as Promise<T[]>)
}
