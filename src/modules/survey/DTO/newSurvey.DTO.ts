import { Types } from 'mongoose';
import { Question } from '../schema/question';

export class NewSurveyDTO {
  owner: Types.ObjectId;
  title: string;
  description: string;
  endAt: Date;
  questions: Array<Question>;
}
