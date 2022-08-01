import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';


export type UnitsDocument = Units & Document

@Schema({timestamps: true})
export class Units {
     @Prop({required: true})
     name: string

     @Prop({required: true, default: 'https://animax.mn/uploaded/images/2022/Jun/1-287636801_282033280782490_2562188861892160572_n.jpg'})
     image: string

     @Prop({public_id: {type: mongoose.Schema.Types.ObjectId, required: true}})
     levels: [
          public_id: string
     ]
}

export const UnitsSchema = SchemaFactory.createForClass(Units) 