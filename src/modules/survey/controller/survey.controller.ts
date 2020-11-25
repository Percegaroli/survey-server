import { Controller, Post, Patch, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBadRequestResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { SurveyService } from '../service';
import { NewSurveyDTO, UpdateSurveyDTO } from '../DTO';

@ApiTags('Survey')
@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @ApiOperation({ summary: 'Creates a new survey' })
  @Post()
  createSurvey(@Body() newSurveyDTO: NewSurveyDTO) {
    return this.surveyService.createSurvey(newSurveyDTO);
  }

  @ApiOperation({ summary: 'Updates an existing survey' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  @Patch()
  updateSurvey(@Body() updateSurveyDTO: UpdateSurveyDTO) {
    return this.surveyService.updateSurvey(updateSurveyDTO);
  }
}
