import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type QuestionAndAnswersDocument = QuestionAndAnswers & Document

@Schema({timestamps: true})
export class QuestionAndAnswers {
     @Prop({required: true})
     name: string

     @Prop({required: true})
     question: [{
          question: string,
          voice: string,
          subquestions: [{
               word:string,
               voice:string
          }] 
     }]

     @Prop({required: true})
     answers: [{
          text: [{
               answer: {
                    id:string
                    answer: string,
                    voice:string,
                    image:string
          }, 
               correctAnswer: {
                    correctId:string,
                    correctAnswer: string
          }}],
          connect: [
          {
               question: {
                    id:string,
                    question: string,
                    voice:string,
                    correctAnswer:string
               },
               answer: {
                    id:string,
                    answer:string,
                    voice:string,
               },
          }]
     }]

}

export const QuestionAndAnswersSchema = SchemaFactory.createForClass(QuestionAndAnswers)