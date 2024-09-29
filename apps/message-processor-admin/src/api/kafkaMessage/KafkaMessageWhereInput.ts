import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KafkaMessageWhereInput = {
  id?: StringFilter;
  offset?: IntNullableFilter;
  partition?: IntNullableFilter;
  payload?: JsonFilter;
  topic?: StringNullableFilter;
};
