import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FecService } from "./fec.service";
import { QueryDto } from "./QueryDto";
import { ResultDto } from "./ResultDto";

@swagger.ApiTags("fecs")
@common.Controller("fecs")
export class FecController {
  constructor(protected readonly service: FecService) {}

  @common.Delete("/queries/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteQuery(
    @common.Body()
    body: QueryDto
  ): Promise<string> {
        return this.service.DeleteQuery(body);
      }

  @common.Post("/fetch")
  @swagger.ApiOkResponse({
    type: ResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchFecData(
    @common.Body()
    body: QueryDto
  ): Promise<ResultDto> {
        return this.service.FetchFecData(body);
      }

  @common.Get("/queries/:id/results")
  @swagger.ApiOkResponse({
    type: ResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetQueryResult(
    @common.Body()
    body: QueryDto
  ): Promise<ResultDto> {
        return this.service.GetQueryResult(body);
      }

  @common.Get("/queries")
  @swagger.ApiOkResponse({
    type: QueryDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListQueries(
    @common.Body()
    body: QueryDto
  ): Promise<QueryDto[]> {
        return this.service.ListQueries(body);
      }

  @common.Post("/queries")
  @swagger.ApiOkResponse({
    type: QueryDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SaveQuery(
    @common.Body()
    body: QueryDto
  ): Promise<QueryDto> {
        return this.service.SaveQuery(body);
      }
}
