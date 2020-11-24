import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty({ example: '507f1f77bcf86cd799439011' })
  id: string;

  @ApiPropertyOptional({ example: 'Reginaldo' })
  name?: string;

  @ApiPropertyOptional({ example: 'Rafael' })
  lastName?: string;

  @ApiPropertyOptional({ example: 'Renner' })
  company?: string;

  @ApiPropertyOptional({ example: 'Reader' })
  function?: string;

  @ApiPropertyOptional({ example: 'Ramal1234' })
  password?: string;
}
