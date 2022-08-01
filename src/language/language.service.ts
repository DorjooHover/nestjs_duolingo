import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { LanguageDto } from '../dto';
import { Language, LanguageDocument } from '../Schema/language.schema';
import { Model } from 'mongoose';

@Injectable()
export class LanguageService {
     constructor(@InjectModel(Language.name) private languageModel: Model<LanguageDocument>) {}

     async create(dto: LanguageDto) {
          let language = await this.languageModel.findOne({name: dto.name})
          if(language) {
               throw new ForbiddenException (
                    'Бүртгэгдсэн хэл байна.'
               )
          }
          language = await this.languageModel.create({
               name: dto.name,
               image: dto.image,
               units: dto.units,
               lessons: dto.lessons
          })
          return language
     }

     async views() {
         const languages = await this.languageModel.find({}).select('name units lessons image')
         if(!languages) {
          throw new ForbiddenException(
               'Бүртгэгдсэн хэл байхгүй байна.'
          )
         }

         return languages
         
     }

     async view(id:string) {
          const language = await this.languageModel.findById(id).select('-__v')
          return language
     }
}