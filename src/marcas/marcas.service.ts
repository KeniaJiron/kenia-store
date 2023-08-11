import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

@Injectable()
// Esto es un servicio
export class MarcasService {
  create(createMarcaDto: CreateMarcaDto) {
    //Creariamos una nueva marca
    return 'This action adds a new marca';
  }

  findAll() {
    //Encontrariamos todas las marcas
    return `Esta accion me retorna todas las marcas`;
  }

  findOne(id: number) {
    //Encontramos el registro de una marca
    return `Esta accion retorna la marca Numero #${id} `;
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    //Actualizar una marca
    return `Esta accion actualiza la marca Numero #${id} `;
  }

  remove(id: number) {
    //Eliminar una marca
    return `Esta accion elimina la marca Numero  #${id} `;
  }
}
