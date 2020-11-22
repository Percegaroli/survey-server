import { Avaliation, Options, Text } from './config';
import { QuestionType } from '../../../../enum/Survey';

export class Question {
  type: QuestionType;
  config: Avaliation | Options | Text;
}
