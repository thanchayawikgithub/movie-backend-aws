import { Injectable } from '@nestjs/common';
import { CreateShowtimeSeatDto } from './dto/create-showtime_seat.dto';
import { UpdateShowtimeSeatDto } from './dto/update-showtime_seat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
import { Repository } from 'typeorm';
import { ShowtimeSeat } from './entities/showtime_seat.entity';

@Injectable()
export class ShowtimeSeatsService {
  constructor(
    @InjectRepository(Showtime)
    private showtimeRepository: Repository<Showtime>,
    @InjectRepository(ShowtimeSeat)
    private showtimeSeatRepository: Repository<ShowtimeSeat>,
  ) {}
  create(createShowtimeSeatDto: CreateShowtimeSeatDto) {
    return 'This action adds a new showtimeSeat';
  }

  async createAll() {
    const showtimes = await this.showtimeRepository.find({
      relations: { theater: { seats: true } },
    });

    for (const showtime of showtimes) {
      try {
        for (const seat of showtime.theater.seats) {
          const showtimeSeat = new ShowtimeSeat();
          showtimeSeat.showtime = showtime;
          showtimeSeat.theater = showtime.theater;
          showtimeSeat.seat = seat;
          await this.showtimeSeatRepository.save(showtimeSeat);
        }
      } catch (error) {
        console.error('Error processing showtime:', showtime);
        console.error(error);
      }
    }
  }

  findAll() {
    return `This action returns all showtimeSeats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} showtimeSeat`;
  }

  update(id: number, updateShowtimeSeatDto: UpdateShowtimeSeatDto) {
    return `This action updates a #${id} showtimeSeat`;
  }

  remove(id: number) {
    return `This action removes a #${id} showtimeSeat`;
  }
}
