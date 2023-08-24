import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../users/entities/user.entity';
import { Category } from "./category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn({type: 'int4'}) // Este decorador hace referencia a una llave primaria
    id?: number;

    @Column({type: 'varchar', length: '100'}) //Campos de una tabla 
    name: string;

    @Column({type: 'varchar', length: '300', nullable: false }) //Campos de una tabla
    description: string;

    @Column({type: 'int4', nullable: false}) //Campos de una tabla
    price: number;

    @Column({type: 'int8', nullable: false}) //Campos de una tabla
    stock: number; 

    @Column({type:'int4', nullable: false}) //Campos de una tabla
    user_id: number; 

    @Column({type: 'varchar', nullable: true}) //Campos de una tabla
    filename: String;

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})//Campos de una tabla
    created_at:Date;

    @Column({type:'int4', nullable: true}) //Campos de una tabla
    category_id: number; 

    //Relaciones 

    @ManyToOne(() => User)
    @JoinColumn({
        name: 'user_id', // El campo que relaciona a mi tabla
        referencedColumnName: "id", //Este es el id del usuario
    })
    autor: User;

    @ManyToOne(() => Category)
    @JoinColumn({
        name: 'category_id', // El campo que relaciona a mi tabla
        referencedColumnName: "id", //Este es el id del usuario
    })
    autor2: Category;

}