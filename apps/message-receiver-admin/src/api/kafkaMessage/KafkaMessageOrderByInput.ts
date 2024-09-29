import { SortOrder } from "../../util/SortOrder";

export type KafkaMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  offset?: SortOrder;
  partition?: SortOrder;
  payload?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
