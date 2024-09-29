import { KafkaMessageWhereInput } from "./KafkaMessageWhereInput";
import { KafkaMessageOrderByInput } from "./KafkaMessageOrderByInput";

export type KafkaMessageFindManyArgs = {
  where?: KafkaMessageWhereInput;
  orderBy?: Array<KafkaMessageOrderByInput>;
  skip?: number;
  take?: number;
};
