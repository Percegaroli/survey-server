import { ApiProperty, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { QuestionType } from '../../../enum/Survey';
import { AvaliationQuestionConfigDTO } from './avaliationQuestionConfig.DTO';
import { OptionQuestionConfigDTO } from './optionQuestionConfig.DTO';
import { TextQuestionConfigDTO } from './textQuestionConfig.DTO';

@ApiExtraModels(
  AvaliationQuestionConfigDTO,
  OptionQuestionConfigDTO,
  TextQuestionConfigDTO,
)
export class QuestionDTO {
  @ApiProperty({ enum: QuestionType, enumName: 'QuestionType' })
  type: QuestionType;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(AvaliationQuestionConfigDTO) },
      { $ref: getSchemaPath(OptionQuestionConfigDTO) },
      { $ref: getSchemaPath(TextQuestionConfigDTO) },
    ],
  })
  config:
    | AvaliationQuestionConfigDTO
    | OptionQuestionConfigDTO
    | TextQuestionConfigDTO;
}
