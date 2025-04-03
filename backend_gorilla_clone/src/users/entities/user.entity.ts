import { Entity, Column, OneToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/base-entity';
import { UserProfile } from './user-profile.entity';
import { Assessment } from 'src/assessments/entities/assessment.entity';
import { TestLibrary } from 'src/tests/entities/test_libraries.entity';
import { Question } from 'src/questions/entities/question.entity';
import { TestSession } from 'src/sessions/entities/test_sessions.entity';
import { ManualEvaluation } from 'src/sessions/entities/manual_evalutions.entity';
import { HiringStatus } from 'src/sessions/entities/hiring_statuses.entity';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 255, unique: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  passwordHash: string;
  
  @Column({ type: 'boolean', default: false })
  isGoogleAuth: boolean;

  @Column({ type: 'timestamp with time zone', nullable: true })
  lastLoginAt: Date;

  @OneToOne(() => UserProfile, (profile) => profile.user, { cascade: true })
  profile: UserProfile;

  @OneToMany(() => Assessment, (assessment) => assessment.creator, { onDelete: 'SET NULL' })
  assessments: Assessment[];

  @OneToMany(() => TestLibrary, (library) => library.ownerId, { onDelete: 'SET NULL' })
  libraries: TestLibrary[];

  @OneToMany(() => Question, (question) => question.creator_id, { onDelete: 'SET NULL' })
  questions: Question[];

  @OneToMany(() => TestSession, (session) => session.user_id, { onDelete: 'CASCADE' })
  sessions: TestSession[];

  @OneToMany(() => ManualEvaluation, (evaluation) => evaluation.evaluator_id, { onDelete: 'SET NULL' })
  evaluations: ManualEvaluation[];

  @OneToMany(() => HiringStatus, (status) => status.updated_by, { onDelete: 'SET NULL' })
  updatedStatuses: HiringStatus[];

  async hashPassword(password: string) {
    this.passwordHash = await bcrypt.hash(password, 10);
  }
  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }

}
