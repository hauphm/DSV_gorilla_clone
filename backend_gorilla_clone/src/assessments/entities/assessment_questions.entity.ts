import { Assessment } from 'src/assessments/entities/assessment.entity';
import { Question } from 'src/questions/entities/question.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity('assessment_questions')
  export class AssessmentQuestion {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    question_id: number;
  
    @Column({ type: 'int' })
    assessment_id: number;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, default: 20.0 })
    weight: number;
  
    @Column({ type: 'int', default: 0 })
    order: number;

    @ManyToOne(() => Assessment, (assessment) => assessment.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'assessment_id' })
    assessment: Assessment;
  
    @ManyToOne(() => Question, (question) => question.assessmentQuestions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'question_id' })
    question: Question;
  }
  