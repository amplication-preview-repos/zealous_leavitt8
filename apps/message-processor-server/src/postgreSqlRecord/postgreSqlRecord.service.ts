import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostgreSqlRecordServiceBase } from "./base/postgreSqlRecord.service.base";

@Injectable()
export class PostgreSqlRecordService extends PostgreSqlRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
