import { Inject, Injectable } from "@nestjs/common";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { postSchema } from "../../schemas/post.schema";
import { userSchema } from "../../schemas/user.schema";
import { PG_CONNECTION } from "./db.constants";

@Injectable()
export class DbService {
  private _client;

  constructor(@Inject(PG_CONNECTION) connection: Pool) {
    this._client = drizzle(connection, {
      schema: { user: userSchema, post: postSchema },
    });
  }

  get client() {
    return this._client;
  }
}
