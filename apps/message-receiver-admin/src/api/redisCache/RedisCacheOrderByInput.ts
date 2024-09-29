import { SortOrder } from "../../util/SortOrder";

export type RedisCacheOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
