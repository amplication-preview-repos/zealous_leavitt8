import { InputJsonValue } from "../../types";

export type PostgreSqlFlowCreateInput = {
  flow?: InputJsonValue;
  step?: number | null;
};
