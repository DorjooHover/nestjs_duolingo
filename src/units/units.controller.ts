import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UnitsDto } from "src/dto";
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
     constructor(private service: UnitsService) {}

     @Post('create')
     create(@Body() dto:UnitsDto) {
          return this.service.create(dto)
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