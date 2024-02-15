import { IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  ticketPrice: number;

  @IsNotEmpty()
  customerId: number;

  @IsNotEmpty()
  showId: number;

  @IsNotEmpty()
  seatId: number;
}
