import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';
import { Survey } from '../../survey/schema';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  id: number;

  @Prop({ minlength: 3, required: true })
  name: string;

  @Prop({ minlength: 5, required: true })
  lastName: string;

  @Prop({ required: true, minlength: 8 })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  company?: string;

  @Prop()
  function?: string;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;

  @Prop([{ type: schema.Types.ObjectId, ref: Survey.name }])
  surveys: Array<Survey>;
}

export const UserSchema = SchemaFactory.createForClass(User);
