import { IsNotEmpty, IsNumber, IsString, MaxLength, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class CreateUserDto{

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    sexo: string;

   @IsBoolean()
   @IsOptional()
   active: boolean;

   @IsArray({ each: true })
    @IsString()
    @IsOptional()
    images?: string[];
}