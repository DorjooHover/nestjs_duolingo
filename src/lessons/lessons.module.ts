import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Lessons, LessonsSchema } from "src/Schema";
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';

@Module({
     imports: [MongooseModule.forFeature([{name: Lessons.name, schema: LessonsSchema}])],
     controllers: [LessonsController],
     providers: [LessonsService]
})
export class LessonsModule {}