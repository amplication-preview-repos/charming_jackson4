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
class ResultCreateNestedManyWithoutQueriesInput {
  @Field(() => [ResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResultWhereUniqueInput],
  })
  connect?: Array<ResultWhereUniqueInput>;
}

export { ResultCreateNestedManyWithoutQueriesInput as ResultCreateNestedManyWithoutQueriesInput };
