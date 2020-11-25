import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { QuestionDTO } from './question.DTO';

export class UpdateSurveyDTO {
  @ApiProperty({ type: String, example: '507f1f77bcf86cd799439011' })
  owner: Types.ObjectId;

  @ApiProperty({ example: '507f1f77bcf86cd799439011' })
  surveyId: string;

  @ApiPropertyOptional({ example: 'Satisfaction survey' })
  title?: string;

  @ApiPropertyOptional({
    example:
      'This survey has as objective to measure our clients satisfaction with our products',
  })
  description?: string;

  @ApiPropertyOptional({ example: new Date() })
  endAt?: Date;

  @ApiPropertyOptional({ type: [QuestionDTO], required: false })
  questions?: Array<QuestionDTO>;
}
