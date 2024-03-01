import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipt } from './entities/receipt.entity';
import { Repository } from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { Card } from 'src/cards/entities/card.entity';
import { ReceiptFood } from 'src/receipt_foods/entities/receipt_food.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Seat } from 'src/seats/entities/seat.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';

import { Food } from 'src/foods/entities/food.entity';
import { v4 as uuidv4 } from 'uuid';
import { ShowtimeSeat } from 'src/showtime_seats/entities/showtime_seat.entity';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt) private receiptRepository: Repository<Receipt>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    @InjectRepository(Card) private cardRepository: Repository<Card>,
    @InjectRepository(ReceiptFood)
    private receiptFoodRepository: Repository<ReceiptFood>,
    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>,
    @InjectRepository(Showtime)
    private showtimeRepository: Repository<Showtime>,
    @InjectRepository(ShowtimeSeat)
    private showtimeSeatRepository: Repository<ShowtimeSeat>,
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
  ) {}
  async create(createReceiptDto: CreateReceiptDto) {
    const { cusId, cardId } = createReceiptDto;
    const receipt = new Receipt();
    const customer = await this.customerRepository.findOne({
      where: { cusId: cusId },
    });
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    console.log(createReceiptDto.cardId);
    if (
      createReceiptDto.recPaymentMethod === 'credit card' &&
      createReceiptDto.cardId
    ) {
      console.log('find card');
      const card = await this.cardRepository.findOne({
        where: { cardId: cardId },
      });
      if (!card) {
        throw new NotFoundException('card not found');
      }
      console.log(card);
      receipt.card = card;
    }
    receipt.recNumber = uuidv4();
    receipt.recTotalPrice = createReceiptDto.recTotalPrice;
    receipt.recPaymentMethod = createReceiptDto.recPaymentMethod;
    receipt.customer = customer;
    const savedReceipt = await this.receiptRepository.save(receipt);

    for (const ticketDto of createReceiptDto.tickets) {
      const { showtimeSeatId } = ticketDto;
      const ticket = new Ticket();
      const showtimeSeat = await this.showtimeSeatRepository.findOne({
        where: { showSeatId: showtimeSeatId },
        relations: { seat: true, showtime: true },
      });
      if (!showtimeSeat) {
        throw new NotFoundException('showtime seat not found');
      }
      ticket.ticketNumber = uuidv4();
      ticket.ticketReviewUrl = `http://localhost:5173/review/${ticket.ticketNumber}`;
      ticket.showtime = showtimeSeat.showtime;
      ticket.seat = showtimeSeat.seat;
      ticket.ticketPrice = showtimeSeat.seat.seatPrice;
      ticket.receipt = savedReceipt;
      await this.ticketRepository.save(ticket);
      showtimeSeat.showSeatStatus = false;
      await this.showtimeSeatRepository.save(showtimeSeat);
    }

    if (createReceiptDto.receiptFoods.length > 0) {
      for (const recFoodDto of createReceiptDto.receiptFoods) {
        const { foodId } = recFoodDto;
        const receiptFood = new ReceiptFood();
        const food = await this.foodRepository.findOne({
          where: { foodId: foodId },
        });
        if (!food) {
          throw new NotFoundException('food not found');
        }
        receiptFood.food = food;
        receiptFood.recFoodPrice = recFoodDto.recFoodPrice;
        receiptFood.recFoodQty = recFoodDto.recFoodQty;
        receiptFood.receipt = savedReceipt;

        await this.receiptFoodRepository.save(receiptFood);
      }
    }
    return this.receiptRepository.findOne({
      where: { receiptId: savedReceipt.receiptId },
      relations: {
        tickets: true,
        recfoods: true,
        customer: true,
      },
    });
  }

  async findAll() {
    return await this.receiptRepository.find({
      relations: {
        customer: true,
        tickets: {
          showtime: {
            movie: true,
          },
          seat: true,
        },
        recfoods: {
          food: true,
        },
      },
      order: {
        creatDate: 'DESC',
      },
    });
  }

  async findAllByCusId(cusId: number) {
    return await this.receiptRepository.find({
      where: {
        customer: {
          cusId: cusId,
        },
      },
      relations: {
        customer: true,
        tickets: {
          showtime: {
            movie: true,
          },
          seat: true,
        },
        recfoods: {
          food: true,
        },
      },
      order: {
        creatDate: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
