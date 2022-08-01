import {
     IsNotEmpty,
     IsString,
     IsArray
} from 'class-validator'

export class LevelsDto {
     @IsNotEmpty()
     @IsString()
     name:string

     @IsNotEmpty()
     @IsArray()
     lessons: [{
          public_id: string
     }]
}