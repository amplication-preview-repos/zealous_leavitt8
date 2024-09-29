import { JsonValue } from "type-fest";

export type RedisCache = {
  createdAt: Date;
  id: string;
  key: string | null;
  updatedAt: Date;
  value: JsonValue;
};
