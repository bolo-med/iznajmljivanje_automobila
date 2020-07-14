import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Proizvodjac } from "./proizvodjac-model";
import { Status } from "./status-model";
import { Model } from "./model-model";
import { Rezervacija } from "./rezervacija-model";

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

    @ManyToOne(type => Status, status => status.automobili)
    @JoinColumn({name: 'status_id'})
    status: Status;

    @ManyToOne(type => Proizvodjac, proizvodjac => proizvodjac.automobili)
    @JoinColumn({name: 'proizvodjac_id'})
    proizvodjac: Proizvodjac;

    @ManyToOne(type => Model, model => model.automobili)
    @JoinColumn({name: 'model_id'})
    model: Model;

    @OneToMany(type => Rezervacija, rezervacija => rezervacija.automobil)
    rezervacije: Rezervacija[];

}

