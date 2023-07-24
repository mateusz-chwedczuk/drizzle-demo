import { Inject, Injectable } from "@nestjs/common";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { postRelations, postSchema } from "../../schemas/post.schema";
import { userRelations, userSchema } from "../../schemas/user.schema";
import { PG_CONNECTION } from "./db.constants";

@Injectable()
export class DbService {
  private _client;

  constructor(@Inject(PG_CONNECTION) connection: Pool) {
    this._client = drizzle(connection, {
      schema: {
        user: userSchema,
        userRelations,
        post: postSchema,
        postRelations,
      },
    });
  }

  get client() {
    return this._client;
  }
}
