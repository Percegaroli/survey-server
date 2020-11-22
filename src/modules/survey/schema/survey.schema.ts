import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';
import { User } from '../../user/schema';

export type SurveyDocument = Survey & Document;

@Schema()
export class Survey {
  @Prop({ required: true, maxlength: 60 })
  title: string;

  @Prop({ required: true, maxlength: 500 })
  description: string;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ required: true })
  endAt: Date;

  @Prop({ type: schema.Types.ObjectId, ref: User.name })
  owner: User;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
