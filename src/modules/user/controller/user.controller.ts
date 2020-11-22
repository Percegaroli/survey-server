import { Controller, Post, Patch, Body } from '@nestjs/common';
import { UserService } from '../service';
import { NewUserDTO, UpdateUserDTO } from '../DTO';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() newUserDTO: NewUserDTO) {
    return this.userService.createNewUser(newUserDTO);
  }

  @Patch()
  updateUser(@Body() updateUserDTO: UpdateUserDTO) {
    return this.userService.updateUser(updateUserDTO);
  }
}
