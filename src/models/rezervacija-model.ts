import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

}

