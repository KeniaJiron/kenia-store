import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class User{
    @PrimaryGeneratedColumn({type: 'int4'}) // Este decorador hace referencia a una llave primaria
    id: number;

    @Column({type: 'varchar', length: '100'}) //Campos de una tabla
    name: string;

    @Column({type: 'varchar', length: '300'}) //Campos de una tabla
    password: string;

    @Column({type: 'varchar', length: '100'}) //Campos de una tabla
    email: string;

    @Column({type: 'varchar', length: '50'}) //Campos de una tabla
    sexo: string;

   @Column({ type: 'boolean', default: true })
   active: boolean;
}