import { BaseEntity } from 'src/base-entity';
import { TestSession } from 'src/sessions/entities/test_sessions.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
  
@Entity('hiring_statuses')
export class HiringStatus extends BaseEntity{
    @Column({ type: 'int' })
    session_id: number;
  
    @Column({ type: 'varchar', length: 20 })
    status: string;
  
    @Column({ type: 'text', nullable: true })
    notes: string;
  
    @Column({ type: 'int', nullable: true })
    updated_by: number;

    @ManyToOne(() => TestSession, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'session_id' })
    session: TestSession;
  
    @ManyToOne(() => User, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'updated_by' })
    updatedBy: User;
  }
  