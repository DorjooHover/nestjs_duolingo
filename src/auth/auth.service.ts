import { ForbiddenException, Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { UserDocument, User } from '../Schema';
import {JwtService} from '@nestjs/jwt'
import { AuthDto, SigninDto} from "../dto";
import { ConfigService } from '@nestjs/config';
import { InjectModel } from "@nestjs/mongoose";
import * as argon from 'argon2'

@Injectable()
export class AuthService {
     constructor(
          @InjectModel(User.name) private  userModel: Model<UserDocument>,
          private jwt: JwtService,
          private config: ConfigService
     ){}

     async signup(dto: AuthDto) {
          let user = await this.userModel.findOne({email: dto.email})
          if(user) {
               throw new ForbiddenException(
                    'Бүртгэлтэй имайл байна.'
               )
          }

          const hash = await argon.hash(dto.password)
          
          try {
                user = await this.userModel.create({
                    email: dto.email,
                    name: dto.name,
                    password: hash,
                    // languages: dto.languages
               })
               return this.signToken(user._id, user.email )
          } catch (error) {
               throw error
          }
          
     }
     async signin(dto: SigninDto) {
          const user = await this.userModel.findOne({email: dto.email})

          if(!user) {
               throw new ForbiddenException(
                    'Бүртгэлгүй имайл хаяг байна.'
               )
          }

          // compare password
          const passwordMatch = await argon.verify(
               user.password, dto.password
          )

          if(!passwordMatch) {
               throw new ForbiddenException(
                    'Нууц үг алдаатай байна'
               )
          }
          return this.signToken(user._id, user.email )
     }

     async signToken(
          userId: number,
          email: string,
     ) : Promise<{access_token: string}> {
          const payload = {
               sub: userId,
               email
          }
          const secret = this.config.get('JWT_SECRET')
          const token = await this.jwt.signAsync(
               payload, 
               {
                    expiresIn: '1h',
                    secret: secret
               }
          )

          return {
               access_token: token
          }
     }
}
