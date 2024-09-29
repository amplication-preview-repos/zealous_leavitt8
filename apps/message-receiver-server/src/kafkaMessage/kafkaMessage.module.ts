import { Module } from "@nestjs/common";
import { KafkaMessageModuleBase } from "./base/kafkaMessage.module.base";
import { KafkaMessageService } from "./kafkaMessage.service";
import { KafkaMessageController } from "./kafkaMessage.controller";
import { KafkaMessageResolver } from "./kafkaMessage.resolver";

@Module({
  imports: [KafkaMessageModuleBase],
  controllers: [KafkaMessageController],
  providers: [KafkaMessageService, KafkaMessageResolver],
  exports: [KafkaMessageService],
})
export class KafkaMessageModule {}
