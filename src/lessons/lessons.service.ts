import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Lessons, LessonsDocument } from "src/Schema";
import { Model } from 'mongoose';
import { LessonsDto } from "src/dto";

@Injectable()
export class LessonsService {
     constructor(@InjectModel(Lessons.name) private lessonsModel:Model<LessonsDocument>) {}

     async create(dto:LessonsDto, userId:string) {
          let lesson = await this.lessonsModel.findOne({name:dto.name})
          if(lesson) {
               throw new ForbiddenException(
                    'founded this name'
               )
          }

          lesson = await this.lessonsModel.create({
               name:dto.name,
               quizzes: dto.quizzes.map((item) => {
                    return {
                         public_id: item.public_id,
                         user_id: userId
                    }
               })
          })
          return lesson
     }

     async views(userId:string) {
          const lessons = await this.lessonsModel.find()
          if(!lessons) {
               throw new ForbiddenException(
                    'not found '
               )
          }
          return lessons
     }

     async view(id:string, userId:string) {
          const lesson = await this.lessonsModel.findById(id)
          if(!lesson) {
               throw new ForbiddenException('not found')
          }
          return lesson
     }
}