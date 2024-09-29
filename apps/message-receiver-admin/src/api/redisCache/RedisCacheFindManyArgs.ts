import { RedisCacheWhereInput } from "./RedisCacheWhereInput";
import { RedisCacheOrderByInput } from "./RedisCacheOrderByInput";

export type RedisCacheFindManyArgs = {
  where?: RedisCacheWhereInput;
  orderBy?: Array<RedisCacheOrderByInput>;
  skip?: number;
  take?: number;
};
