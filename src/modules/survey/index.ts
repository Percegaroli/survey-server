import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyController } from './controller';
import { SurveyService } from './service';
import { UserService } from '../user/service';
import { Survey, SurveySchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
  ],
  controllers: [SurveyController],
  providers: [UserService, SurveyService],
})
export class SurveyModule {}
