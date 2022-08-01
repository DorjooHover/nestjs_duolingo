import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizTypesDomucent } from "src/Schema";
import { QuizTypes } from '../Schema';

@Injectable()
export class QuizTypesService {
     constructor(@InjectModel(QuizTypes.name) private model:Model<QuizTypesDomucent>) {}

     async create(name:string) {
          let quizType = await this.model.findOne({name:name})
          if(quizType) {
               throw new ForbiddenException('found')
          }
          quizType = await this.model.create({
               name:name
          })

          return quizType
     }

     async views() {
          const quizTypes = await this.model.find()
          if(!quizTypes) {
               throw new ForbiddenException('not found')
          }

          return quizTypes
     }

     async view(id:string) {
          const quizType = await this.model.findById(id)
          if(!quizType) {
               throw new ForbiddenException('not found this id')
          }
          return quizType
     }

}