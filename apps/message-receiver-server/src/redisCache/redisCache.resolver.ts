import * as graphql from "@nestjs/graphql";
import { RedisCacheResolverBase } from "./base/redisCache.resolver.base";
import { RedisCache } from "./base/RedisCache";
import { RedisCacheService } from "./redisCache.service";

@graphql.Resolver(() => RedisCache)
export class RedisCacheResolver extends RedisCacheResolverBase {
  constructor(protected readonly service: RedisCacheService) {
    super(service);
  }
}
