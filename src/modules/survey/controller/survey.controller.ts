import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SurveyService } from '../service';
import { NewSurveyDTO } from '../DTO';

@ApiTags('Survey')
@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @ApiOperation({ summary: 'Creates a new survey' })
  @Post()
  createSurvey(@Body() newSurveyDTO: NewSurveyDTO) {
    return this.surveyService.createSurvey(newSurveyDTO);
  }
}
