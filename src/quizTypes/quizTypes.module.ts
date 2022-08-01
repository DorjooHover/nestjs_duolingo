import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { QuizTypes, QuizTypesSchema } from '../Schema/quizTypes.schema';
import { QuizTypesController } from './quizTypes.controller';
import { QuizTypesService } from './quizTypes.service';

@Module({
     imports:[MongooseModule.forFeature([{name:QuizTypes.name, schema:QuizTypesSchema}])],
     controllers: [QuizTypesController],
     providers:[QuizTypesService]
})
export class QuizTypesModule {}