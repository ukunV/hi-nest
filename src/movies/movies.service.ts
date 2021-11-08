import { Injectable, NotFoundException, Patch } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    // 여기에 보통 쿼리 작성
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID${id} not found`);
    }
    return movie;
  }

  delete(id: number) {
    this.getOne(id); // 해당 id의 movie가 없으면 getOne에서 에러 반환
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updatedData: UpdateMovieDTO) {
    const movie = this.getOne(id);
    this.delete(id);
    this.movies.push({ ...movie, ...updatedData });
  }
}
