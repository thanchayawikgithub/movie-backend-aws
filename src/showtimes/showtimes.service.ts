import { Injectable } from '@nestjs/common';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Showtime } from './entities/showtime.entity';
import { Repository } from 'typeorm';
import { ShowtimeSeat } from 'src/showtime_seats/entities/showtime_seat.entity';

@Injectable()
export class ShowtimesService {
  constructor(
    @InjectRepository(Showtime)
    private showtimeRepository: Repository<Showtime>,
  ) {}
  create(createShowtimeDto: CreateShowtimeDto) {
    return 'This action adds a new showtime';
  }

  findAll() {
    return `This action returns all showtimes`;
  }

  findOne(id: number) {
    return this.showtimeRepository.findOne({
      where: { showId: id },
      relations: ['movie', 'theater', 'showtimeseats'],
    });
  }

  update(id: number, updateShowtimeDto: UpdateShowtimeDto) {
    return `This action updates a #${id} showtime`;
  }

  remove(id: number) {
    return `This action removes a #${id} showtime`;
  }
}
