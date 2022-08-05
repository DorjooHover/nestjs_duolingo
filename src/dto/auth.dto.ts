import {
     IsEmail,
     IsNotEmpty,
     IsString,
     IsArray,
     IsNumber
   } from 'class-validator';
   
   export class AuthDto {
     @IsEmail()
     @IsNotEmpty()
     email: string;
   
     @IsString()
     @IsNotEmpty()
     image: string;

     @IsString()
     @IsNotEmpty()
     name: string

     @IsString()
     @IsNotEmpty()
     hearAbout: string

     @IsString()
     @IsNotEmpty()
     knowledge: string

     @IsString()
     @IsNotEmpty()
     level: string

     @IsString()
     @IsNotEmpty()
     age: string

     @IsArray()
     @IsNotEmpty()
     languages: [{
      public_id: string
     }]

     
   }

   export class SigninDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
   }