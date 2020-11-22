import { Module } from '@nestjs/common';
import MongoConnection from './config/database';
import { UserModule } from './modules/user';
import { SurveyModule } from './modules/survey';

@Module({
  imports: [MongoConnection, UserModule, SurveyModule],
})
export class AppModule {}
