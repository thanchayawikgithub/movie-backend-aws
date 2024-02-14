import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptFoodDto } from './create-receipt_food.dto';

export class UpdateReceiptFoodDto extends PartialType(CreateReceiptFoodDto) {}
