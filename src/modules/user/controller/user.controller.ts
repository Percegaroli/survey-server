import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../service';
import { NewUserDTO } from '../DTO';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() newUserDTO: NewUserDTO) {
    return this.userService.createNewUser(newUserDTO);
  }
}
