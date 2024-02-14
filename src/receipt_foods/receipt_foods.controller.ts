import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReceiptFoodsService } from './receipt_foods.service';
import { CreateReceiptFoodDto } from './dto/create-receipt_food.dto';
import { UpdateReceiptFoodDto } from './dto/update-receipt_food.dto';

@Controller('receipt-foods')
export class ReceiptFoodsController {
  constructor(private readonly receiptFoodsService: ReceiptFoodsService) {}

  @Post()
  create(@Body() createReceiptFoodDto: CreateReceiptFoodDto) {
    return this.receiptFoodsService.create(createReceiptFoodDto);
  }

  @Get()
  findAll() {
    return this.receiptFoodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiptFoodsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReceiptFoodDto: UpdateReceiptFoodDto,
  ) {
    return this.receiptFoodsService.update(+id, updateReceiptFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiptFoodsService.remove(+id);
  }
}
