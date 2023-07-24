import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";

import { PG_CONNECTION } from "./db.constants";
import { DbService } from "./db.service";

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString =
          configService.getOrThrow<string>("DATABASE_URL");
        const pool = new Pool({
          connectionString,
        });
        await pool.connect();
        return pool;
      },
    },
    DbService,
  ],
  exports: [DbService],
})
export class DbModule {}
