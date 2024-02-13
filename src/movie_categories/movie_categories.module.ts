import { Module } from '@nestjs/common';
import { MovieCategoriesService } from './movie_categories.service';
import { MovieCategoriesController } from './movie_categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieCategory } from './entities/movie_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieCategory])],
  controllers: [MovieCategoriesController],
  providers: [MovieCategoriesService],
})
export class MovieCategoriesModule {}
