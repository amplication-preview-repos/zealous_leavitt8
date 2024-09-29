import { Module } from "@nestjs/common";
import { PostgreSqlRecordModuleBase } from "./base/postgreSqlRecord.module.base";
import { PostgreSqlRecordService } from "./postgreSqlRecord.service";
import { PostgreSqlRecordController } from "./postgreSqlRecord.controller";
import { PostgreSqlRecordResolver } from "./postgreSqlRecord.resolver";

@Module({
  imports: [PostgreSqlRecordModuleBase],
  controllers: [PostgreSqlRecordController],
  providers: [PostgreSqlRecordService, PostgreSqlRecordResolver],
  exports: [PostgreSqlRecordService],
})
export class PostgreSqlRecordModule {}
