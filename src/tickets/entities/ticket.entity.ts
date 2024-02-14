import { Customer } from 'src/customers/entities/customer.entity';
import { Entrylog } from 'src/entrylogs/entities/entrylog.entity';
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

  @OneToMany(() => Entrylog, (entrylog) => entrylog.ticket)
  entrylogs: Entrylog[];

  @OneToOne(() => Customer, (customer) => customer.ticket)
  @JoinColumn({ name: 'cusId' })
  customer: Customer;

  @ManyToOne(() => Receipt, (receipt) => receipt.tickets)
  @JoinColumn({ name: 'receiptId' })
  receipts: Receipt;
}
