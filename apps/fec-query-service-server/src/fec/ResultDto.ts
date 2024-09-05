import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ResultDtoObject")
class ResultDto {
    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    queryId?: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    data?: InputJsonValue;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    receivedDate?: Date;
}

export { ResultDto as ResultDto };