import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    readonly first_name: string

    @IsString()
    @IsNotEmpty()
    readonly last_name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(15)
    readonly password: string

}