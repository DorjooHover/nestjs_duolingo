import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";
import mongoose from 'mongoose';

export type LessonsDocument = Lessons & Document

@Schema({timestamps: true})
export class Lessons {
     @Prop({required: true})
     name: string

     @Prop({public_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Quizzes', required: true}, user_id: {required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Users'}, performance: {required: true, max: 100, default: 0}})
     quizzes: [{
          public_id: string,
          user_id: string,
          performance: number
     }]

}

export const LessonsSchema = SchemaFactory.createForClass(Lessons)