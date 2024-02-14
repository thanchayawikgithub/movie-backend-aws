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
  @PrimaryGeneratedColumn()
  ticketId: number;

  @Column()
  ticketPrice: number;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToOne(() => Review, (review) => review.tickets)
  @JoinColumn()
  reviews: Review[];

  @ManyToOne(() => Showtime, (showtime) => showtime.tickets)
  showtimes: Showtime[];

  @OneToOne(() => Seat, (seat) => seat.tickets)
  @JoinColumn()
  seat: Seat[];

  @OneToMany(() => Entrylog, (entrylogs) => entrylogs.tickets)
  entrylogs: Entrylog[];

  @OneToOne(() => Customer, (customers) => customers.tickets)
  customers: Customer[];

  @ManyToOne(() => Receipt, (receipts) => receipts.tickets)
  receipts: Receipt;
}
