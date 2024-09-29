import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KafkaMessageService } from "./kafkaMessage.service";
import { KafkaMessageControllerBase } from "./base/kafkaMessage.controller.base";

@swagger.ApiTags("kafkaMessages")
@common.Controller("kafkaMessages")
export class KafkaMessageController extends KafkaMessageControllerBase {
  constructor(protected readonly service: KafkaMessageService) {
    super(service);
  }
}
