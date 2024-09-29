import { KafkaMessageWhereUniqueInput } from "./KafkaMessageWhereUniqueInput";
import { KafkaMessageUpdateInput } from "./KafkaMessageUpdateInput";

export type UpdateKafkaMessageArgs = {
  where: KafkaMessageWhereUniqueInput;
  data: KafkaMessageUpdateInput;
};
