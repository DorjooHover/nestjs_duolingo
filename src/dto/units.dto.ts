import {
     IsNotEmpty,
     IsString,
     IsArray
   } from 'class-validator';

export class UnitsDto {
     @IsNotEmpty()
     @IsString()
     name: string

     @IsNotEmpty()
     @IsString()
     image: string

     @IsNotEmpty()
     @IsArray()
     levels: [{
          public_id: string
     }]

     
}