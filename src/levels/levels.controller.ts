import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from '../auth/guard';
import { LevelsService } from "./levels.service";
import { LevelsDto } from '../dto';
import { GetUser } from "src/auth/decorator";
import { AuthGuard } from '@nestjs/passport';


@UseGuards(JwtGuard)
@Controller('levels')
export class LevelsController {
     constructor(private service:LevelsService){}
     @Post('create')
     createLevel(@Body() dto:LevelsDto, @GetUser('id') userId:string) {
          return this.service.create(dto,userId)
     }

     @Get('views')
     viewsLevel() {
          return this.service.views()
     }

     @Get('view/:id')
     viewLevel(@Param() id: string) {
          return this.service.view(id)
     }
}