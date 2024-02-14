import { Module } from '@nestjs/common';
import { FoodCategoriesService } from './food_categories.service';
import { FoodCategoriesController } from './food_categories.controller';
import { FoodCategory } from './entities/food_category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FoodCategory])],
  controllers: [FoodCategoriesController],
  providers: [FoodCategoriesService],
})
export class FoodCategoriesModule {}
