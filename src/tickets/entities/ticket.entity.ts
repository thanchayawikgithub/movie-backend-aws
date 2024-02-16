import { Customer } from 'src/customers/entities/customer.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Seat } from 'src/seats/entities/seat.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn({ comment: 'รหัสตั๋ว' })
  ticketId: number;

  @Column({ comment: 'ราคาตั๋ว' })
  ticketPrice: number;

  @Column({ comment: 'รีวิว url' })
  ticketReviewUrl: string;

  @Column({ comment: 'หมายเลขตั๋ว' })
  ticketNumber: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToOne(() => Review, (review) => review.ticket)
  @JoinColumn({ name: 'reviewId' })
  review: Review;

  @ManyToOne(() => Showtime, (showtime) => showtime.tickets)
  @JoinColumn({ name: 'showId' })
  showtime: Showtime;

  @OneToOne(() => Seat, (seat) => seat.ticket)
  @JoinColumn({ name: 'seatId' })
  seat: Seat;

  @ManyToOne(() => Receipt, (receipt) => receipt.tickets)
  @JoinColumn({ name: 'receiptId' })
  receipt: Receipt;
}
