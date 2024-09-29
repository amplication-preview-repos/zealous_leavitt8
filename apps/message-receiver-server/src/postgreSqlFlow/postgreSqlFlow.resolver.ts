import * as graphql from "@nestjs/graphql";
import { PostgreSqlFlowResolverBase } from "./base/postgreSqlFlow.resolver.base";
import { PostgreSqlFlow } from "./base/PostgreSqlFlow";
import { PostgreSqlFlowService } from "./postgreSqlFlow.service";

@graphql.Resolver(() => PostgreSqlFlow)
export class PostgreSqlFlowResolver extends PostgreSqlFlowResolverBase {
  constructor(protected readonly service: PostgreSqlFlowService) {
    super(service);
  }
}
