import { Movie } from 'src/movies/entities/movie.entity';
import { ShowtimeSeat } from 'src/showtime_seats/entities/showtime_seat.entity';
import { Theater } from 'src/theaters/entities/theater.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Showtime {
  @PrimaryGeneratedColumn({ comment: 'รหัสรอบฉาย' })
  showId: number;

  @Column({ comment: 'เวลาเริ่มรอบฉาย' })
  showStart: Date;

  @Column({ comment: 'วันที่รอบฉาย' })
  showDate: Date;

  @Column({ comment: 'เวลาที่หยุดฉาย' })
  showEnd: Date;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Movie, (movie) => movie.showtimes)
  @JoinColumn({ name: 'movieId' })
  movie: Movie;

  @OneToMany(() => Ticket, (ticket) => ticket.showtime)
  tickets: Ticket[];

  @ManyToOne(() => Theater, (theater) => theater.showtimes)
  @JoinColumn({ name: 'theaterId' })
  theater: Theater;

  @OneToMany(() => ShowtimeSeat, (showtimeseats) => showtimeseats.showtime)
  showtimeseats: ShowtimeSeat[];
}
