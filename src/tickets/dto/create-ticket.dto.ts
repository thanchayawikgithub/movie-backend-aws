import { IsNotEmpty } from 'class-validator';
import { ShowtimeSeat } from 'src/showtime_seats/entities/showtime_seat.entity';

export class CreateTicketDto {
  @IsNotEmpty()
  showtimeSeatId: number;
}
