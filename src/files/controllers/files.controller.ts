import { Controller, Get, Post, UploadedFile, UseInterceptors, BadRequestException, Res, Param } from '@nestjs/common';
import { FilesService } from '../services/files.services';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helpers';
import { Response } from 'Express';

@Controller('file')
export class FilesController {
    constructor ( private readonly filesService: FilesService) {}

    @Post('upload')
    @UseInterceptors
    (FileInterceptor('file',{
        //Llamamos al filefilter de multer y le asignamos nuestro helpers
        fileFilter: fileFilter,
    

        //storage sirve para alojar el archivo
        storage: diskStorage({
            destination: './static/products/',
            filename: fileNamer,
        }),
    })
)
uploadFile(@UploadedFile() file: Express.Multer.File) {
  if (!file){
    //BadRequestException manejo de errores
    throw new BadRequestException('Asegurarse que el archivo es una imagen ');
  }
    const url = `${file.filename}`;

    return {url}; 
    }

    @Get('product/:imageName')
    findProduct(@Res() res:Response, @Param('imageName')imageName:string) {
        const path = this.filesService.getStaticImageName(imageName);

        //return path;
        res.sendFile(path);
    }

    @Get('user/:imageName')
    findUser(@Res() res:Response, @Param('imageName')imageName:string) {
        const path = this.filesService.getStaticImageName(imageName);

        //return path;
        res.sendFile(path);
    }
}