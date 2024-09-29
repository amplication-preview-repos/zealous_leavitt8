import { PostgreSqlRecordWhereInput } from "./PostgreSqlRecordWhereInput";
import { PostgreSqlRecordOrderByInput } from "./PostgreSqlRecordOrderByInput";

export type PostgreSqlRecordFindManyArgs = {
  where?: PostgreSqlRecordWhereInput;
  orderBy?: Array<PostgreSqlRecordOrderByInput>;
  skip?: number;
  take?: number;
};
