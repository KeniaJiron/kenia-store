import {IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateModeloDto{
    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //Los decoradores en el dto se validan por la info que se agreguesea la que se conecta

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(100)
    marca_id: number;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(300)
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(300)
    user_id: number;
}