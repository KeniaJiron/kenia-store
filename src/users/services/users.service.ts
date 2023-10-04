import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  DataSource, Repository } from "typeorm";
import { User } from '../entities/user.entity';
import { CreateUserDto } from "../dto/users.dto";
import { UserImage } from "../entities/user-image.entity";



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,

        @InjectRepository(UserImage)
        private readonly userImageRepo: Repository<UserImage>,

        private readonly dataSource: DataSource,
    ){}
    
    //Crear un registro
   /* async create(CreateUserDto: CreateUserDto) {
        const user = this.userRepo.create(CreateUserDto);
        await this.userRepo.save(user);

        return user;
    }*/

  
      async create(userDto: CreateUserDto) {
        const { images = [], ...detailsUser} = userDto;

        const user = await this.userRepo.create({
            ...detailsUser,
            images: images.map((image) =>
            this.userImageRepo.create({ url:image }),
            ),
        });   

        await this.userRepo.save(user);
        return user;
    }

   
     findOne(id: number){
        return this.userRepo.findOne({
            where: {id},
            relations:{
                autor: true,
            },
        });
    }

    findAll() {
        return this.userRepo.find({
            order: { id: 'ASC'},
            relations:{
                images: true,
            },
        });
    }

    
    //Eliminar 
    async remove(id: number) {
        const User = await this.findOne(id);
        await this.userRepo.remove(User);
        return 'Usuario eliminado satisfactoriamente '
    }
   
    /* async update (id: number, cambios: CreateUserDto){
        const oldUser = await this.findOne(id);
        const updateUser = await this.userRepo.merge(oldUser, cambios);
        return this.userRepo.save(updateUser);
    }*/

      async update(id: number, cambios: CreateUserDto) {
        const { images, ...updateAll } = cambios;
        const user = await this.userRepo.preload({
        id: id,
        ...updateAll,  // Para esparciar todos los datos del ProductDto
        });
    
        //queryRunner
        const  queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        if(images) {
          
            await queryRunner.manager.delete(UserImage, {user: {id}});
    
           
            user.images = images.map((image) =>
                this.userImageRepo.create({ url: image}),
            );
        } else {
            user.images = await this.userImageRepo.findBy({ user: {id} });
        }
    
    
        await queryRunner.manager.save(user);
    
      
        await queryRunner.commitTransaction();
        await queryRunner.release();
    
        return user;
        }
    

}