import { Module } from '@nestjs/common';
import MongoConnection from './config/database';

@Module({
  imports: [MongoConnection],
})
export class AppModule {}
