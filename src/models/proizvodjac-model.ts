import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { Automobil } from "./automobil-model";

@Entity('proizvodjaci')
export class Proizvodjac {

    @PrimaryGeneratedColumn({
        name: "id"
        // type: 'int'
    })
    id: number;

    @Column({
        name: "naziv",
        nullable: false,
        length: 100,
        type: "varchar"
    })
    naziv: string;

    @OneToMany(type => Automobil, automobil => automobil.proizvodjac)
    automobili: Automobil[];

}

