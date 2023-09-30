import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService{
    constructor() {}

    getStaticImageName(imageName:string){
        //Agregamos la ruta para encontrar el archivo
        const path = join(__dirname, '../../../static/products', imageName);
        

        //Si no existe la imagen al buscar en la ruta entonces:
        if (!existsSync(path)) {
            throw new BadRequestException(
                `No existe un producto con la imagen  ${imageName}`,
            );
        }

        //Si existe la imagen entonces que la retorne 
         return path;
    }
    //
    getStaticImageNameuser(imageName:string){
        //Agregamos la ruta para encontrar el archivo
        const path = join(__dirname, '../../../static/users', imageName);

        //Si no existe la imagen al buscar en la ruta entonces:
        if (!existsSync(path)) {
            throw new BadRequestException(
                `No existe un usuario con la imagen  ${imageName}`,
            );
        }

        //Si existe la imagen entonces que la retorne 
         return path;
    }
}