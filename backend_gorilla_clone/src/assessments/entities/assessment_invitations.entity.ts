import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('assessment_invitations')
  export class AssessmentInvitation {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    assessment_id: number;
  
    @Column({ type: 'varchar', length: 100, unique: true })
    token: string;
  
    @Column({ type: 'varchar', length: 20, default: 'pending' })
    status: string;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
    created_at: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    expires_at: Date;
  }
  