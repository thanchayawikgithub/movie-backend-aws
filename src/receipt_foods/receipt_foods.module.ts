import { Module } from '@nestjs/common';
import { ReceiptFoodsService } from './receipt_foods.service';
import { ReceiptFoodsController } from './receipt_foods.controller';
import { ReceiptFood } from './entities/receipt_food.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReceiptFood])],
  controllers: [ReceiptFoodsController],
  providers: [ReceiptFoodsService],
})
export class ReceiptFoodsModule {}
