import { Controller, Post, Patch, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../service';
import { NewUserDTO, UpdateUserDTO } from '../DTO';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Creates a new user and save it to the database' })
  @Post()
  createUser(@Body() newUserDTO: NewUserDTO) {
    return this.userService.createNewUser(newUserDTO);
  }

  @ApiOperation({
    summary: 'Update an existing user',
    description: 'Throws if user dont exists',
  })
  @Patch()
  updateUser(@Body() updateUserDTO: UpdateUserDTO) {
    return this.userService.updateUser(updateUserDTO);
  }
}
