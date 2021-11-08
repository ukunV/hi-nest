// DTO: Data Transfet Object

import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

// validation 검사를 위한 class 생성
// export class UpdateMovieDTO {
//   @IsString()
//   readonly title?: string; // ?: not required

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
