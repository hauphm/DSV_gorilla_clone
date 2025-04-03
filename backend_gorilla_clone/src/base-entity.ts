import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: number;

    @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()', nullable: true })
    createdAt?: Date;

    @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()', nullable: true })
    updatedAt?: Date;
}