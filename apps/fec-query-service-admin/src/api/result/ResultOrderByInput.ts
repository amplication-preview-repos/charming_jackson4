import { SortOrder } from "../../util/SortOrder";

export type ResultOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  queryId?: SortOrder;
  receivedDate?: SortOrder;
  updatedAt?: SortOrder;
};
