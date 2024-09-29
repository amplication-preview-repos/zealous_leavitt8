import { JsonValue } from "type-fest";

export type KafkaMessage = {
  createdAt: Date;
  id: string;
  offset: number | null;
  partition: number | null;
  payload: JsonValue;
  topic: string | null;
  updatedAt: Date;
};
