import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../service';
import { NewUserDTO } from '../DTO';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() newUserDTO: NewUserDTO) {
    return await this.userService.createNewUser(newUserDTO);
  }
}
