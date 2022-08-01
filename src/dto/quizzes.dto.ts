import {
     IsNotEmpty,
     IsArray,
     IsString
} from 'class-validator'
export class QuizzesDto {
     @IsNotEmpty()
     @IsString()
     name: string

     @IsArray()
     @IsNotEmpty()
     quizTypes: [{
          public_id: string
     }]

     @IsArray()
     @IsNotEmpty()
     questionAndAnswers: [{
          public_id: string,
          user_id:string
     }]
}