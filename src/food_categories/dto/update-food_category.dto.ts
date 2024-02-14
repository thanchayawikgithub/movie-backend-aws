import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodCategoryDto } from './create-food_category.dto';

export class UpdateFoodCategoryDto extends PartialType(CreateFoodCategoryDto) {}
