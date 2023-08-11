import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [],
    //aqui los servicios
    controllers:[],
    //aqui los controladores
    
})
export class ProductsModule{}
