import { ResultUpdateManyWithoutQueriesInput } from "./ResultUpdateManyWithoutQueriesInput";

export type QueryUpdateInput = {
  createDate?: Date | null;
  queryText?: string | null;
  results?: ResultUpdateManyWithoutQueriesInput;
  userId?: string | null;
};
