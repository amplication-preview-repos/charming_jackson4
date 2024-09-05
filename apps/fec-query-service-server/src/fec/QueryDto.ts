import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("QueryDtoObject")
class QueryDto {
    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    userId?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    queryText?: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    createDate?: Date;
}

export { QueryDto as QueryDto };