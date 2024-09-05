import { InputJsonValue } from "../../types";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";

export type ResultCreateInput = {
  data?: InputJsonValue;
  query?: QueryWhereUniqueInput | null;
  receivedDate?: Date | null;
};
