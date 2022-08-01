import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { QuizzesService } from './quizzes.service';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { QuizzesDto } from "src/dto";
import { GetUser } from "src/auth/decorator";

@UseGuards(JwtGuard)
@Controller('quizzes')
export class QuizzesController {
     constructor(private service:QuizzesService) {}

     @Post('create')
     create(@Body() dto:QuizzesDto, @GetUser('id') userId:string) {
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