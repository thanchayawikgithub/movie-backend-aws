import { IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  ticketPrice: number;

  @IsNotEmpty()
  showId: number;

  @IsNotEmpty()
  seatId: number;
}
