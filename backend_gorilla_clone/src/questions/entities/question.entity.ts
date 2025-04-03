import { AssessmentQuestion } from "src/assessments/entities/assessment_questions.entity";
import { BaseEntity } from "src/base-entity";
import { Test } from "src/tests/entities/test.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('questions')
export class Question extends BaseEntity {
    @Column({ type: 'int', nullable: true })
    test_id: number;

    @Column({ type: 'int', nullable: true })
    creator_id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text' })
    content: string;

    @Column({ type: 'varchar', length: 30 })
    type: string;

    @Column({ type: 'text', array: true, nullable: true })
    options: string[];

    @Column({ type: 'text', array: true, nullable: true })
    correct_answers: string[];

    @Column({ type: 'int', nullable: true })
    time_limit_seconds: number;

    @Column({ type: 'text', nullable: true })
    relevance_description: string;

    @Column({ type: 'varchar', length: 20 })
    source: string;

    @ManyToOne(() => Test, (test) => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'test_id' })
    test: Test;
  
    @ManyToOne(() => User, (user) => user.questions, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'creator_id' })
    creator: User;
  
    @OneToMany(() => AssessmentQuestion, (assessmentQuestion) => assessmentQuestion.question_id, { onDelete: 'CASCADE' })
    assessmentQuestions: AssessmentQuestion[];
}