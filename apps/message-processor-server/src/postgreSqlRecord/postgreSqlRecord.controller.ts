import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostgreSqlRecordService } from "./postgreSqlRecord.service";
import { PostgreSqlRecordControllerBase } from "./base/postgreSqlRecord.controller.base";

@swagger.ApiTags("postgreSqlRecords")
@common.Controller("postgreSqlRecords")
export class PostgreSqlRecordController extends PostgreSqlRecordControllerBase {
  constructor(protected readonly service: PostgreSqlRecordService) {
    super(service);
  }
}
