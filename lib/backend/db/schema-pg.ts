import { pgTable, text } from "drizzle-orm/pg-core"

export const landings = pgTable("landings", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  path: text("path").notNull(),
  created_at: text("created_at").notNull(),
})

export const submissions = pgTable("submissions", {
  id: text("id").primaryKey(),
  landing_id: text("landing_id")
    .notNull()
    .references(() => landings.id),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull().default(""),
  meta: text("meta").notNull().default("{}"),
  created_at: text("created_at").notNull(),
})

export const analytics_events = pgTable("analytics_events", {
  id: text("id").primaryKey(),
  type: text("type").notNull(),
  landing_id: text("landing_id").references(() => landings.id),
  page_id: text("page_id"),
  error_message: text("error_message"),
  created_at: text("created_at").notNull(),
})
