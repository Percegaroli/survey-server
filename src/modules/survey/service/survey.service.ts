import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Survey, SurveyDocument } from '../schema';
import { NewSurveyDTO, UpdateSurveyDTO } from '../DTO';
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

  async updateSurvey(updateSurveyDTO: UpdateSurveyDTO) {
    const [surveyOwner, survey] = await Promise.all([
      this.userService.findUserById(updateSurveyDTO.owner),
      this.findSurveyById(updateSurveyDTO.surveyId),
    ]);
    this.checkIfUserIsSurveyOwner(surveyOwner, survey);
    this.checkIfSurveyIsntClosed(survey);
    this.returnsUpdatedSurvey(updateSurveyDTO, survey).save();
  }

  private returnsUpdatedSurvey = (
    updateSurveyDTO: UpdateSurveyDTO,
    survey: SurveyDocument,
  ) => {
    survey.title = updateSurveyDTO.title ?? survey.title;
    survey.description = updateSurveyDTO.description ?? survey.description;
    survey.endAt = updateSurveyDTO.endAt ?? survey.endAt;
    survey.questions = updateSurveyDTO.questions ?? survey.questions;
    return survey;
  };

  private checkIfUserIsSurveyOwner(user: UserDocument, survey: SurveyDocument) {
    if (survey.owner == user._id) {
      throw new BadRequestException(
        'User specified is not the owner of this survey',
      );
    }
  }

  private checkIfSurveyIsntClosed(survey: SurveyDocument) {
    if (survey.endAt <= new Date()) {
      throw new BadRequestException('Closed surveys cant be updated');
    }
  }

  private async findSurveyById(id: string) {
    const survey = await this.surveyModel.findById(id);
    if (!survey) {
      throw new BadRequestException(
        `Not found an existing survey with id: ${id}. Please verify this id and try again`,
      );
    }
    return survey;
  }

  private async saveSurvey(survey: SurveyDocument, owner: UserDocument) {
    survey.owner = owner._id;
    owner.surveys.push(survey._id);
    await survey.save();
    owner.save();
  }
}
