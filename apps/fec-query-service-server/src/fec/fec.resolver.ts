import * as graphql from "@nestjs/graphql";
import { QueryDto } from "./QueryDto";
import { ResultDto } from "./ResultDto";
import { FecService } from "./fec.service";

export class FecResolver {
  constructor(protected readonly service: FecService) {}

  @graphql.Mutation(() => String)
  async DeleteQuery(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.DeleteQuery(args);
  }

  @graphql.Mutation(() => ResultDto)
  async FetchFecData(
    @graphql.Args()
    args: QueryDto
  ): Promise<ResultDto> {
    return this.service.FetchFecData(args);
  }

  @graphql.Query(() => ResultDto)
  async GetQueryResult(
    @graphql.Args("args")
    args: string
  ): Promise<ResultDto> {
    return this.service.GetQueryResult(args);
  }

  @graphql.Query(() => [QueryDto])
  async ListQueries(
    @graphql.Args("args")
    args: string[]
  ): Promise<QueryDto[]> {
    return this.service.ListQueries(args);
  }

  @graphql.Mutation(() => QueryDto)
  async SaveQuery(
    @graphql.Args()
    args: QueryDto
  ): Promise<QueryDto> {
    return this.service.SaveQuery(args);
  }
}
