import { InputJsonValue } from "../../types";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";

export type ResultUpdateInput = {
  data?: InputJsonValue;
  query?: QueryWhereUniqueInput | null;
  receivedDate?: Date | null;
};
