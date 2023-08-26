import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Proveedor } from '../entities/proveedor.entity';
import { CreateProveedorDto } from "../dto/proveedor.dto";


@Injectable()
export class ProveedoresService {
    constructor(
        @InjectRepository(Proveedor)
        private readonly proveedorRepo: Repository<Proveedor>
    ){}
    //Crear un registro
        async create(createproveedorDto: CreateProveedorDto) {
        const proveedor = this.proveedorRepo.create(createproveedorDto);
        await this.proveedorRepo.save(proveedor); 

        return proveedor;
    }
    //Encontrar un registro
//findOne(id: number){
      //  return this.productRepo.findOneBy({id});
    // }

    //Encontrar un registro con relaciones
    findOne(id: number){
        return this.proveedorRepo.findOne({
            where: {id},
            relations:{
                autor: true,
            },
        });
    }
    //Mostrar todos los registros 
    findAll() {
        return this.proveedorRepo.find({
            order: {id: 'ASC'},
        });
    }
    //Eliminar un registro
    async remove(id: number) {
        const proveedor = await this.findOne(id);
        await this.proveedorRepo.remove(proveedor);
        return 'Proveedor eliminado satisfactoriamente '
    }
    //Actualizar un registro o producto
    async update (id: number, cambios: CreateProveedorDto){
        const oldProveedor = await this.findOne(id);
        const updateProveedor = await this.proveedorRepo.merge(oldProveedor, cambios);
        return this.proveedorRepo.save(updateProveedor); 
    }

}