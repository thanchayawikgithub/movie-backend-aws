import { Injectable } from '@nestjs/common';
import { CreateShowtimeSeatDto } from './dto/create-showtime_seat.dto';
import { UpdateShowtimeSeatDto } from './dto/update-showtime_seat.dto';

@Injectable()
export class ShowtimeSeatsService {
  create(createShowtimeSeatDto: CreateShowtimeSeatDto) {
    return 'This action adds a new showtimeSeat';
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
