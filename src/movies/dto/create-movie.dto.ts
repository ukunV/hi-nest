// DTO: Data Transfet Object

import { IsNumber, IsOptional, IsString } from 'class-validator';

// validation 검사를 위한 class 생성
export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
