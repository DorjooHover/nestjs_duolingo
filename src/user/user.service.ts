import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "../dto";
import { User, UserDocument } from "../Schema/user.schema";


@Injectable()
export class UserService {
     constructor(@InjectModel(User.name) private  userModel: Model<UserDocument>){}

     async signup(dto: UserDto): Promise<User[]> {
          return  this.userModel.find().exec()
     }

     
}