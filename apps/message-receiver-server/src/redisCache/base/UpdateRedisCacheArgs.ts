/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RedisCacheWhereUniqueInput } from "./RedisCacheWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RedisCacheUpdateInput } from "./RedisCacheUpdateInput";

@ArgsType()
class UpdateRedisCacheArgs {
  @ApiProperty({
    required: true,
    type: () => RedisCacheWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RedisCacheWhereUniqueInput)
  @Field(() => RedisCacheWhereUniqueInput, { nullable: false })
  where!: RedisCacheWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RedisCacheUpdateInput,
  })
  @ValidateNested()
  @Type(() => RedisCacheUpdateInput)
  @Field(() => RedisCacheUpdateInput, { nullable: false })
  data!: RedisCacheUpdateInput;
}

export { UpdateRedisCacheArgs as UpdateRedisCacheArgs };
