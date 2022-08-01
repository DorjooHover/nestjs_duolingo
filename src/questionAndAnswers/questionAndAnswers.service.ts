import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { QuestionAndAnswers, QuestionAndAnswersDocument } from '../Schema/questionAndAnswers.schema';
import { Model } from 'mongoose';
import { QuestionAndAnswersDto } from '../dto/questionAndAnswers.dto';

@Injectable()
export class QuestionAndAnswersService {
     constructor(@InjectModel(QuestionAndAnswers.name) private model:Model<QuestionAndAnswersDocument>) {}

     async create(dto:QuestionAndAnswersDto) {
          let qaa = await this.model.findOne({name: dto.name})
          if(qaa) {
               throw new ForbiddenException('found')
          }
          qaa = await this.model.create({
               name:dto.name,
               answers:dto.answers,
               question:dto.question
          })
          return qaa
     }

     async views() {
          const qaas = await this.model.find()
          if(!qaas) {
               throw new ForbiddenException('not found')
          }
          return qaas
     }

     async view(id:string) {
          const qaa = await this.model.findById(id)
          if(!qaa) {
               throw new ForbiddenException('not found this id')
          }
          return qaa
     }
}