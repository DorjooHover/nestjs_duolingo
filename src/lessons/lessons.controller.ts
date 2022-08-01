import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { LessonsDto } from "src/dto";
import { LessonsService } from './lessons.service';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { GetUser } from "src/auth/decorator";

@UseGuards(JwtGuard)
@Controller('lessons')
export class LessonsController {
     constructor(private service:LessonsService) {}

     @Post('create')
     create(@Body() dto:LessonsDto, @GetUser('id') userId:string) {
          return this.service.create(dto, userId)
     }

     @Get('views')
     views(@GetUser('id') userId:string) {
          return this.service.views(userId)
     }

     @Get('view/:id')
     view(@Param() id:string, @GetUser('id') userId:string) {
          return this.service.view(id, userId)
     }
}