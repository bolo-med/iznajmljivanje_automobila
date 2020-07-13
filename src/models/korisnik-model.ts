import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('korisnici')
export class Korisnik {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'ime',
        nullable: false,
        length: 50,
        type: 'varchar'
    })
    ime: string;

    @Column({
        name: 'prezime',
        nullable: false,
        length: 50,
        type: 'varchar'
    })
    prezime: string;

    @Column({
        name: 'god_rodj',
        nullable: false,
        type: 'int'
    })
    godRodjenja: number;

    @Column({
        name: 'adresa',
        nullable: false,
        length: 100,
        type: 'varchar'
    })
    adresa: string;

    @Column({
        name: 'telefon',
        nullable: false,
        length: 50,
        type: 'varchar'
    })
    telefon: string;

}

