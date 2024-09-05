import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";

export type QueryWhereInput = {
  createDate?: DateTimeNullableFilter;
  id?: StringFilter;
  queryText?: StringNullableFilter;
  results?: ResultListRelationFilter;
  userId?: StringNullableFilter;
};
