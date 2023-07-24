import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./modules/app.module";
import { LogicModule } from "./modules/logic/logic.module";
import { LogicService } from "./modules/logic/logic.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors({
    origin: "*",
  });

  await app.listen(4000);

  await app.select(LogicModule).get(LogicService).execute();
}
void bootstrap();
