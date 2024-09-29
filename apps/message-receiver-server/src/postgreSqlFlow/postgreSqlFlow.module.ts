import { Module } from "@nestjs/common";
import { PostgreSqlFlowModuleBase } from "./base/postgreSqlFlow.module.base";
import { PostgreSqlFlowService } from "./postgreSqlFlow.service";
import { PostgreSqlFlowController } from "./postgreSqlFlow.controller";
import { PostgreSqlFlowResolver } from "./postgreSqlFlow.resolver";

@Module({
  imports: [PostgreSqlFlowModuleBase],
  controllers: [PostgreSqlFlowController],
  providers: [PostgreSqlFlowService, PostgreSqlFlowResolver],
  exports: [PostgreSqlFlowService],
})
export class PostgreSqlFlowModule {}
