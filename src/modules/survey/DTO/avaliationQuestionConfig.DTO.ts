import { ApiProperty } from '@nestjs/swagger';

export class AvaliationQuestionConfigDTO {
  @ApiProperty({ example: 10 })
  minGrade: number;

  @ApiProperty({ example: 0 })
  maxGrade: number;
}
