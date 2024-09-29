import { InputJsonValue } from "../../types";

export type WebhookUpdateInput = {
  headers?: InputJsonValue;
  payload?: InputJsonValue;
  url?: string | null;
};
