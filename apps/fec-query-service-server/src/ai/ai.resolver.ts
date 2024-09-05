import * as graphql from "@nestjs/graphql";
import { QueryDto } from "../fec/QueryDto";
import { AiService } from "./ai.service";

export class AiResolver {
  constructor(protected readonly service: AiService) {}

  @graphql.Mutation(() => String)
  async AskQuestion(
    @graphql.Args()
    args: QueryDto
  ): Promise<string> {
    return this.service.AskQuestion(args);
  }
}
