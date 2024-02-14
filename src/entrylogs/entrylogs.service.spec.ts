import { Test, TestingModule } from '@nestjs/testing';
import { EntrylogsService } from './entrylogs.service';

describe('EntrylogsService', () => {
  let service: EntrylogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrylogsService],
    }).compile();

    service = module.get<EntrylogsService>(EntrylogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
