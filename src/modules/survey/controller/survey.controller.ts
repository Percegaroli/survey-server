import { Controller, Post, Body } from '@nestjs/common';
import { SurveyService } from '../service';
import { NewSurveyDTO } from '../DTO';

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @Post()
  createSurvey(@Body() newSurveyDTO: NewSurveyDTO) {
    return this.surveyService.createSurvey(newSurveyDTO);
  }
}
