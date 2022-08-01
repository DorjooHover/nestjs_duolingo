import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";
import mongoose from 'mongoose';


export type LanguageDocument = Language & Document

@Schema({timestamps: true})
export class Language {


     @Prop({required: true})
     name: string

     @Prop({required: true, default: "https://animax.mn/uploaded/images/2022/Jul/1-drstone2.jpg"})
     image: string

     @Prop({public_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Units" }})
     units: [{
          public_id: string
     }]

     @Prop({public_id : {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Lessons"} })
     lessons: [{
          public_id: string
     }]

}

export const LanguageSchema = SchemaFactory.createForClass(Language)