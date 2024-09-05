import { Result } from "../result/Result";

export type Query = {
  createDate: Date | null;
  createdAt: Date;
  id: string;
  queryText: string | null;
  results?: Array<Result>;
  updatedAt: Date;
  userId: string | null;
};
