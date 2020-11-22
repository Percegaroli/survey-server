import { Module } from '@nestjs/common';
import MongoConnection from './config/database';
import { UserModule } from './modules/user';

@Module({
  imports: [MongoConnection, UserModule],
})
export class AppModule {}
