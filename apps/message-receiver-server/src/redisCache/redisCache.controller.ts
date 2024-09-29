import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RedisCacheService } from "./redisCache.service";
import { RedisCacheControllerBase } from "./base/redisCache.controller.base";

@swagger.ApiTags("redisCaches")
@common.Controller("redisCaches")
export class RedisCacheController extends RedisCacheControllerBase {
  constructor(protected readonly service: RedisCacheService) {
    super(service);
  }
}
