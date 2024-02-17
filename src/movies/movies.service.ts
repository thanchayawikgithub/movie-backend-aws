import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { Showtime } from 'src/showtimes/entities/showtime.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Showtime)
    private showtimeRepository: Repository<Showtime>,
  ) {}
  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    return this.movieRepository.find({
      relations: {
        showtimes: true,
        categories: true,
        reviews: true,
      },
    });
  }

  findOne(id: number) {
    return this.movieRepository.findOne({
      where: {
        movieId: id,
      },
      relations: {
        categories: true,
        reviews: true,
        showtimes: {
          theater: true,
        },
      },
    });
  }

  findShowtime(showId: number) {
    return this.showtimeRepository.findOne({
      where: {
        showId: showId,
      },
      relations: {
        movie: true,
        theater: true,
        showtimeseats: {
          seat: true,
        },
      },
    });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
