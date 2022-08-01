import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from '../auth/guard/jwt.guard';
import { QuizTypesService } from "./quizTypes.service";

@UseGuards(JwtGuard)
@Controller('quizTypes')
export class QuizTypesController {
     constructor(private service:QuizTypesService) {}
     @Post('create')
     create(@Body() name:string) {
          return this.service.create(name)
     }

     @Get('views')
     views() {
          return this.service.views()
     }

     @Get('view/:id')
     view(@Param() id:string) {
          return this.service.view(id)
     }
}