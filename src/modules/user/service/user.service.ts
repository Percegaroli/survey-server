import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema';
import { NewUserDTO } from '../DTO';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createNewUser(newUserDTO: NewUserDTO) {
    const newUser = new this.userModel(newUserDTO);
    newUser.save();
  }
}
