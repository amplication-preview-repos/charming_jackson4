import { Injectable } from "@nestjs/common";
import { QueryDto } from "./QueryDto";
import { ResultDto } from "./ResultDto";

@Injectable()
export class FecService {
  constructor() {}
  async DeleteQuery(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchFecData(args: QueryDto): Promise<ResultDto> {
    throw new Error("Not implemented");
  }
  async GetQueryResult(args: string): Promise<ResultDto> {
    throw new Error("Not implemented");
  }
  async ListQueries(args: string[]): Promise<QueryDto[]> {
    throw new Error("Not implemented");
  }
  async SaveQuery(args: QueryDto): Promise<QueryDto> {
    throw new Error("Not implemented");
  }
}
