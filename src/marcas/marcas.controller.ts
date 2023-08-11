import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

@Controller('marcas-productos')
// Esto es un controlador
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Post()
  // Para crear
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcasService.create(createMarcaDto);
  }

  @Get()
  // Para mostrar
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(':id')
  // Para mostrar u obtener
  findOne(@Param('id') id: string) {
    return this.marcasService.findOne(+id);
  }

  @Patch(':id')
  // Actualizar
  update(@Param('id') id: string, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcasService.update(+id, updateMarcaDto);
  }

  @Delete(':id')
// Eliminar 
  remove(@Param('id') id: string) {
    return this.marcasService.remove(+id);
  }
}
