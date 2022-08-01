import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";
import mongoose from 'mongoose';

export type QuizzesDocument = Quizzes & Document

@Schema({timestamps: true})
export class Quizzes {
     @Prop({required: true})
     name: string

     @Prop({public_id:{type: mongoose.Schema.Types.ObjectId, ref: 'QuizTypes', required: true}})
     quiz_types: [{
          public_id: string
     }]

     @Prop({public_id: {type: mongoose.Schema.Types.ObjectId, ref: 'questionAnswers', required: true}, user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true}})
     questionAnswers: [{
          public:string,
          user_id: string
     }]
}

export const QuizzesSchema = SchemaFactory.createForClass(Quizzes)