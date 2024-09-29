import { InputJsonValue } from "../../types";

export type PostgreSqlFlowUpdateInput = {
  flow?: InputJsonValue;
  step?: number | null;
};
