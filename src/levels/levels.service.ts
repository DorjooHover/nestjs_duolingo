import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Levels, LevelsDocument } from '../Schema';
import { Model } from 'mongoose';
import { LevelsDto } from "src/dto";

@Injectable()
export class LevelsService {
     constructor(@InjectModel(Levels.name) private levelsModel: Model<LevelsDocument>){}
     
     async create( dto:LevelsDto, userId: string) {
          let levels = await this.levelsModel.findOne({name:dto.name})
          if(levels) {
               throw new ForbiddenException('error founded name')
          }

          levels = await this.levelsModel.create({
               name:dto.name,
               lessons: 
                    dto.lessons.map((item) => {
                         return {
                              public_id: item.public_id,
                              user_id: userId
                         }
                    })
               
          })

          // delete levels.lessons.[0].user_id
          return levels
     }

     async views() {
          const levels = await this.levelsModel.find()
          if(!levels) {
               throw new ForbiddenException(
                    'not found levels'
               )
          }

          return levels
     }

     async view(id:string) {
          const level = await this.levelsModel.findById(id)

          if(!level) {
               throw new ForbiddenException(
                    'not found level this id'
               )
          }

          return level
     }
}