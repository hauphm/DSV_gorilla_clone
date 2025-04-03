import { Assessment } from 'src/assessments/entities/assessment.entity';
import { TestAnswer } from 'src/sessions/entities/test_answers.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
  
  @Entity('test_sessions')
  export class TestSession {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    assessment_id: number;
  
    @Column({ type: 'int' })
    user_id: number;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
    start_time: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    end_time: Date;
  
    @Column({ type: 'varchar', length: 20, default: 'in_progress' })
    status: string;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    score: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    screen_recording_url: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    webcam_recording_url: string;

    @ManyToOne(() => Assessment, (assessment) => assessment.sessions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'assessment_id' })
    assessment: Assessment;
  
    @ManyToOne(() => User, (user) => user.sessions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => TestAnswer, (testAnswer) => testAnswer.session, { onDelete: 'CASCADE' })
    answer: TestAnswer[];
  }
  