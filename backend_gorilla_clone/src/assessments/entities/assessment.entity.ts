import { AssessmentInvitation } from "src/assessments/entities/assessment_invitations.entity";
import { AssessmentQuestion } from "src/assessments/entities/assessment_questions.entity";
import { AssessmentTest } from "src/assessments/entities/assessment_tests.entity";
import { BaseEntity } from "src/base-entity";
import { TestSession } from "src/sessions/entities/test_sessions.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";


@Entity('assessments')

export class Assessment extends BaseEntity {
    @Column({ type: 'integer', nullable: false })
    creatorId: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'text', nullable: true })
    roleDetails: string;

    @Column({ type: 'boolean', default: false })
    isPublic: boolean;

    @ManyToOne(() => User, (user) => user.assessments, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'creator_id' })
    creator: User;

    @OneToMany(() => AssessmentTest, (assessmentTest) => assessmentTest.assessment_id, { onDelete: 'CASCADE' })
    tests: AssessmentTest[];

    @OneToMany(() => AssessmentQuestion, (assessmentQuestion) => assessmentQuestion.assessment_id, { onDelete: 'CASCADE' })
    questions: AssessmentQuestion[];

    @OneToMany(() => AssessmentInvitation, (invitation) => invitation.assessment_id, { onDelete: 'CASCADE' })
    invitations: AssessmentInvitation[];

    @OneToMany(() => TestSession, (session) => session.assessment_id, { onDelete: 'CASCADE' })
    sessions: TestSession[];
}