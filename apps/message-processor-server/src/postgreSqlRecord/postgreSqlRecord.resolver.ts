import * as graphql from "@nestjs/graphql";
import { PostgreSqlRecordResolverBase } from "./base/postgreSqlRecord.resolver.base";
import { PostgreSqlRecord } from "./base/PostgreSqlRecord";
import { PostgreSqlRecordService } from "./postgreSqlRecord.service";

@graphql.Resolver(() => PostgreSqlRecord)
export class PostgreSqlRecordResolver extends PostgreSqlRecordResolverBase {
  constructor(protected readonly service: PostgreSqlRecordService) {
    super(service);
  }
}
