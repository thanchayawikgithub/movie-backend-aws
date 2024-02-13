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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'movie.db',
      entities: [Movie, Showtime, MovieCategory],
      synchronize: true,
    }),
    MoviesModule,

    ShowtimesModule,

    MovieCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
