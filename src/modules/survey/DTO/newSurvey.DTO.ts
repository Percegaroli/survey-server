import { Types } from 'mongoose';

export class NewSurveyDTO {
  owner: Types.ObjectId;
  title: string;
  description: string;
  endAt: Date;
  questions: Array<Question>;
}
