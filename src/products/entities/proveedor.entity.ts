import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedor{
    @PrimaryGeneratedColumn({type: 'int4'}) // Este decorador hace referencia a la llave primaria 
    id?: number;

    @Column({type: 'varchar'})// campos de una tabla
    proveedor: string;

    @Column({type:'int4', nullable: false}) //Campos de una tabla
    user_id: number;

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})//Campos de una tabla
    created_at:Date;

//relations
    @ManyToOne(() => User)
    @JoinColumn({
        name: 'user_id', // El campo que relaciona a mi tabla
        referencedColumnName: "id", //Este es el id del usuario
    })
    autor: User;
}