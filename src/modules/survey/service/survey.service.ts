import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Survey, SurveyDocument } from '../schema';
import { NewSurveyDTO } from '../DTO';
import { UserService } from '../../user/service';
import { UserDocument } from '../../user/schema';

@Injectable()
export class SurveyService {
  constructor(
    @InjectModel(Survey.name)
    private surveyModel: Model<SurveyDocument>,
    private userService: UserService,
  ) {}

  async createSurvey(newSurveyDTO: NewSurveyDTO) {
    const surveyOwner = await this.userService.findUserById(newSurveyDTO.owner);
    const newSurvey = new this.surveyModel(newSurveyDTO);
    this.saveSurvey(newSurvey, surveyOwner);
  }

  private async saveSurvey(survey: SurveyDocument, owner: UserDocument) {
    survey.owner = owner;
    owner.surveys.push(survey);
    await survey.save();
    owner.save();
  }
}
