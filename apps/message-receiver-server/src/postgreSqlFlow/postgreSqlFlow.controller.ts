import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostgreSqlFlowService } from "./postgreSqlFlow.service";
import { PostgreSqlFlowControllerBase } from "./base/postgreSqlFlow.controller.base";

@swagger.ApiTags("postgreSqlFlows")
@common.Controller("postgreSqlFlows")
export class PostgreSqlFlowController extends PostgreSqlFlowControllerBase {
  constructor(protected readonly service: PostgreSqlFlowService) {
    super(service);
  }
}
