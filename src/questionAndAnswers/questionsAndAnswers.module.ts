import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionAndAnswers, QuestionAndAnswersSchema } from '../Schema/questionAndAnswers.schema';
import { QuestionAndAnswersController } from './questionAndAnswers.controller';
import { QuestionAndAnswersService } from './questionAndAnswers.service';

@Module({
     imports: [MongooseModule.forFeature([{name:QuestionAndAnswers.name, schema: QuestionAndAnswersSchema}])],
     controllers: [QuestionAndAnswersController],
     providers: [QuestionAndAnswersService]
})
export class QuestionAndAnswersModule {}