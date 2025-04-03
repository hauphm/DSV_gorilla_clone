import { Assessment } from 'src/assessments/entities/assessment.entity';
import { Test } from 'src/tests/entities/test.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, } from 'typeorm';
  
@Entity('assessment_tests')
export class AssessmentTest {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    assessment_id: number;
  
    @Column({ type: 'int' })
    test_id: number;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, default: 20.0 })
    weight: number;
  
    @Column({ type: 'int', default: 0 })
    order: number;

    @ManyToOne(() => Assessment, (assessment) => assessment.tests, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'assessment_id' })
    assessment: Assessment;
  
    @ManyToOne(() => Test, (test) => test.assessmentTests, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: Test;
  }
  