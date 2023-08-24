import { Controller, Post } from '@nestjs/common';
import { FilesService } from '../services/files.services';

@Controller('files')
export class FilesController {
    constructor ( private readonly filesService: FilesService) {}

    @Post('product')
    UploandImage(){
        return 'Hola Mundo';
    }
}