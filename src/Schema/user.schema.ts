import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose"

export type UserDocument = User & Document

@Schema({timestamps: true})
export class User {
     @Prop({required: true})
     name: string

     @Prop({required: true, unique: true})
     email: string

     @Prop()
     username: string

     @Prop()
     phone: string


     @Prop({public_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Languages', required: true}})
     languages: [{
          public_id: string
     }]

     @Prop({default: 5, required: true})
     heart: number

     @Prop({required: true, default: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'})
     image: string

     @Prop({required: true, default: false})
     isAdmin: boolean

     @Prop({required: true})
     hearAbout: string

     @Prop({required: true})
     knowledge: string

     @Prop({required: true})
     level: string
     
     @Prop({required: true})
     age: string
     
}

export const UserSchema = SchemaFactory.createForClass(User)