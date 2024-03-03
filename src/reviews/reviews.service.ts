import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { Repository } from 'typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}
  async create(createReviewDto: CreateReviewDto) {
    const { ticketId, cusId } = createReviewDto;
    const review = new Review();
    const ticket = await this.ticketRepository.findOne({
      where: { ticketId: ticketId },
      relations: { showtime: { movie: true } },
    });
    if (!ticket) {
      throw new NotFoundException('ticket not found');
    }
    if (createReviewDto.cusId >= 1) {
      const customer = await this.customerRepository.findOne({
        where: { cusId: cusId },
      });
      if (!customer) {
        throw new NotFoundException('customer not found');
      }
      review.customer = customer;
    }

    review.reviewRating = createReviewDto.reviewRating;
    review.reviewComment = createReviewDto.reviewComment;
    review.ticket = ticket;
    review.movie = ticket.showtime.movie;
    return await this.reviewRepository.save(review);
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  async findByMovieId(movieId: number) {
    const review = this.reviewRepository.find({
      where: { movie: { movieId: movieId } },
      relations: {
        customer: true,
      },
      order: {
        creatDate: 'DESC',
      },
    });
    return review;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
function constructer(arg0: any, recieptRepository: any, arg2: any) {
  throw new Error('Function not implemented.');
}
