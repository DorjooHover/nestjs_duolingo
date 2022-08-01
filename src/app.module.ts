import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LanguageModule } from './language/language.module';
import { LevelsModule } from './levels/levels.module';
import { LessonsModule } from './lessons/lessons.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { QuestionAndAnswersModule } from './questionAndAnswers/questionsAndAnswers.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    MongooseModule.forRoot( 'mongodb+srv://dorjoo:dorjooX0@cluster0.jkcew5n.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'duolingo_clone'
  }), 
  UserModule,
   AuthModule,
  LanguageModule,
  LevelsModule,
  LessonsModule,
  QuizzesModule,
  QuestionAndAnswersModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
