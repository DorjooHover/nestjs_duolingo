import {
     IsArray,
     IsString,
     IsNotEmpty
} from 'class-validator'

export class QuestionAndAnswersDto {
     @IsNotEmpty()
     @IsString()
     name:string
     
     @IsNotEmpty()
     @IsArray()
     question: [{
          question:string,
          voice:string,
          subquestions: [{
               word:string,
               voice:string
          }]
     }]

     @IsNotEmpty()
     @IsArray()
     answers: [{
          text: {{
               id:string,
               answer:string,
               voide:string,
               image:string
          },
          {
               correctAnswer: {
                    correctId: string,
                    correctAnswer:string
               }
          }
          },
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
               }
          ]
     }]
}