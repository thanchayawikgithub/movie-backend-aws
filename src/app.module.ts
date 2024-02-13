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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'movie.db',
      entities: [Movie, Showtime, MovieCategory, Review, Ticket],
      synchronize: true,
    }),
    MoviesModule,

    ShowtimesModule,

    MovieCategoriesModule,

    ReviewsModule,

    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
