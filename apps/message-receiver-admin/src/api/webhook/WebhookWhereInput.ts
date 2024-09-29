import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WebhookWhereInput = {
  headers?: JsonFilter;
  id?: StringFilter;
  payload?: JsonFilter;
  url?: StringNullableFilter;
};
