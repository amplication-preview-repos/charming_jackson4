import { Injectable } from "@nestjs/common";
import { QueryDto } from "../fec/QueryDto";

@Injectable()
export class AiService {
  constructor() {}
  async AskQuestion(args: QueryDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
