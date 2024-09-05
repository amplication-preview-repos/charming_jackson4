import { JsonValue } from "type-fest";
import { Query } from "../query/Query";

export type Result = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  query?: Query | null;
  receivedDate: Date | null;
  updatedAt: Date;
};
