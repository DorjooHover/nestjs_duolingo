import { Module } from "@nestjs/common";
import { LevelsController } from './levels.controller';
import { LevelsService } from './levels.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Levels } from '../Schema';
import { LevelsSchema } from '../Schema/levels.schema';

@Module({
     imports:[MongooseModule.forFeature([{name: Levels.name,schema: LevelsSchema}])],
     controllers: [LevelsController],
     providers:[LevelsService]
})
export class LevelsModule {}