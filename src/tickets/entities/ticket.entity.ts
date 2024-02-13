import { Review } from 'src/reviews/entities/review.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
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
}
