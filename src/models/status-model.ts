import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('statusi')
export class Status {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'tip',
        nullable: false,
        length: 20,
        type: 'varchar'
    })
    tip: string;

}

