import { mkdirSync, existsSync } from "fs"
import { join } from "path"

const hasPostgres = Boolean(process.env.DATABASE_URL)

function createSqliteClient() {
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
  return { db: drizzle(sqlite, { schema }), landings: schema.landings, submissions: schema.submissions, analytics_events: schema.analytics_events }
}

function createPostgresClient() {
  const { drizzle } = require("drizzle-orm/node-postgres")
  const { Pool } = require("pg")
  const schemaPg = require("./schema-pg")
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  pool.query(`
    CREATE TABLE IF NOT EXISTS landings (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      path TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `).then(() => pool.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      landing_id TEXT NOT NULL REFERENCES landings(id),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL DEFAULT '',
      meta TEXT NOT NULL DEFAULT '{}',
      created_at TEXT NOT NULL
    );
  `)).then(() => pool.query(`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      landing_id TEXT REFERENCES landings(id),
      page_id TEXT,
      error_message TEXT,
      created_at TEXT NOT NULL
    );
  `)).catch((err: Error) => console.error("[db] Postgres ensure tables failed:", err))
  return {
    db: drizzle(pool, { schema: schemaPg }),
    landings: schemaPg.landings,
    submissions: schemaPg.submissions,
    analytics_events: schemaPg.analytics_events,
  }
}

const client = hasPostgres ? createPostgresClient() : createSqliteClient()

export const db = client.db
export const landings = client.landings
export const submissions = client.submissions
export const analytics_events = client.analytics_events
