import {
     IsNotEmpty,
     IsString,
     IsArray
   } from 'class-validator';

export class LanguageDto {
     @IsNotEmpty()
     @IsString()
     name: string

     @IsNotEmpty()
     @IsArray()
     units: [{
          public_id: string
     }]

     @IsNotEmpty()
     @IsArray()
     lessons: [{
          public_id: string
     }]

     @IsNotEmpty()
     @IsString()
     image: string
}