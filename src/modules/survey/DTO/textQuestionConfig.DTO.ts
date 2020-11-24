import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class TextQuestionConfigDTO {
  @ApiPropertyOptional({ example: 300 })
  maxLength: number;

  @ApiPropertyOptional({
    example: 10,
    description: 'Becomes required if answer is required',
  })
  minLength: number;

  @ApiProperty()
  isRequired: boolean;
}
