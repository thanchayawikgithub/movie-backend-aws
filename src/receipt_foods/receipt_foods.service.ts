import { Injectable } from '@nestjs/common';
import { CreateReceiptFoodDto } from './dto/create-receipt_food.dto';
import { UpdateReceiptFoodDto } from './dto/update-receipt_food.dto';

@Injectable()
export class ReceiptFoodsService {
  create(createReceiptFoodDto: CreateReceiptFoodDto) {
    return 'This action adds a new receiptFood';
  }

  findAll() {
    return `This action returns all receiptFoods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receiptFood`;
  }

  update(id: number, updateReceiptFoodDto: UpdateReceiptFoodDto) {
    return `This action updates a #${id} receiptFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} receiptFood`;
  }
}
