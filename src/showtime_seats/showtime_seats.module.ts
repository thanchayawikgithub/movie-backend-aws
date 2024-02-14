import { Module } from '@nestjs/common';
import { ShowtimeSeatsService } from './showtime_seats.service';
import { ShowtimeSeatsController } from './showtime_seats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowtimeSeat } from './entities/showtime_seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShowtimeSeat])],
  controllers: [ShowtimeSeatsController],
  providers: [ShowtimeSeatsService],
})
export class ShowtimeSeatsModule {}
