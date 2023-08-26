import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateProveedorDto{

    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //Los decoradores en el dto se validan por la info que se agregue sea la que se conecta

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    Proveedor: string;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(300)
    user_id: number;

    @IsDateString()
    @IsOptional()
    created_at: Date;
}