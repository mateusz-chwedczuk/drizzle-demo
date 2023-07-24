import type { Config } from "drizzle-kit";

export default {
  breakpoints: true,
  dbCredentials: {
    connectionString: "postgresql://user:Asd123@localhost:5432/demo",
  },
  driver: "pg",
  schema: "./src/schemas/*",
  out: "./migrations",
} satisfies Config;
