import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Injectable()
export class ModelsService {
  create(createModelDto: CreateModelDto) {
    return 'This action adds a new model';
  }

  findAll() {
    return `Esta accion me retorna todos los modelos`;
  }

  findOne(id: number) {
    return `Esta accion retorna el modelo Numero #${id}`;
  }

  update(id: number, updateModelDto: UpdateModelDto) {
    return `Esta accion actualiza el modelo Numero #${id}`;
  }

  remove(id: number) {
    return `Esta accion elimina el modelo Numero #${id}`;
  }
}
