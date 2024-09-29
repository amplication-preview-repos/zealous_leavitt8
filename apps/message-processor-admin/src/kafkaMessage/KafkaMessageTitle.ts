import { KafkaMessage as TKafkaMessage } from "../api/kafkaMessage/KafkaMessage";

export const KAFKAMESSAGE_TITLE_FIELD = "topic";

export const KafkaMessageTitle = (record: TKafkaMessage): string => {
  return record.topic?.toString() || String(record.id);
};
