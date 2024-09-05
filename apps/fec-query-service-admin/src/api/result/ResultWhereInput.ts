import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResultWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  query?: QueryWhereUniqueInput;
  receivedDate?: DateTimeNullableFilter;
};
