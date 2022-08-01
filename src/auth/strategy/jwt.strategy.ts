import { Injectable } from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt'
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UserDocument,User } from "../../Schema";
import { InjectModel } from "@nestjs/mongoose";



@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy, 'jwt') {
     constructor(
          config: ConfigService, 
          @InjectModel(User.name) private  userModel: Model<UserDocument>,
          ) {
          super({
               jwtFromRequest:
               ExtractJwt.fromAuthHeaderAsBearerToken(),
               secretOrKey: config.get('JWT_SECRET')
          })
     }

     async validate(payload: {
          sub: string, email: string
     }) {
          const user = await this.userModel.findOne({email: payload.email})
          delete user.password
          return user
     }
}

