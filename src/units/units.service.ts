import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Units, UnitsSchema,UnitsDocument } from '../Schema';
import { Model } from 'mongoose';
import { UnitsDto } from "src/dto";

@Injectable()
export class UnitsService {
     constructor(@InjectModel(Units.name) private unitsModel: Model<UnitsDocument>){}

     async create(dto:UnitsDto) {
          let unit = await this.unitsModel.findOne({name:dto.name})
          if(unit) {
               throw new ForbiddenException(
                    'Бүртгэлтэй unit'
               )
          }
          unit = await this.unitsModel.create({
               name:dto.name,
               image:dto.image,
               levels:dto.levels
          })

          return unit
     }

     async views() {
          const units = await this.unitsModel.find()
          if(!units) {
               throw new ForbiddenException(
                    'unit байхгүй'
               )
          }
          return units
     }

     async view(id:string) {
          const unit = await this.unitsModel.findById(id)
          if(!unit) {
               throw new ForbiddenException(
                    'Бүртгэлгүй unit'
               )
          }

          return unit
     }
}