import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ProductsService } from "./services/products.service";
import { ProductsController } from "./controllers/products.controller";
import { ProductImage } from "./entities/product-image.entity";
import { Category } from "./entities/category.entity";
import { CategoryService } from "./services/category.service";
import { CategoryController } from "./controllers/category.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Product, ProductImage, Category])],
    providers: [ProductsService, CategoryService],
    //aqui los servicios
    controllers:[ProductsController, CategoryController],
    //aqui los controladores
    
})
export class ProductsModule{}
