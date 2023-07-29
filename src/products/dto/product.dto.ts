import {IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto{

    @IsNotEmpty()
    @IsNumber()
    id: number;
    //Los decoradores en el dto se validan por la info que se agreguesea la que se conecta

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    description: string;

    @IsString()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    stock: number;

    
}