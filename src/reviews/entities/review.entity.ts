import { Customer } from 'src/customers/entities/customer.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn({ comment: 'รหัสรีวิว' })
  reviewId: number;

  @Column({ comment: 'วันที่รีวิว' })
  reviewDate: Date;

  @Column({ comment: 'เรทติ้งรีวิว' })
  reviewRating: number;

  @Column({ comment: 'ความคิดเห็นรีวิว' })
  reviewComment: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Movie, (movie) => movie.reviews)
  @JoinColumn({ name: 'movieId' })
  movie: Movie;

  @OneToOne(() => Ticket, (ticket) => ticket.review)
  @JoinColumn({ name: 'ticketId' })
  ticket: Ticket;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  @JoinColumn({ name: 'cusId' })
  customer: Customer;
}
