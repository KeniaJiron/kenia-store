import { Module } from "@nestjs/common";
import { FilesPDFController } from "./controllers/filePDF.controller";
import { FilesPDFService } from "./services/filesPDF.service";


@Module({
    controllers: [FilesPDFController],
    providers: [FilesPDFService],
    })
    export class FilesPDFModule {}