import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from '../schema';
import { NewUserDTO, UpdateUserDTO } from '../DTO';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserById(id: Types.ObjectId) {
    return await this.userModel.findById(id);
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
