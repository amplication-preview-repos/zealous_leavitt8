import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RedisCacheServiceBase } from "./base/redisCache.service.base";

@Injectable()
export class RedisCacheService extends RedisCacheServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
