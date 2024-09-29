import { RedisCache as TRedisCache } from "../api/redisCache/RedisCache";

export const REDISCACHE_TITLE_FIELD = "key";

export const RedisCacheTitle = (record: TRedisCache): string => {
  return record.key?.toString() || String(record.id);
};
