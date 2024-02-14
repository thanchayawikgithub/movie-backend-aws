import { Seat } from 'src/seats/entities/seat.entity';
import { Showtime } from 'src/showtimes/entities/showtime.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShowtimeSeat {
  @PrimaryGeneratedColumn()
  ShoseatId: number;

  @Column()
  ShoseatSowtimeId: number;

  @Column()
  ShoseatSeatId: number;

  @Column()
  ShoseatStatus: string;

  @ManyToOne(() => Showtime, (showtimes) => showtimes.showtimeseats)
  showtimes: Showtime;

  @ManyToOne(() => Seat, (seats) => seats.showtimeseats)
  seats: Seat;
}
