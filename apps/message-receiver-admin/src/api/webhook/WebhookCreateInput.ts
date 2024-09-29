import { InputJsonValue } from "../../types";

export type WebhookCreateInput = {
  headers?: InputJsonValue;
  payload?: InputJsonValue;
  url?: string | null;
};
