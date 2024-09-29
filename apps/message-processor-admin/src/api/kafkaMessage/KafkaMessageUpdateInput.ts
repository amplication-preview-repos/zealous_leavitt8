import { InputJsonValue } from "../../types";

export type KafkaMessageUpdateInput = {
  offset?: number | null;
  partition?: number | null;
  payload?: InputJsonValue;
  topic?: string | null;
};
