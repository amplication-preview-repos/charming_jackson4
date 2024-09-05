import { Query as TQuery } from "../api/query/Query";

export const QUERY_TITLE_FIELD = "userId";

export const QueryTitle = (record: TQuery): string => {
  return record.userId?.toString() || String(record.id);
};
