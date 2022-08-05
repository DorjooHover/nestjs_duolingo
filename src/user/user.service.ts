import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "../dto";
import { User, UserDocument } from "../Schema/user.schema";


@Injectable()
export class UserService {
     constructor(@InjectModel(User.name) private  userModel: Model<UserDocument>){}

     async fetchProfile(email: string) {
          const userData = await this.userModel.findOne({email:email}).select('_id name email languages heart image createdAt')
          if(!userData) {
               throw new ForbiddenException('not found')
          }
          return userData
     }

     
}