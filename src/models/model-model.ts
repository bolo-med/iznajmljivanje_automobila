import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Automobil } from "./automobil-model";

@Entity('modeli')
export class Model {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'oznaka',
        nullable: false,
        length: 100,
        type: 'varchar'
    })
    oznaka: string;

    @OneToMany(type => Automobil, automobil => automobil.model)
    automobili: Automobil[];

}

