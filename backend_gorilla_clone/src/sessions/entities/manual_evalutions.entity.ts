import { TestAnswer } from 'src/sessions/entities/test_answers.entity';
import { User } from 'src/users/entities/user.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity('manual_evaluations')
  export class ManualEvaluation {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    answer_id: number;
  
    @Column({ type: 'int' })
    evaluator_id: number;
  
    @Column({ type: 'decimal', precision: 5, scale: 2 })
    score: number;
  
    @Column({ type: 'text', nullable: true })
    feedback: string;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
    evaluated_at: Date;

    @ManyToOne(() => TestAnswer, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'answer_id' })
    answer: TestAnswer;
  
    @ManyToOne(() => User, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'evaluator_id' })
    evaluator: User;
  }
  