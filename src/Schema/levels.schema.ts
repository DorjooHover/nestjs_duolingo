import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";
import mongoose from 'mongoose';

export type LevelsDocument = Levels & Document

@Schema({timestamps: true})
export class Levels {
     @Prop({required: true})
     name: string

     @Prop({public_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Lessons'}, user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}, performance: { default: 0, max: 100, required: true}})
     lessons: [{
          public_id: string,
          user_id: string,
          performance: number
     }]
}

export const LevelsSchema =  SchemaFactory.createForClass(Levels)