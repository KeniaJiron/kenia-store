import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProductsService } from "../services/products.service";
import { CreateProductDto } from "../dto/product.dto";

@Controller ('Products')
export class ProductsController{
    constructor( private readonly productsService: ProductsService) {} 
    
    @Post()
    async create(@Body() ProductDto: CreateProductDto){
        return await this.productsService.create(ProductDto);
    }

    @Get()
    findAll(){
      return this.productsService.findAll();  
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.productsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.productsService.remove(id);
    }
    //El metodo patch actualiza parcialmente
    //Los pipes son transformadores, transforman la data
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() createProductDto: CreateProductDto,
    ) {
        return this.productsService.update(id, createProductDto);
    }
}