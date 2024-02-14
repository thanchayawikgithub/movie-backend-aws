import { Seat } from 'src/seats/entities/seat.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ShowtimeSeat {
  @PrimaryGeneratedColumn({ comment: 'รหัสที่นั่งในรอบฉาย' })
  showSeatId: number;

  @Column()
  showSeatSowtimeId: number;

  @Column()
  showSeatSeatId: number;

  @Column()
  showSeatStatus: string;

  @ManyToOne(() => Showtime, (showtime) => showtime.showtimeseats)
  @JoinColumn({ name: 'showId' })
  showtime: Showtime;

  @ManyToOne(() => Seat, (seats) => seats.showtimeseats)
  @JoinColumn({ name: 'seatId' })
  seat: Seat;
}
