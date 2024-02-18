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
import { CreateTicketDto } from 'src/tickets/dto/create-ticket.dto';
import { Food } from 'src/foods/entities/food.entity';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt) private recieptRepository: Repository<Receipt>,
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
    if (receipt.recPaymentMethod === 'credit card') {
      const card = await this.cardRepository.findOne({
        where: { cardId: cardId },
      });
      if (!card) {
        throw new NotFoundException('card not found');
      }
      receipt.card = card;
    }

    receipt.recTotalPrice = createReceiptDto.recTotalPrice;
    receipt.recPaymentMethod = createReceiptDto.recPaymentMethod;
    receipt.customer = customer;
    const savedReceipt = await this.recieptRepository.save(receipt);

    for (const ticketDto of createReceiptDto.tickets) {
      const { showId, seatId } = ticketDto;
      const ticket = new Ticket();
      const show = await this.showtimeRepository.findOne({
        where: { showId: showId },
      });
      if (!show) {
        throw new NotFoundException('showtime not found');
      }
      const seat = await this.seatRepository.findOne({
        where: { seatId: seatId },
      });
      ticket.showtime = show;
      ticket.seat = seat;
      ticket.ticketPrice = seat.seatPrice;
      ticket.receipt = savedReceipt;
      const savedTicket = await this.ticketRepository.save(ticket);
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
        const savedReceiptFood =
          await this.receiptFoodRepository.save(receiptFood);
      }
    }
  }

  findAll() {
    return `This action returns all receipts`;
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
