import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type QuizTypesDomucent = QuizTypes & Document

@Schema()
export class QuizTypes  {
     @Prop({required: true})
     name: string
}

export const QuizTypesSchema = SchemaFactory.createForClass(QuizTypes)