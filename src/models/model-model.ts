import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

}