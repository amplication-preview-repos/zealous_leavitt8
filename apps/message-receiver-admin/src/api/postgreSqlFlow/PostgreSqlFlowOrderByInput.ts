import { SortOrder } from "../../util/SortOrder";

export type PostgreSqlFlowOrderByInput = {
  createdAt?: SortOrder;
  flow?: SortOrder;
  id?: SortOrder;
  step?: SortOrder;
  updatedAt?: SortOrder;
};
