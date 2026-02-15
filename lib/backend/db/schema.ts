import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const landings = sqliteTable("landings", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  path: text("path").notNull(),
  created_at: text("created_at").notNull(),
})

export const submissions = sqliteTable("submissions", {
  id: text("id").primaryKey(),
  landing_id: text("landing_id").notNull().references(() => landings.id),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull().default(""),
  meta: text("meta").notNull().default("{}"),
  created_at: text("created_at").notNull(),
})

export type LandingRow = typeof landings.$inferSelect
export type SubmissionRow = typeof submissions.$inferInsert
