import { IsNotEmpty, IsString } from "class-validator";

export class DeleteLogDto {


    @IsNotEmpty()
    @IsString()
    readonly device_id: string
}