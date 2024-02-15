import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Customer, Ticket])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
