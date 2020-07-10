import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

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

}