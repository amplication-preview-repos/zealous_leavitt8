import { InputJsonValue } from "../../types";

export type KafkaMessageCreateInput = {
  offset?: number | null;
  partition?: number | null;
  payload?: InputJsonValue;
  topic?: string | null;
};
