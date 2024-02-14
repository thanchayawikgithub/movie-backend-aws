import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptFoodsService } from './receipt_foods.service';

describe('ReceiptFoodsService', () => {
  let service: ReceiptFoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiptFoodsService],
    }).compile();

    service = module.get<ReceiptFoodsService>(ReceiptFoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
