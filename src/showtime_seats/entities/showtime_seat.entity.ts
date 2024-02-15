import { Seat } from 'src/seats/entities/seat.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
import { Theater } from 'src/theaters/entities/theater.entity';
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

  @Column({
    default: true,
  })
  showSeatStatus: boolean;

  @ManyToOne(() => Showtime, (showtime) => showtime.showtimeseats)
  @JoinColumn({ name: 'showId' })
  showtime: Showtime;

  @ManyToOne(() => Seat, (seats) => seats.showtimeseats)
  @JoinColumn({ name: 'seatId' })
  seat: Seat;

  @ManyToOne(() => Theater, (theater) => theater.showtimeseats)
  @JoinColumn({ name: 'theaterId' })
  theater: Theater;
}
