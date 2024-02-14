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
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn({ comment: 'รหัสที่นั่ง' })
  seatId: number;

  @Column({ comment: 'หมายเลขที่นั่ง' })
  seatNumber: string; //หมายเลขที่นั่ง

  @Column({ comment: 'ประเภทที่นั่ง' })
  seatType: string;

  @Column({ comment: 'ราคาที่นั่ง' })
  seatPrice: string;

  @CreateDateColumn({ comment: 'วันที่สร้าง' })
  creatDate: Date;

  @DeleteDateColumn({ comment: 'วันที่ลบ' })
  deleteDate: Date;

  @UpdateDateColumn({ comment: 'วันที่อัพเดท' })
  updateDate: Date;

  @OneToOne(() => Ticket, (tickets) => tickets.seat)
  @JoinColumn({ name: 'ticketId' })
  ticket: Ticket;

  @ManyToOne(() => Theater, (theater) => theater.seats)
  @JoinColumn({ name: 'theaterId' })
  theater: Theater;

  @OneToMany(() => ShowtimeSeat, (showtimeseat) => showtimeseat.seat)
  showtimeseats: ShowtimeSeat[];
}
