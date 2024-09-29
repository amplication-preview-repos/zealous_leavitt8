import * as graphql from "@nestjs/graphql";
import { KafkaMessageResolverBase } from "./base/kafkaMessage.resolver.base";
import { KafkaMessage } from "./base/KafkaMessage";
import { KafkaMessageService } from "./kafkaMessage.service";

@graphql.Resolver(() => KafkaMessage)
export class KafkaMessageResolver extends KafkaMessageResolverBase {
  constructor(protected readonly service: KafkaMessageService) {
    super(service);
  }
}
