import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "url";

export const WebhookTitle = (record: TWebhook): string => {
  return record.url?.toString() || String(record.id);
};
