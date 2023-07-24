import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from "pg";

const main = async () => {
  const client = new Client({
    connectionString: "postgresql://user:Asd123@localhost:5432/demo",
  });
  await client.connect();
  const db = drizzle(client);
  await migrate(db, { migrationsFolder: "./migrations" });
  process.exit(0);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
