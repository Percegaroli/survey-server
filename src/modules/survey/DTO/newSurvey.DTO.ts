import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { QuestionDTO } from './question.DTO';

export class NewSurveyDTO {
  @ApiProperty({ type: String, example: '507f1f77bcf86cd799439011' })
  owner: Types.ObjectId;

  @ApiProperty({ example: 'Satisfaction survey' })
  title: string;

  @ApiProperty({
    example:
      'This survey has as objective to measure our clients satisfaction with our products',
  })
  description: string;

  @ApiProperty({ example: new Date() })
  endAt: Date;

  @ApiProperty({
    type: [QuestionDTO],
    minItems: 1,
  })
  questions: Array<QuestionDTO>;
}
