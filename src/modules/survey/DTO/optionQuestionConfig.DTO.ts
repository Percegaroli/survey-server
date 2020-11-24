import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OptionQuestionConfigDTO {
  @ApiProperty({ examples: ['Disliked', 'Liked', 'Loved'] })
  options: Array<string>;

  @ApiPropertyOptional({ example: 1 })
  minSelected?: number;

  @ApiPropertyOptional({ example: 3 })
  maxSelected?: number;

  @ApiProperty({ example: true })
  isRequired?: boolean;
}
