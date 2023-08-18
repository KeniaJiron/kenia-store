import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}