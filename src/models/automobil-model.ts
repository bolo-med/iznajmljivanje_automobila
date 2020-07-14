import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Proizvodjac } from "./proizvodjac-model";

@Entity('automobili')
export class Automobil {
    
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'proizvodjac_id',
        nullable: false,
        type: 'int'
    })
    proizvodjacID: number;

    @Column({
        name: 'model_id',
        nullable: false,
        type: 'int'
    })
    modelID: number;

    @Column({
        name: 'godiste',
        nullable: false,
        type: 'int'
    })
    godiste: Number;

    @Column({
        name: 'motor',
        nullable: false,
        length: 100,
        type: 'varchar'
    })
    motor: string;

    @Column({
        name: 'mjenjac',
        length: 20,
        nullable: false,
        type: 'varchar'
    })
    mjenjac: string;

    @Column({
        name: 'status_id',
        nullable: false,
        type: 'int'
    })
    statusID: number;

    @Column({
        name: 'fotografija',
        length: 300,
        nullable: false,
        type: 'varchar'
    })
    fotografija: string;

    @Column({
        name: 'cijena',
        nullable: false,
        type: 'double'
    })
    cijena: number;

    // @ManyToOne()
    // proizvodjac: Proizvodjac;

}

