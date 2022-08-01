import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Units, UnitsSchema } from '../Schema';
import { UnitsController } from './units.controller';
import { UnitsService } from './units.service';


@Module({
     imports: [MongooseModule.forFeature([{name: Units.name, schema: UnitsSchema}])],
     controllers: [UnitsController],
     providers: [UnitsService]
})

export class UnitsModule {}