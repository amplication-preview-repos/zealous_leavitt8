import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostgreSqlFlowServiceBase } from "./base/postgreSqlFlow.service.base";

@Injectable()
export class PostgreSqlFlowService extends PostgreSqlFlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
