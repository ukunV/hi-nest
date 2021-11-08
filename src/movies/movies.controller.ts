import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  // nest에서 수동으로하는 import는 잘 사용하지 않음
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query('year') year: number) {
    return `We are searching for a movie mad after: ${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: number) {
    return this.moviesService.delete(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updatedData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updatedData);
  }
}
