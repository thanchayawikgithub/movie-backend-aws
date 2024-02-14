import { Test, TestingModule } from '@nestjs/testing';
import { EntrylogsController } from './entrylogs.controller';
import { EntrylogsService } from './entrylogs.service';

describe('EntrylogsController', () => {
  let controller: EntrylogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrylogsController],
      providers: [EntrylogsService],
    }).compile();

    controller = module.get<EntrylogsController>(EntrylogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
