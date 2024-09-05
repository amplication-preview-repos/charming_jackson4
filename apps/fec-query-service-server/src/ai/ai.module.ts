import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";
import { AiResolver } from "./ai.resolver";

@Module({
  controllers: [AiController],
  providers: [AiService, AiResolver],
  exports: [AiService],
})
export class AiModule {}
