import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';


@Entity()
export class UserImage {
    @PrimaryGeneratedColumn({ type: 'int4'})
    id: number;

    @Column({type: 'varchar', nullable: true})
    url: string;

    //Relaciones
    @ManyToOne(() => User, (user) => user.images, {
        onDelete: 'CASCADE',
    })
    user:User;
}