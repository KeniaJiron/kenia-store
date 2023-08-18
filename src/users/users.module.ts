import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "./services/users.service";
import { User } from './entities/user.entity';
import { UsersController } from "./controllers/users.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    //aqui los servicios
    controllers:[UsersController],
    //aqui los controladores
    
})
export class UsersModule{}
