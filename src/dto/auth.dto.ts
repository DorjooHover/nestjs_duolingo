import {
     IsEmail,
     IsNotEmpty,
     IsString,
     IsArray
   } from 'class-validator';
   
   export class AuthDto {
     @IsEmail()
     @IsNotEmpty()
     email: string;
   
     @IsString()
     @IsNotEmpty()
     password: string;

     @IsString()
     @IsNotEmpty()
     name: string

    //  @IsArray()
    //  @IsNotEmpty()
    //  languages: [{
    //   public_id: string
    //  }]
   }

   export class SigninDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
   }