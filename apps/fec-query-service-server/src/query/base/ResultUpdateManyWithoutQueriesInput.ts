/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ResultWhereUniqueInput } from "../../result/base/ResultWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ResultUpdateManyWithoutQueriesInput {
  @Field(() => [ResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResultWhereUniqueInput],
  })
  connect?: Array<ResultWhereUniqueInput>;

  @Field(() => [ResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResultWhereUniqueInput],
  })
  disconnect?: Array<ResultWhereUniqueInput>;

  @Field(() => [ResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResultWhereUniqueInput],
  })
  set?: Array<ResultWhereUniqueInput>;
}

export { ResultUpdateManyWithoutQueriesInput as ResultUpdateManyWithoutQueriesInput };
