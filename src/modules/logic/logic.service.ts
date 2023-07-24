import { Injectable } from "@nestjs/common";

import { postSchema } from "../../schemas/post.schema";
import { userSchema } from "../../schemas/user.schema";
import { DbService } from "../db/db.service";

@Injectable()
export class LogicService {
  constructor(private readonly db: DbService) {}

  async execute() {
    // const res = await this.db.client.query.user.findMany();
    const res = await this.db.client.query.user.findMany({
      where: (user, operators) => operators.eq(user.email, "test@gmail.com"),
    });
    await this.db.client.insert(userSchema).values({ email: "" });
    await this.db.client.transaction(async (tx) => {
      const user = await tx
        .insert(userSchema)
        .values({ email: "" })
        .returning({ id: userSchema.id });
      await tx.insert(postSchema).values({ userId: user[0].id });
    });

    console.log(res);
  }
}
