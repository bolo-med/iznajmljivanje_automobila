import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Automobil } from "./automobil-model";


@Entity('statusi')
export class Status {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'tip',
        nullable: false,
        length: 20,
        type: 'varchar'
    })
    tip: string;

    @OneToMany(type => Automobil, automobil => automobil.status)
    automobili: Automobil[];

}

