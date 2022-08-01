import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserDto } from "../dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
     constructor(private service: UserService) {}

     @Get('post')
     async test(@Body() dto: UserDto) {
          console.log(dto)
          return  this.service.signup(dto)
     }

     
}