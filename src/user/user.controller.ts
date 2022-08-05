import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { UserDto } from "../dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
     constructor(private service: UserService) {}

     @Get('view/:email')
     async fetchProfile(@Param('email') email: string) {
          console.log(email)
          return  this.service.fetchProfile(email)
     }

     
}