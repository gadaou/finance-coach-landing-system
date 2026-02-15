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

export const analyticsEventTypes = ["page_view", "form_submission", "form_submission_error", "thank_you_view"] as const
export type AnalyticsEventType = (typeof analyticsEventTypes)[number]

export const analytics_events = sqliteTable("analytics_events", {
  id: text("id").primaryKey(),
  type: text("type").notNull(),
  landing_id: text("landing_id").references(() => landings.id),
  page_id: text("page_id"),
  error_message: text("error_message"),
  created_at: text("created_at").notNull(),
})

export type LandingRow = typeof landings.$inferSelect
export type SubmissionRow = typeof submissions.$inferInsert
export type AnalyticsEventRow = typeof analytics_events.$inferSelect
