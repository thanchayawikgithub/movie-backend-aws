import { IsNotEmpty } from 'class-validator';
import { Card } from 'src/cards/entities/card.entity';
import { CreateReceiptFoodDto } from 'src/receipt_foods/dto/create-receipt_food.dto';
import { ReceiptFood } from 'src/receipt_foods/entities/receipt_food.entity';
import { CreateTicketDto } from 'src/tickets/dto/create-ticket.dto';
import { Ticket } from 'src/tickets/entities/ticket.entity';

export class CreateReceiptDto {
  @IsNotEmpty()
  recTotalPrice: number;

  @IsNotEmpty()
  recPaymentMed: string;

  // @IsNotEmpty()
  // recPaymentStatus: boolean;

  @IsNotEmpty()
  cusId: number;

  @IsNotEmpty()
  showId: number;

  receiptFoods: CreateReceiptFoodDto[];

  @IsNotEmpty()
  tickets: CreateTicketDto[];

  cardId: number;
}
