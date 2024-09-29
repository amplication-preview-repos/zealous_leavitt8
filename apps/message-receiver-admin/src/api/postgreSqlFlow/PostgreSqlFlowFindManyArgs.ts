import { PostgreSqlFlowWhereInput } from "./PostgreSqlFlowWhereInput";
import { PostgreSqlFlowOrderByInput } from "./PostgreSqlFlowOrderByInput";

export type PostgreSqlFlowFindManyArgs = {
  where?: PostgreSqlFlowWhereInput;
  orderBy?: Array<PostgreSqlFlowOrderByInput>;
  skip?: number;
  take?: number;
};
