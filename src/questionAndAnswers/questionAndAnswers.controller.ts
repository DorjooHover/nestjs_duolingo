import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from '../auth/guard/jwt.guard';
import { QuestionAndAnswersService } from './questionAndAnswers.service';
import { QuestionAndAnswersDto } from '../dto/questionAndAnswers.dto';

@UseGuards(JwtGuard)
@Controller('qanda')
export class QuestionAndAnswersController {
     constructor(private service:QuestionAndAnswersService) {}
     
     @Post('create')
     create(@Body() dto:QuestionAndAnswersDto) {
          return this.service.create(dto)
     }

     @Get('views')
     views() {
          return this.service.views()
     }

     @Get('view/:id')
     view(@Param('id') id:string) {
          return this.service.view(id)
     }
}