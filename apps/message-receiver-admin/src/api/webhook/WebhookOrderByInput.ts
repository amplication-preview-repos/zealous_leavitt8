import { SortOrder } from "../../util/SortOrder";

export type WebhookOrderByInput = {
  createdAt?: SortOrder;
  headers?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
