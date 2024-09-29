import { PostgreSqlFlow as TPostgreSqlFlow } from "../api/postgreSqlFlow/PostgreSqlFlow";

export const POSTGRESQLFLOW_TITLE_FIELD = "id";

export const PostgreSqlFlowTitle = (record: TPostgreSqlFlow): string => {
  return record.id?.toString() || String(record.id);
};
