import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProveedoresService } from "../services/proveedores.services";
import {CreateProveedorDto} from "../dto/proveedor.dto";

@Controller ('Proveedor')
export class ProveedoresController{
    constructor( private readonly proveedoresService: ProveedoresService) {} 
    
    @Post()
    async create(@Body() ProveedorDto: CreateProveedorDto){
        return await this.proveedoresService.create(ProveedorDto);
    }

    @Get()
    findAll(){
      return this.proveedoresService.findAll();  
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.proveedoresService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.proveedoresService.remove(id);
    }
    //El metodo patch actualiza parcialmente
    //Los pipes son transformadores, transforman la data
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createProveedorDto: CreateProveedorDto,
    ) {
        return this.proveedoresService.update(id, createProveedorDto);
    }
}