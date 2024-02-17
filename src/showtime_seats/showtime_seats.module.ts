import { Module } from '@nestjs/common';
import { ShowtimeSeatsService } from './showtime_seats.service';
import { ShowtimeSeatsController } from './showtime_seats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowtimeSeat } from './entities/showtime_seat.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShowtimeSeat, Showtime])],
  controllers: [ShowtimeSeatsController],
  providers: [ShowtimeSeatsService],
})
export class ShowtimeSeatsModule {}
