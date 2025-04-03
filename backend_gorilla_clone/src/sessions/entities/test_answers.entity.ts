import { Question } from 'src/questions/entities/question.entity';
import { TestSession } from 'src/sessions/entities/test_sessions.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity('test_answers')
  export class TestAnswer {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    session_id: number;
  
    @Column({ type: 'int' })
    question_id: number;
  
    @Column({ type: 'text', nullable: true })
    answer_content: string;
  
    @Column({ type: 'text', array: true, nullable: true })
    selected_option: string[];
  
    @Column({ type: 'int', nullable: true })
    time_spent_seconds: number;
  
    @Column({ type: 'boolean', nullable: true })
    is_correct: boolean;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    score: number;

    @ManyToOne(() => TestSession, (session) => session.answer, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'session_id' })
    session: TestSession;
  
    @ManyToOne(() => Question, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: Question;
}
  