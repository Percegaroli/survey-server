import { MongooseModule } from '@nestjs/mongoose';

export default MongooseModule.forRoot(process.env.DB_PATH);
