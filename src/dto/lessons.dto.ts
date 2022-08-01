import {
     IsNotEmpty,
     IsArray,
     IsString
} from 'class-validator'

export class LessonsDto {
     @IsNotEmpty()
     @IsString()
     name: string

     @IsNotEmpty()
     @IsArray()
     quizzes: [{
          public_id: string,
          userId: string
     }]

}