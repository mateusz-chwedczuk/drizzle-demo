import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { LogicModule } from "./logic/logic.module";

@Module({
  controllers: [AppController],
  imports: [ConfigModule.forRoot({ isGlobal: true }), LogicModule],
})
export class AppModule {}
