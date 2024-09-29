import { InputJsonValue } from "../../types";

export type RedisCacheUpdateInput = {
  key?: string | null;
  value?: InputJsonValue;
};
