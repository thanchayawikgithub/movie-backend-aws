import { Injectable } from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Theater } from './entities/theater.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TheatersService {
  constructor(
    @InjectRepository(Theater)
    private theaterRepository: Repository<Theater>,
  ) {}
  create(createTheaterDto: CreateTheaterDto) {
    return 'This action adds a new theater';
  }

  findAll() {
    return `This action returns all theaters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theater`;
  }

  async findShowtimeTheater(movieId: number) {
    const theaters = await this.theaterRepository.find({
      where: { showtimes: { movie: { movieId: movieId } } },
      relations: { showtimes: true },
    });
    return theaters;
  }

  update(id: number, updateTheaterDto: UpdateTheaterDto) {
    return `This action updates a #${id} theater`;
  }

  remove(id: number) {
    return `This action removes a #${id} theater`;
  }
}
