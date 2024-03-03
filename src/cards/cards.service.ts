import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  async create(createCardDto: CreateCardDto) {
    const { cusId } = createCardDto;
    const card = new Card();
    const customer = await this.customerRepository.findOne({
      where: { cusId: cusId },
    });
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    card.cardHolderName = createCardDto.cardHolderName;
    card.cardNumber = createCardDto.cardNumber;
    card.cardExpiredDate = createCardDto.cardExpiredDate;
    card.cardCvv = createCardDto.cardCvv;
    card.customer = customer;
    return await this.cardRepository.save(card);
  }

  findAll() {
    return `This action returns all cards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
