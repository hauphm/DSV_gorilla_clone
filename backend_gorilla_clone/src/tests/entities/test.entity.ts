import { AssessmentTest } from "src/assessments/entities/assessment_tests.entity";
import { BaseEntity } from "src/base-entity";
import { Question } from "src/questions/entities/question.entity";
import { TestLibrary } from "src/tests/entities/test_libraries.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('test')
export class Test extends BaseEntity {
    @Column({ type: 'int', nullable: true })
    library_id: number;

    @Column({ type: 'varchar', length: 100 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'int', default: 30 })
    duration_minutes: number;

    @Column({ type: 'varchar', length: 20, nullable: true })
    difficulty_level: string;

    @ManyToOne(() => TestLibrary, (library) => library.tests, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'library_id' })
    library: TestLibrary;
  
    @OneToMany(() => Question, (question) => question.test_id, { onDelete: 'CASCADE' })
    questions: Question[];
  
    @OneToMany(() => AssessmentTest, (assessmentTest) => assessmentTest.test_id, { onDelete: 'CASCADE' })
    assessmentTests: AssessmentTest[];
}