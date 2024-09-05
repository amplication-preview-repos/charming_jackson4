import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiService } from "./ai.service";
import { QueryDto } from "../fec/QueryDto";

@swagger.ApiTags("ais")
@common.Controller("ais")
export class AiController {
  constructor(protected readonly service: AiService) {}

  @common.Post("/ask")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AskQuestion(
    @common.Body()
    body: QueryDto
  ): Promise<string> {
        return this.service.AskQuestion(body);
      }
}
