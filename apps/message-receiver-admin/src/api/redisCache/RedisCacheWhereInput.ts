import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RedisCacheWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: JsonFilter;
};
