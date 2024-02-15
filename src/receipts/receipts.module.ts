import { Module } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { Receipt } from './entities/receipt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/cards/entities/card.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { ReceiptFood } from 'src/receipt_foods/entities/receipt_food.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
import { Seat } from 'src/seats/entities/seat.entity';
import { Food } from 'src/foods/entities/food.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Receipt,
      Card,
      Customer,
      Ticket,
      ReceiptFood,
      Showtime,
      Seat,
      Food,
    ]),
  ],
  controllers: [ReceiptsController],
  providers: [ReceiptsService],
})
export class ReceiptsModule {}
