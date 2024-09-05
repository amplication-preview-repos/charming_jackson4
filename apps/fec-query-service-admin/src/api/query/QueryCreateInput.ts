import { ResultCreateNestedManyWithoutQueriesInput } from "./ResultCreateNestedManyWithoutQueriesInput";

export type QueryCreateInput = {
  createDate?: Date | null;
  queryText?: string | null;
  results?: ResultCreateNestedManyWithoutQueriesInput;
  userId?: string | null;
};
