import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { postSchema } from "./post.schema";

export const userSchema = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique(undefined, { nulls: "distinct" }),
});

export const userRelations = relations(userSchema, ({ many }) => ({
  posts: many(postSchema),
}));
