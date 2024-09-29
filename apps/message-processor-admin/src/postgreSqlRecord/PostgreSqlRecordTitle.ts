import { PostgreSqlRecord as TPostgreSqlRecord } from "../api/postgreSqlRecord/PostgreSqlRecord";

export const POSTGRESQLRECORD_TITLE_FIELD = "id";

export const PostgreSqlRecordTitle = (record: TPostgreSqlRecord): string => {
  return record.id?.toString() || String(record.id);
};
