import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Automobil } from "./automobil-model";
import { Korisnik } from "./korisnik-model";

@Entity('rezervacije')
export class Rezervacija {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'korisnik_id',
        nullable: false,
        type: 'int'
    })
    korisnikID: number;

    @Column({
        name: 'automobil_id',
        nullable: false,
        type: 'int'
    })
    automobilID: number;

    @Column({
        name: 'datum_preuzimanja',
        nullable: false,
        type: 'date'
    })
    datumPreuzimanja: Date;

    @Column({
        name: 'datum_vracanja',
        nullable: false,
        type: 'date'
    })
    datumVracanja: Date;

    @Column({
        name: 'realizovana',
        nullable: true,
        type: 'boolean'
    })
    realizovana: boolean;

    @Column({
        name: 'datum_stvarnog_vracanja',
        nullable: true,
        type: "date"
    })
    datumStvarnogVracanja: Date;

    @ManyToOne(type => Automobil, automobil => automobil.rezervacije)
    @JoinColumn({name: 'automobil_id'})
    automobil: Automobil;

    @ManyToOne(type => Korisnik, korisnik => korisnik.rezervacije)
    @JoinColumn({name: 'korisnik_id'})
    korisnik: Korisnik;

}

