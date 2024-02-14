import { Movie } from 'src/movies/entities/movie.entity';
import { Theater } from 'src/theaters/entities/theater.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Showtime {
  @PrimaryGeneratedColumn()
  showId: number;

  @Column()
  showStart: Date;

  @Column()
  showDate: Date;

  @Column()
  showEnd: Date;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @ManyToOne(() => Movie, (movie) => movie.showtimes)
  movie: Movie;

  @OneToMany(() => Ticket, (ticket) => ticket.showtimes)
  tickets: Ticket[];

  @ManyToOne(() => Theater, (theaters) => theaters.showtime)
  theaters: Theater;
}
