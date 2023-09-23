import {IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProductDto{

    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //Los decoradores en el dto se validan por la info que se agregue sea la que se conecta

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
   // @MaxLength(300)
    description: string;

    @IsString()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    stock: number;

    @IsString()
    @IsOptional()
    filename: string;

    @IsDateString()
    @IsOptional()
    created_at: string;
    
    @IsNumber()
    @IsNotEmpty()
    category_id:number;

    @IsArray({ each: true })
    @IsString()
    @IsOptional()
    images?: string[];
}