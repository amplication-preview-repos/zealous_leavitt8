import { SortOrder } from "../../util/SortOrder";

export type PostgreSqlRecordOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
