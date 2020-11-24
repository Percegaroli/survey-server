import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty()
  id: string;

  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  lastName?: string;

  @ApiPropertyOptional()
  company?: string;

  @ApiPropertyOptional()
  function?: string;

  @ApiPropertyOptional()
  password?: string;
}
