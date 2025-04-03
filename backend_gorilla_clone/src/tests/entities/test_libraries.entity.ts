import { BaseEntity } from "src/base-entity";
import { User } from "src/users/entities/user.entity";
import { Test } from "src/tests/entities/test.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('test_libraries')
export class TestLibrary extends BaseEntity {
    @Column({ type: 'integer', nullable: false })
    ownerId: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;
    
    @Column({ type: 'text' })
    description: string;
    
    @Column({ type: 'varchar', length: 50 })
    category: string;
    
    @Column({ type: 'varchar', length: 50, nullable: false })
    source: string;

    @ManyToOne(() => User, (user) => user.libraries, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'owner_id' })
    owner: User;
  
    @OneToMany(() => Test, (test) => test.library_id, { onDelete: 'CASCADE' })
    tests: Test[];
}