import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Rezervacija } from "./rezervacija-model";

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

    @Column({
        name: 'username',
        nullable: false,
        // unique: true,
        length: 100,
        type: 'varchar'
    })
    username: string;

    @Column({
        name: 'hashed_password',
        nullable: false,
        type: 'text'
    })
    hashedPassword: string;

    @Column({
        name: 'is_admin',
        nullable: false,
        type: 'int'
    })
    isAdmin: number;

    @OneToMany(type => Rezervacija, rezervacija => rezervacija.korisnik)
    rezervacije: Rezervacija[];

}

