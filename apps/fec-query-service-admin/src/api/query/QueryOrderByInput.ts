import { SortOrder } from "../../util/SortOrder";

export type QueryOrderByInput = {
  createDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  queryText?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
