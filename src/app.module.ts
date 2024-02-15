import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie.entity';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { Showtime } from './showtimes/entities/showtime.entity';
import { MovieCategoriesModule } from './movie_categories/movie_categories.module';
import { MovieCategory } from './movie_categories/entities/movie_category.entity';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/entities/review.entity';
import { TicketsModule } from './tickets/tickets.module';
import { Ticket } from './tickets/entities/ticket.entity';
import { SeatsModule } from './seats/seats.module';
import { Seat } from './seats/entities/seat.entity';
import { TheatersModule } from './theaters/theaters.module';
import { Theater } from './theaters/entities/theater.entity';
import { ShowtimeSeatsModule } from './showtime_seats/showtime_seats.module';
import { ShowtimeSeat } from './showtime_seats/entities/showtime_seat.entity';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { CardsModule } from './cards/cards.module';
import { Card } from './cards/entities/card.entity';
import { ReceiptsModule } from './receipts/receipts.module';
import { Receipt } from './receipts/entities/receipt.entity';
import { FoodsModule } from './foods/foods.module';
import { Food } from './foods/entities/food.entity';
import { FoodCategoriesModule } from './food_categories/food_categories.module';
import { FoodCategory } from './food_categories/entities/food_category.entity';
import { ReceiptFoodsModule } from './receipt_foods/receipt_foods.module';
import { ReceiptFood } from './receipt_foods/entities/receipt_food.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'movie.db',
      entities: [
        Movie,
        Showtime,
        MovieCategory,
        Review,
        Ticket,
        Seat,
        Theater,
        ShowtimeSeat,
        Customer,
        Card,
        Receipt,
        Food,
        FoodCategory,
        ReceiptFood,
      ],
      synchronize: true,
    }),
    MoviesModule,

    ShowtimesModule,

    MovieCategoriesModule,

    ReviewsModule,

    TicketsModule,

    SeatsModule,

    TheatersModule,

    ShowtimeSeatsModule,

    CustomersModule,

    CardsModule,

    ReceiptsModule,

    FoodsModule,

    FoodCategoriesModule,

    ReceiptFoodsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
