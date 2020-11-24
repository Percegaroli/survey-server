import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class NewUserDTO {
  @ApiProperty({ example: 'Rodolfo' })
  name: string;

  @ApiProperty({ example: 'Romulo' })
  lastName: string;

  @ApiProperty({ example: 'rodolfo1337@gmail.com' })
  email: string;

  @ApiProperty({ example: 'rodolfinho123' })
  password: string;

  @ApiPropertyOptional({ example: 'Facebook' })
  company?: string;

  @ApiPropertyOptional({ example: 'Senior Developer' })
  function?: string;
}
