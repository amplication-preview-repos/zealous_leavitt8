import { JsonValue } from "type-fest";

export type Webhook = {
  createdAt: Date;
  headers: JsonValue;
  id: string;
  payload: JsonValue;
  updatedAt: Date;
  url: string | null;
};
