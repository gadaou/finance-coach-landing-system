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
