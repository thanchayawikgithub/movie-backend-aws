import { Test, TestingModule } from '@nestjs/testing';
import { MovieCategoriesController } from './movie_categories.controller';
import { MovieCategoriesService } from './movie_categories.service';

describe('MovieCategoriesController', () => {
  let controller: MovieCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieCategoriesController],
      providers: [MovieCategoriesService],
    }).compile();

    controller = module.get<MovieCategoriesController>(
      MovieCategoriesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
