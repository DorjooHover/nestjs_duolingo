import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Quizzes, QuizzesSchema } from '../Schema';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';
import { QuizTypesModule } from '../quizTypes/quizTypes.module';

@Module({
     imports:[MongooseModule.forFeature([{name:Quizzes.name, schema: QuizzesSchema}]), QuizTypesModule],
     controllers: [QuizzesController],
     providers: [QuizzesService]
})
export class QuizzesModule {}