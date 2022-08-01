import { Injectable, UseGuards, ForbiddenException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { JwtGuard } from '../auth/guard/jwt.guard';
import { Quizzes, QuizzesDocument } from '../Schema/quizzes.schema';
import { Model } from 'mongoose';
import { QuizzesDto } from '../dto';

@UseGuards(JwtGuard)
@Injectable()
export class QuizzesService {
     constructor(@InjectModel(Quizzes.name) private model:Model<QuizzesDocument>) {}

     async create(dto:QuizzesDto, userId: string) {
          let quiz = await this.model.findOne({name:dto.name})
          if(quiz) {
               throw new ForbiddenException('found this name')
          }
          quiz = await this.model.create({
               name:dto.name,
               quiz_types:dto.quizTypes,
               questionAndAnswers: dto.questionAndAnswers.map((item) => {
                    return {
                         public_id:item.public_id,
                         user_id: userId
                    }
               })
          })
          return quiz
     }

     async views(userId:string) {
          const quizzes = await this.model.find()
          if(!quizzes) {
               throw new ForbiddenException('not found')
          }
          return quizzes
     }

     async view(id:string, userId:string) {
          const quiz = await this.model.findById(id)
          if(!quiz) {
               throw new ForbiddenException('not found this id')
          }
          return quiz
     }
}