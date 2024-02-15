import { IsNotEmpty } from 'class-validator';

export class CreateReceiptFoodDto {
  @IsNotEmpty()
  recFoodQty: number;

  @IsNotEmpty()
  recFoodPrice: number;

  @IsNotEmpty()
  foodId: number;
}
