import { relations } from "drizzle-orm";
import { foreignKey, pgTable, uuid } from "drizzle-orm/pg-core";

import { userSchema } from "./user.schema";

export const postSchema = pgTable(
  "post",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("userId").notNull(),
  },
  (t) => ({
    userFk: foreignKey({
      columns: [t.userId],
      foreignColumns: [userSchema.id],
    }),
  }),
);

export const postRelations = relations(postSchema, ({ one }) => ({
  user: one(userSchema, {
    fields: [postSchema.userId],
    references: [userSchema.id],
  }),
}));
