import { JsonValue } from "type-fest";

export type PostgreSqlFlow = {
  createdAt: Date;
  flow: JsonValue;
  id: string;
  step: number | null;
  updatedAt: Date;
};
