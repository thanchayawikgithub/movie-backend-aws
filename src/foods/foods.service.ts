import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodsService {
  @InjectRepository(Food)
  private foodRepository: Repository<Food>;
  create(createFoodDto: CreateFoodDto) {
    return 'This action adds a new food';
  }

  findAll() {
    return `This action returns all foods`;
  }
  async findByCat(categoryId: number) {
    const foods = await this.foodRepository.find({
      where: { foodcat: { foodCatId: categoryId } },
      relations: { foodcat: true },
    });
    return foods;
  }

  async findOne(id: number) {
    const food = await this.foodRepository.findOne({
      where: { foodId: id },
    });

    if (!food) {
      throw new NotFoundException('food not found');
    }
    return food;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}
