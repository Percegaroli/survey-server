import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from '../schema';
import { NewUserDTO, UpdateUserDTO } from '../DTO';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserById(id: Types.ObjectId) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new BadRequestException(
        `User for id: ${id} not found. Please verify your id and try again`,
      );
    }
    return user;
  }

  async createNewUser(newUserDTO: NewUserDTO) {
    const newUser = new this.userModel(newUserDTO);
    newUser.save();
  }

  async updateUser(updateUserDTO: UpdateUserDTO) {
    const user = await this.findUserById(new Types.ObjectId(updateUserDTO.id));
    Object.keys(updateUserDTO).forEach((key: keyof UpdateUserDTO) => {
      user[key] = updateUserDTO[key];
    });
  }
}
