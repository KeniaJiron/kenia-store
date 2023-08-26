import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from '../services/files.services';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FilesController {
    constructor ( private readonly filesService: FilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
}

    @Get('product/:imageId')
    getImage(){
        return 'Hola Mundo';
    }
}