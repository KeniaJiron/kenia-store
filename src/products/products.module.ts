import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ProductsService } from "./services/products.service";
import { ProductsController } from "./controllers/products.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductsService],
    //aqui los servicios
    controllers:[ProductsController],
    //aqui los controladores
    
})
export class ProductsModule{}
