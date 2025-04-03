import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppDataSource } from './data-source';

import { UsersModule } from './users/users.module';
import { AssessmentsModule } from './assessments/assessments.module';
import { TestsModule } from './tests/tests.module';
import { QuestionsModule } from './questions/questions.module';
import { SessionsModule } from './sessions/sessions.module';
import { AuthModule } from './auth/auth.module';
import { AssessmentsService } from './assessments/assessments.service';
import { AssessmentsController } from './assessments/assessments.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...AppDataSource.options,
      }),
    }),
    UsersModule,
    AssessmentsModule,
    TestsModule,
    QuestionsModule,
    SessionsModule,
    AuthModule,
  ],
  controllers: [
    AppController, 
    AssessmentsController, 
    AuthController
  ],
  providers: [
    AppService, 
    AssessmentsService, 
    AuthService
  ],
})
export class AppModule {}
