import { Module } from "@nestjs/common";
import { RedisCacheModuleBase } from "./base/redisCache.module.base";
import { RedisCacheService } from "./redisCache.service";
import { RedisCacheController } from "./redisCache.controller";
import { RedisCacheResolver } from "./redisCache.resolver";

@Module({
  imports: [RedisCacheModuleBase],
  controllers: [RedisCacheController],
  providers: [RedisCacheService, RedisCacheResolver],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
