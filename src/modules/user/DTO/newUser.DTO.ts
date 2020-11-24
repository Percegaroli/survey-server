import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class NewUserDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiPropertyOptional()
  company?: string;

  @ApiPropertyOptional()
  function?: string;
}
