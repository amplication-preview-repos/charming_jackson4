import { Module } from "@nestjs/common";
import { FecService } from "./fec.service";
import { FecController } from "./fec.controller";
import { FecResolver } from "./fec.resolver";

@Module({
  controllers: [FecController],
  providers: [FecService, FecResolver],
  exports: [FecService],
})
export class FecModule {}
