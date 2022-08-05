import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { LanguageService } from "./language.service";
import { LanguageDto } from '../dto';
import { JwtGuard } from '../auth/guard/jwt.guard';

// @UseGuards(JwtGuard)
@Controller('languages')
export class LanguageController {
     constructor(private service:LanguageService) {}

     @Post('create')
     createLanguage(@Body() dto:LanguageDto) {
          return this.service.create(dto)
     }

     @Get('views')
     viewLanguages() {
          return this.service.views()
     }

     @Get('view/:id')
     viewLanguage(@Param('id') id:string) {
          return this.service.view(id)
     }
}