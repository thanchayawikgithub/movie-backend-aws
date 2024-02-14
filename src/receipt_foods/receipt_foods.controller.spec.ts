import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptFoodsController } from './receipt_foods.controller';
import { ReceiptFoodsService } from './receipt_foods.service';

describe('ReceiptFoodsController', () => {
  let controller: ReceiptFoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiptFoodsController],
      providers: [ReceiptFoodsService],
    }).compile();

    controller = module.get<ReceiptFoodsController>(ReceiptFoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
