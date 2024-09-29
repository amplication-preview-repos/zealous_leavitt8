import { InputJsonValue } from "../../types";

export type RedisCacheCreateInput = {
  key?: string | null;
  value?: InputJsonValue;
};
