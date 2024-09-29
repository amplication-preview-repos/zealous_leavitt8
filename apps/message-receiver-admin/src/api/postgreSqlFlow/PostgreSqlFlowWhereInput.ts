import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PostgreSqlFlowWhereInput = {
  flow?: JsonFilter;
  id?: StringFilter;
  step?: IntNullableFilter;
};
