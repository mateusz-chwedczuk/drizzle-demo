import { Module } from "@nestjs/common";

import { DbModule } from "../db/db.module";
import { LogicService } from "./logic.service";

@Module({
  imports: [DbModule],
  providers: [LogicService],
})
export class LogicModule {}
